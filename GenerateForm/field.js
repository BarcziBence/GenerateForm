export function renderField(labelOnTop, obj) {
    let field = renderLabel(obj.label, labelOnTop);
    switch(obj.type){
        case "text" : field.appendChild(renderText(obj))
            break;
        case "number" : field.appendChild(renderNumber(obj))
            break;
        case "email" : field.appendChild(renderEmail(obj))
            break;
        default : field.appendChild(renderDefault(obj))
    }
    return field;
}

export function renderForm(obj){
    let app = document.getElementById("app")

    if(obj.showState){
        let label = document.createElement("label");
        label.id = "globalstate"
    }

    let fields = obj.fields
    for(let i = 0; i < fields.length; i++){
        let field = renderField(obj.labelOnTop, fields[i])
        app.appendChild(field);
    }
}

function renderText(obj){
    let field = document.createElement("input");
    field.type = "text";
    field.id = obj.id;
    return field;
}

function renderNumber(obj){
    let field = document.createElement("input");
    field.type = "number";
    field.id = obj.id;
    return field;
}

function renderEmail(obj){
    let field = document.createElement("input");
    field.type = "email";
    field.id = obj.id;
    return field;
}

function renderDefault(obj){
    let field = document.createElement("div");
    return field;
}

function renderLabel(lbText, lbOnTop){

    let field = document.createElement("div");
    let label = document.createElement("label");
    label.innerHTML = lbText;
    field.style.display = "flex";
    if(lbOnTop) {
        field.style.flexDirection = "column";
    }
    else{
        field.style.flexDirection = "row";
    }
    field.appendChild(label);
    return field;
}

export function updateState(state){
    let field = document.getElementById("globalstate")
    field.innerHTML = state
}