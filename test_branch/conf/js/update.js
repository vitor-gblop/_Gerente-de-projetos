
// atualiza o global storage com as informações de um objeto
function updateGlobalJson(obj) 
{
    localStorage.setItem("projetos", JSON.stringify(obj));
}

let x = "{\"projetos\":[{\"nome\":\"teste\",\"desc\":\"um supermercado\",\"entrada\":[],\"saida\":[],\"logs\":[]}]}"

let y = JSON.parse(x);
console.log(y);