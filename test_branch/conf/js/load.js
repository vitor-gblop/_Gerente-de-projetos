
class Projeto
{
    constructor(nome, descricao, entradas, saidas, logs)
    {
        this.nome = nome
        this.descricao = descricao
        this.entradas = entradas
        this.saidas = saidas
        this.logs = logs
    }
}

// VARIAVEIS
var global_name = "none";
var global_map = new Map();
var global_json = '{"projetos" : ['+
    '{"nome":"teste 1","desc":"um teste de objetos", "entrada":["15:30", "23:00"], "saida":["20:00", "01:00"], "logs":[]},' +
    '{"nome":"teste 2","desc":"um teste de objetos", "entrada":["15:30", "23:00"], "saida":["20:00", "01:00"], "logs":[]}' +
']}';
var global_obj = {"projetos" : [
    {"nome":"teste 1","desc":"um teste de objetos", "entrada":["15:30", "23:00"], "saida":["20:00", "01:00"], "logs":[] }
]}

// FUNÇÔES

// cria e carrega os elementos visuais e clicaveis dos projetos no programa 
function loadPjElements(nome) // create.js
{
    let nw = document.createElement("div");
    
    let body = document.getElementById("inner_lower_div");
    nw.appendChild(document.createTextNode(nome));
    body.appendChild(nw);
    nw.setAttribute("id", "project_b");
    nw.setAttribute("class", "prj");
    nw.setAttribute("onclick", "getInfo()");
}

// função chamada a cada clique no projeto, atualiza as informações
function getInfo()
{
    setTimeout(() => {
        // console.log(global_name);
        securityCheck()
        loadHourEntries();
        loadLogsEntries();
        loadName_Description();
    }, 300); 
}

function loadHourEntries() {
    let ul_entrada = document.getElementById("ul_entrada")
    let ul_saida = document.getElementById("ul_saida")

    let _obj = global_map.get(global_name);

    // ENTRADA
    if(_obj.entrada.length == 0)
    {
        
        ul_entrada.innerHTML = " -- "
    }
    else
    {
        ul_entrada.innerHTML = _obj.entrada.map(item => `<li> ${item} </li>`).join("")
    } 

    // SAIDA
    if(_obj.saida.length == 0)
    {
        
        ul_saida.innerHTML = " -- "
    }
    else
    {
        ul_saida.innerHTML = _obj.saida.map(item => `<li> ${item} </li>`).join("")
    } 
}
function loadLogsEntries() {
    let ul_log = document.getElementById("ul_log")
    let _obj = global_map.get(global_name);

    if(_obj.logs.length == 0)
    {
        ul_log.innerHTML = "Nenhum log registrado"
    }
    else
    {
        ul_log.innerHTML = _obj.logs.map(item => `<li> ${item} </li>`).join("")
    }
}
function loadName_Description()
{
    let x = document.getElementById("info_project_name");
    let y = document.getElementById("project_description");
    let _obj = global_map.get(global_name);

    x.innerHTML = _obj.nome;
    y.innerHTML = _obj.desc;
}

// abre e fecha as abas do programa
aba_state = [1, 1, 0 ,0, 0, 0]
function showAbaProjetos()
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
function showAbaNovoProjeto()
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
function showAbaUploadFile()
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
function showAbaNovoLog()
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
function showHourInputs(t)
{
    if (t == 1){
        if(aba_state[5] == 1)
        {
            document.getElementById("in_input_div").style.display = "none";
            document.getElementById("inH").innerHTML = "adicionar entrada"
            aba_state[5] = 0
        }
        else
        {
            document.getElementById("in_input_div").style.display = "block";
            document.getElementById("inH").innerHTML = "Cancelar";
            aba_state[5] = 1
        }
    }
    else
    {
        if(aba_state[5] == 1)
            {
                document.getElementById("out_input_div").style.display = "none";
                document.getElementById("outH").innerHTML = "adicionar saída"
                aba_state[5] = 0
            }
            else
            {
                document.getElementById("out_input_div").style.display = "block";
                document.getElementById("outH").innerHTML = "Cancelar";
                aba_state[5] = 1
            }
    }
}

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

// estetica - muda o nome de um span na hora do upload
function loadFileName(fileName)
{
    document.getElementById("file_label").innerHTML = fileName;
}
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

function submitFiles()
{
    updateGlobalJson(allToObj(global_map));
    location.reload();
}


function securityCheck()
{
    if (global_name == "none")
    {
        document.getElementById("info_dropdown").style.display = "none";
    }
    else
    {
        document.getElementById("info_dropdown").style.display = "block";
    }
}

// converte um elemento de javascript Map para json
function toJson(map, name)
{
    let map_item = map.get(name);
    let obj = {"projetos" : []};

    obj.projetos.push({"nome": map_item.nome,"desc":map_item.desc, "entrada":map_item.entrada, "saida":map_item.saida, "logs":map_item.logs});

    console.log(obj)
    return JSON.stringify(obj);
}
// converte um elemento de javascript Map para um objeto
function toObj(map, name)
{
    let map_item = map.get(name);
    let obj = {"projetos" : []};

    obj.projetos.push({"nome": map_item.nome,"desc":map_item.desc, "entrada":map_item.entrada, "saida":map_item.saida, "logs":map_item.logs});

    return obj;
}
// converte um Map para um objeto
function allToObj(map)
{
    let obj = {"projetos" : []};

    if (map.size != 0)
    {
        map.forEach(e => {
            obj.projetos.push({"nome": e.nome,"desc":e.desc, "entrada":e.entrada, "saida":e.saida, "logs":e.logs})
        });
    }

    return obj;
}
// global_map.set("teste original", {"nome": ["eudes"]});
// global_map.get("teste original").nome.push("cleia");
// console.log(global_map.get("teste original").nome)