
//downloads
{
    //  baixa todos os projetos salvos
    function downloadAllFiles()
    {   
        let ref = global_map;
        if (ref.size != 0)
        {
            let data = JSON.parse(localStorage.getItem("projetos"));
            // console.log(data)

            let file_to_save = new File([JSON.stringify(data)], "AllProjects.json")
            const blobUrl = URL.createObjectURL(file_to_save);

            let aElem = document.getElementById("download_item");
            aElem.setAttribute("href" , blobUrl);
            aElem.setAttribute("download", file_to_save.name);
        }
    }
    // baixa apenas um projeto salvo
    function downloadIndexFile(obj)
    { 
        let ref = global_map;
        if (ref.size != 0)
        {
            // transforma em objeto
            let data = toObj(ref, global_name);

            // transforma em string e baixa
            let file_to_save = new File([JSON.stringify(data)], "SingleProject.json")
            const blobUrl = URL.createObjectURL(file_to_save);

            let aElem = document.getElementById("downloadIndex_item");
            aElem.setAttribute("href" , blobUrl);
            aElem.setAttribute("download", file_to_save.name);
        }
    }
}