

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

// variaveis globais

let nome_global = "";
let indice_global = 0

let obj = null;
let project_time_spent = 0.0;

let list = [];
let actual_list = new Projeto("Any", "Any", [], [], []);

let input_files_top


let json = '{"projetos" : ['+
'{"nome":"teste 1","desc":"um teste de objetos", "entrada":["15:30", "23:00"], "saida":["20:00", "01:00"], "logs":[] },'+
'{"nome":"teste 2","desc":"um teste da lista", "entrada":["13:15", "14:00"], "saida":["17:00", "17:00"], "logs":[] },'+
'{"nome":"teste 3", "desc":"localstorage", "entrada":["15:30"], "saida":["20:00"], "logs":["chalala"] }'+
']}';
// let obj = JSON.parse(json);


function CriaProjeto()
{
    let nome_projeto = document.getElementById("project_name").value
    let desc_projeto = document.getElementById("project_desc").value
    let entradas = [] //"00:00"
    let saidas =  [] //"00:00"
    let logs = []

    // let pj = new Projeto(nome_projeto, desc_projeto, entradas, saidas);
    // list.push(pj)
    
    obj.projetos.push({nome:nome_projeto,desc:desc_projeto, entrada:entradas, saida:saidas, logs:logs})
    
    console.table(list)
    console.table(obj)

    // lista.innerHTML = list.map(item => `<li> ${item.nome} </li>`).join("")
    createVisualProject(nome_projeto)

    armazenarDados(obj)
    location.reload()
}

function CriaLog()
{
    let log_value = document.getElementById("log_area").value

    obj.projetos[indice_global].logs.push(log_value)
    armazenarDados(obj)
    location.reload()
}

function createVisualProject(nome)
{
    let nw = document.createElement("div");
    
    let body = document.getElementById("inner_lower_div");
    nw.appendChild(document.createTextNode(nome));
    body.appendChild(nw);
    nw.setAttribute("id", "project_b");
    nw.setAttribute("class", "prj");
    nw.setAttribute("onclick", "carregar_informacao()");
}

// carrega a exibição dos projetos e prenche a lista com objetos da classe projeto
function carregarProjetos()
{
    if (obj != null)
    {
        obj.projetos.forEach(item => 
        {
            // novos objetos
            let x = new Projeto(item.nome, item.desc, item.entrada, item.saida, item.logs);
            list.push(x);

            console.log(x);
            createVisualProject(item.nome)
        })
        // actual_list = list[0];
    }
}

function addInHour(t)
{
    let xx = document.getElementById("in_input_div");
    let yy = document.getElementById("out_input_div");

    let x = document.getElementById("in_input");
    let y = document.getElementById("out_input");

    
    let re = /[0-2][0-9].[0-5][0-9]/gm;
    

    if (t == 1) 
    {
        let result = re.test(x.value);
        
        if(result && t == 1)
        {
            xx.style.display = "none";
            x.style.borderColor = '#000000';

            obj.projetos[indice_global].entrada.push(x.value);
            localStorage.setItem("pjs",JSON.stringify(obj));
        }
        else
        {
            x.style.borderColor = '#ff0000';
        }
    }
    else
    {
        let result = re.test(y.value);

        if(result && t != 1)
        {
            yy.style.display = "none";
            y.style.borderColor = '#000000';

            obj.projetos[indice_global].saida.push(y.value);
            localStorage.setItem("pjs",JSON.stringify(obj));
        }
        else
        {
            y.style.borderColor = '#ff0000';
        }
    }

    console.table(obj.projetos[indice_global].entrada)
    carregar_informacao()
}

function time_manager() 
{
    let ts = document.getElementById("time_spent");

    let time_in = [];
    if (actual_list.entradas)
    {
        actual_list.entradas.forEach(item => {
            let ax_a = item.split(":");
            let ax_b = parseInt(ax_a[0]);

            time_in.push(ax_b);
            console.log(ax_b)
        });

        let time_out = [];
        actual_list.saidas.forEach(item => {
            let ax_a = item.split(":");
            let ax_b = parseInt(ax_a[0]);

            time_out.push(ax_b);
            console.log(ax_b)
        });

        if (time_out.length > 0) 
        {
            let time_ = 0;
            for (let i = 0; i < time_out.length; i++) 
            {
                if (time_in[i] < time_out[i])
                {
                    time_ += (time_out[i] - time_in[i]);
                    
                }
                else
                {
                    time_ += 24 - time_in[i]; 
                    time_ += time_out[i];
                }
            console.log("--" , time_);
            }

            ts.innerHTML =  time_;
        }
    }
}

//  Invocadas localmente ===========================================

function armazenarDados(obj)
{
    localStorage.setItem("pjs",JSON.stringify(obj))
    console.log(localStorage.getItem("pjs"))
}


// carrega as informações contidas em cada elemento da lista para a tela de exibição
function carregar_informacao()
{
    if (list.length != 0)
    {
        for (let i = 0; i  < list.length; i++) {
            if (nome_global == list[i].nome)
            {
                actual_list = list[i];
                indice_global = i;
            }
        }

        entrada(indice_global)
        saida(indice_global)
        logs(indice_global)

        let x = document.getElementById("info_project_name")
        let y = document.getElementById("project_description")

        x.innerHTML = list[indice_global].nome
        y.innerHTML = list[indice_global].descricao
    }
    else
    {
        let x = document.getElementById("info_project_name")
        let y = document.getElementById("project_description")
        let entradas = document.getElementById("ul_entrada")
        let saidas = document.getElementById("ul_saida")
        let logs = document.getElementById("ul_log")

        x.innerHTML = "Nome do projeto"
        y.innerHTML = "Descrição do projeto"

        entradas.innerHTML = " -- "
        saidas.innerHTML = " -- "
        logs.innerHTML = "Nenhum log registrado"
    }
}

function entrada(i) {
    let entradas = document.getElementById("ul_entrada")
    // console.table(list[i].entradas)
    if(list[i].entradas.length == 0)
    {
        entradas.innerHTML = " -- "
    }
    else
    {
        entradas.innerHTML = list[i].entradas.map(item => `<li> ${item} </li>`).join("")
    } 
}

function saida(i) {
    let saidas = document.getElementById("ul_saida")
    // console.table(list[i].saidas)
    if(list[i].entradas.length == 0)
    {
        saidas.innerHTML = " -- "
    }
    else
    {
        saidas.innerHTML = list[i].saidas.map(item => `<li> ${item} </li>`).join("")
    }
}

function logs(i) {
    let e = document.getElementById("ul_log")
    if(list[i].logs.length == 0)
    {
        e.innerHTML = "Nenhum log registrado"
    }
    else
    {
        e.innerHTML = list[i].logs.map(item => `<li> ${item} </li>`).join("")
    }
}

// Auto Invocação ==================================================
(function()
{
    if (obj == null) 
    {
        if (localStorage.getItem("pjs") != null)
        {
            obj = JSON.parse(localStorage.getItem("pjs"));
        }
        else
        {
            let ax_json = '{ "projetos" : [] }'
            obj = JSON.parse(json)
        }
    }
    
    carregarProjetos()
    carregar_informacao()
    time_manager()

    // localStorage.clear()
    // localStorage.setItem("pjs",JSON.stringify(obj))
    // console.log(localStorage.getItem("pjs"))
})();
document.getElementById("inner_lower_div").addEventListener('click', (e) => {nome_global = e.target.innerHTML})