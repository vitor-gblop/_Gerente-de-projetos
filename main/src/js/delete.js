// deleta o projeto selecionado
function removeProject() 
{
    let ref = global_map;
    if (ref.size != 0)
    {
        // deleta o projeto
        ref.delete(global_name);

        let obj = allToObj(ref);
        updateGlobalJson(obj);

        location.reload();
    }
}

// deleta todos os projetos
function removeAllProject() 
{
    let ref = global_map;
    if (ref.size != 0)
    {
        // limpa o Map
        ref.clear();
        localStorage.clear();

        location.reload();
    }
}