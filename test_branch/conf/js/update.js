
// atualiza o global storage com as informações de um objeto
function updateGlobalJson(obj) 
{
    localStorage.setItem("projetos", JSON.stringify(obj));
}

