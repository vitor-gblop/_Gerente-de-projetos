
// receber arquivos
{
    // estetica - muda o nome de um span na hora do upload
    function loadFileName(fileName)
    {
        document.getElementById("file_label").innerHTML = fileName;
    }
    // verifica se e possivel ler o json carregado
    function loadReceivedFiles(result)
    {
        document.getElementById("add_file_button").disabled = false;
        
        let ref = global_map;
        try
        {
            let obj = JSON.parse(result)

            obj.projetos.forEach(e => {
                console.log(e);
                ref.set(e.nome, e);
            });
        }
        catch(e)
        {
            console.error(e);
        }       
    }

    // chamada ao apertar 'upload' atualiza o map com os projetos selecionados
    function submitFiles()
    {
        updateGlobalJson(allToObj(global_map));
        location.reload();
    }
}
