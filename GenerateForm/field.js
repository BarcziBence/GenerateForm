export function renderField(obj) {
    switch(obj.type){
        case "text" : return renderText(obj)
        case "number" : return renderNumber(obj)
        case "email" : return renderEmail(obj)
        default : return renderDefault(obj)
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



function renderLabel(){

}