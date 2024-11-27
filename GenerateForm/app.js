import { renderField } from "./field.js"

let app = document.getElementById("app")

let globalStage = {};


let field = renderField(
    {
    state: globalStage,
    id: "nev",
    type: 'email'
    }
)

app.appendChild(field);

console.log(globalStage);