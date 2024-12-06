import { renderForm, updateState } from "./field.js"

let app = document.getElementById("app")

let globalState = {};

let field = renderForm(
    {
        state : globalState,
        showState: true,
        labelOnTop : true,
        fields : [
            {
                id: "nev",
                type: 'text',
                label : 'Név:',
            },
            {
                id: "aaaaaaaaaaaaaaaa",
                type: 'number',
                label : 'AAA:',
            },
            {
                id: "email",
                type: 'email',
                label : 'Email:',
            }
        ]
    }
)

console.log(globalState);