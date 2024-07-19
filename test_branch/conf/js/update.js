



function showEntryInput(t)
{
    let x = document.getElementById("in_input_div");
    let y = document.getElementById("out_input_div");

    if (t == 1)
        x.style.display = "flex";
    else
        y.style.display = "flex";
}


aba_state = [1, 1, 0 ,0, 0]
function MostrarAbaProjetos()
{
    if(aba_state[1] == 1)
    {
        document.getElementById("hidden_PJ_div").style.display = "none";
        document.getElementById("PJ_item").innerHTML = "Mostrar Aba Projetos"
        aba_state[1] = 0
    }
    else
    {
        document.getElementById("hidden_PJ_div").style.display = "block";
        document.getElementById("PJ_item").innerHTML = "Ocultar Aba Projetos"
        aba_state[1] = 1
    }
}

function MostrarAbaNovoProjetos()
{
    if(aba_state[2] == 1)
    {
        document.getElementById("hidden_NP_div").style.display = "none";
        document.getElementById("NP_item").innerHTML = "Adicionar Novo Projeto"
        aba_state[2] = 0
    }
    else
    {
        document.getElementById("hidden_NP_div").style.display = "block";
        document.getElementById("NP_item").innerHTML = "Ocultar Aba Novo Projeto"
        aba_state[2] = 1
    }
}

function MostrarAbaFiles()
{
    if (aba_state[3] == 0)
    {
        document.getElementById("hidden_F_div").style.display = "block";
        document.getElementById("F_item").innerHTML = "Cancelar Carregamento"
        aba_state[3] = 1
    }
    else
    {
        document.getElementById("hidden_F_div").style.display = "none";
        document.getElementById("F_item").innerHTML = "Carregar Novos Projetos"
        aba_state[3] = 0
    }
    
}

function MostrarAbaNovoLog()
{
    if(aba_state[4] == 1)
    {
        document.getElementById("hidden_LG_div").style.display = "none";
        document.getElementById("LG_item").innerHTML = "Adicionar Novo Log"
        aba_state[4] = 0
    }
    else
    {
        document.getElementById("hidden_LG_div").style.display = "block";
        document.getElementById("LG_item").innerHTML = "Ocultar Aba Novo Log"
        aba_state[4] = 1
    }
}

function DownloadFiles()
{   
    // let data = JSON.parse(localStorage.getItem("pjs"))
    // console.log(data)

    // let file_to_save = new Blob([JSON.stringify(data)], {
    //     type: 'application/json'
    // })
    // const blobUrl = URL.createObjectURL(file_to_save)

    // let aElem = document.getElementById("download_item")
    // aElem.setAttribute("href" , blobUrl)
    // aElem.setAttribute("download", "scene.json")

    if (list.length != 0)
    {
        let data = JSON.parse(localStorage.getItem("pjs"))
        console.log(data)

        let file_to_save = new File([JSON.stringify(data)], "Projects.json")
        const blobUrl = URL.createObjectURL(file_to_save)

        let aElem = document.getElementById("download_item")
        aElem.setAttribute("href" , blobUrl)
        aElem.setAttribute("download", file_to_save.name)
    }
}

function DownloadIndexFile()
{ 
    if (list.length != 0)
    {
        let data = JSON.stringify(obj.projetos[indice_global])
        console.log(data)

        let file_to_save = new File([JSON.stringify(data)], "SingleProject.json")
        const blobUrl = URL.createObjectURL(file_to_save)

        let aElem = document.getElementById("downloadIndex_item")
        aElem.setAttribute("href" , blobUrl)
        aElem.setAttribute("download", file_to_save.name)
    }
}

function ReceiveFiles()
{   
    let input = document.getElementById("file_receiver").files
    let reader = new FileReader();

    reader.readAsText(input[0])

    reader.onerror = (e)=>{
        console.error(e)
    }
    reader.onload = ()=>{
        LoadFileName(input[0].name)
        LoadReceivedFiles(reader.result.toString())
    }
}

function LoadFileName(fileName)
{
    document.getElementById("file_label").innerHTML = fileName
}

function LoadReceivedFiles(result)
{
    document.getElementById("add_file_button").disabled = false

    received_json = result
    console.log(received_json)

    try
    {
        let ax_obj = JSON.parse(received_json)
        console.log(ax_obj)
        ax_obj.projetos.forEach(e => {
            // console.log(e)
            obj.projetos.push(e)
            
        });
        // console.log(obj)
    }
    catch(e)
    {
        console.error(e)
    }       
}

function SubmitFiles()
{
    armazenarDados(obj)
    location.reload()
}
function nameDesc()
{
    let ax = document.getElementById("project_name");
    let ay = document.getElementById("project_desc");

    ay.disabled = true
    ax.onchange = ()=>{
        ay.disabled = false
    }
}

(function()
{
    SubmitFilesOnEnter();
    nameDesc();
})();