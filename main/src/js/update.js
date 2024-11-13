
// atualiza o global storage com as informações de um objeto
function updateGlobalJson(obj) 
{
    localStorage.setItem("projetos", JSON.stringify(obj));
}

// atualizar nome do projeto
function updateProjectName()
{
    let ref = global_map;

    let x = window.prompt("Digite o novo nome do projeto:", ref.get(global_name).nome);

    if (x != null && x != " ")
    {
        ref.get(global_name).nome = x;

        updateGlobalJson(allToObj(ref));
        location.reload();
    }
}
    
// atualizar descrição do projeto
function updateProjectDesc()
{
    let ref = global_map;
    
    let x = window.prompt("Digite a descrição do projeto:", ref.get(global_name).desc);

    if (x != null && x != " ")
    {
        ref.get(global_name).desc = x;

        updateGlobalJson(allToObj(ref));
        getInfo();
    }
}

// atualizar project log
function updateProjectLog()
{
    let ref = global_map;
    let ul_ref = document.getElementById("ul_log");

    let x = window.prompt("Indice do log (digite um numero):");

    let nIndex = parseInt(x);
    let ulChild = ul_ref.children;

    if (nIndex > 0 && nIndex <= ulChild.length)
    {
        let y = window.prompt("Nova descrição do log: ", ref.get(global_name).logs[nIndex-1]);

        if (y != null && y != " ")
        {
            ref.get(global_name).logs[nIndex] = y;
            updateGlobalJson(allToObj(ref));

            getInfo();
        }
    }
}