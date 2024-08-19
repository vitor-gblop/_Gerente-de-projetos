
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
        loadTimeSpent();

        
    }, 200); 
    showInfoDiv();
}

// carga de informação
{
    // carrega as entrdas e saidas
    function loadHourEntries() 
    {
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

    // carrega os logs
    function loadLogsEntries() 
    {
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
    // carrega o nome e a descrição
    function loadName_Description()
    {
        let x = document.getElementById("info_project_name");
        let y = document.getElementById("project_description");
        let _obj = global_map.get(global_name);

        x.innerHTML = _obj.nome;
        y.innerHTML = _obj.desc;
    }
}

// estetica garante que os botoes da area de informação nao apareçam
function securityCheck()
{
    if (global_name == "none")
    {
        document.getElementById("add_in_add_out_div").style.display = "none";
        document.getElementById("info_dropdown").style.display = "none";
    }
    else
    {
        document.getElementById("info_dropdown").style.display = "block";
        document.getElementById("add_in_add_out_div").style.display = "flex";
    }
}

// conversores de map
{
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


}


// global_map.set("teste original", {"nome": ["eudes"]});
// global_map.get("teste original").nome.push("cleia");
// console.log(global_map.get("teste original").nome)