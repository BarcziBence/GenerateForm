export function renderField(labelOnTop, obj, globalstate) {
    let field = renderLabel(obj.label, labelOnTop);
    switch(obj.type){
        case "text" : field.appendChild(renderText(obj, globalstate))
            break;
        case "number" : field.appendChild(renderNumber(obj, globalstate))
            break;
        case "email" : field.appendChild(renderEmail(obj, globalstate))
            break;
        default : field.appendChild(renderDefault(obj, globalstate))
    }
    return field;
}

export function renderForm(obj){
    let app = document.getElementById("app")
    var formState = {}

    if(obj.showState){
        let label = document.createElement("label");
        label.id = "globalstate"
        label.innerText = "Form state: " + JSON.stringify(formState)
        app.appendChild(label)
    }

    let fields = obj.fields
    for(let i = 0; i < fields.length; i++){
        let field = renderField(obj.labelOnTop, fields[i], formState)
        app.appendChild(field);
    }
}

function renderText(obj, globalstate){
    let field = document.createElement("input");
    field.type = "text";
    field.id = obj.id;
    field.state = globalstate
    field.addEventListener("input", (event) => {updateState(obj, field)})
    return field;
}

function renderNumber(obj, globalstate){
    let field = document.createElement("input");
    field.type = "number";
    field.id = obj.id;
    field.state = globalstate
    field.addEventListener("input", (event) => {updateState(obj, field)})
    return field;
}

function renderEmail(obj, globalstate){
    let field = document.createElement("input");
    field.type = "email";
    field.state = globalstate
    field.addEventListener("input", (event) => {updateState(obj, field)})
    field.id = obj.id;
    return field;
}

function renderDefault(obj){
    let field = document.createElement("div");
    field.classList.add("element")
    return field;
}

function renderLabel(lbText, lbOnTop){

    let field = document.createElement("div");
    field.classList.add("element")
    let label = document.createElement("label");
    label.innerHTML = lbText;
    field.style.display = "flex";
    if(lbOnTop == true) {
        field.style.flexDirection = "column";
    }
    else{
        field.style.flexDirection = "row";
    }
    field.appendChild(label);
    return field;
}

export function updateState(obj, field){
    let value = field.value
    obj.state[obj.id] = value
    field.value = value

    updateStateOutput(obj.state)
}

function updateStateOutput(state){
    let output = document.getElementById("globalstate")
    if(output) {
        output.innerHTML = "Form state: " + JSON.stringify(state)
    }
}



