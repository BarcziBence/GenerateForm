import { renderForm, updateState } from "./field.js"

let app = document.getElementById("app")

let globalState = {};

let field = renderForm(
    {
        controls : {
            onSave : () => {
                
            },
            onClear : () => {
                for(let i = 0; i < this.fields.length; i++){
                    this.fields[i].value = "";
                }
                updateState(globalState)
            }
        },
        showState: true,
        labelOnTop : true,
        fields : [
            {
                id: "nev",
                type: 'text',
                label : 'Név:',
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