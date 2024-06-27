

class Projeto
{
    constructor(nome, descricao, entradas, saidas)
    {
        this.nome = nome
        this.descricao = descricao
        this.entradas = entradas
        this.saidas = saidas
    }
}

const c1 = new Projeto("teste 1", "um teste de objetos", ["15:30", "23:00"], ["20:00", "01:00"])
const c2 = new Projeto("teste 2", "um teste da lista", ["13:15", "14:00"], ["17:00", "17:00"])

let actual_list = c1;
let project_time_spent = 0.0;

let list = [
    c1,
    c2
];


function createProject()
{
    let nome_projeto = document.getElementById("project_name").value
    let desc_projeto = document.getElementById("project_desc").value
    let entrada = [] //"00:00"
    let saida =  [] //"00:00"

    list.push(new Projeto(nome_projeto, desc_projeto, entrada, saida))
    console.table(list)

    // lista.innerHTML = list.map(item => `<li> ${item.nome} </li>`).join("")
    createVisualProject(nome_projeto)
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

function removeProject() 
{
    list.pop()
    
    let arr = document.getElementsByClassName("prj")
    arr[arr.length-1].remove()

    // let lista = document.getElementById("lista")
    // lista.innerHTML = list.map(item => `<li> ${item.nome} </li>`).join("")
}

let nm = "";
let indice = 0
function carregar_informacao()
{
    for (let i = 0; i  < list.length; i++) {
        if (nm == list[i].nome)
        {
            actual_list = list[i];
            indice = i;
        }
    }

    // console.log("--", nm)
    // console.log("--", indice)

    entrada(indice)
    saida(indice)

    let x = document.getElementById("info_project_name")
    let y = document.getElementById("project_description")

    x.innerHTML = list[indice].nome
    y.innerHTML = list[indice].descricao
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

function debug()
{
    entrada(indice)
    saida(indice)
}

function showEntryInput(t)
{
    let x = document.getElementById("in_input_div")
    let y = document.getElementById("out_input_div")

    if (t == 1)
        x.style.display = "flex";
    else
        y.style.display = "flex";
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
            list[indice].entradas.push(x.value);
            xx.style.display = "none";
            x.style.borderColor = '#000000';
        }
        else
        {
            x.style.borderColor = '#ff0000';
        }
    }
    else
    {
        // if (actual_list.entradas.lastIndexOf())
        let result = re.test(y.value);

        if(result && t != 1)
        {
            
            list[indice].saidas.push(y.value);
            yy.style.display = "none";
            y.style.borderColor = '#000000';
        }
        else
        {
            y.style.borderColor = '#ff0000';
        }
    }

    console.table(c1.entradas)
    carregar_informacao()
}




function time_manager() 
{
    let ts = document.getElementById("time_spent");

    let time_in = [];
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
    // console.table(time_in);
    // console.table(time_out)

    // ts.innerHTML = project_time_spent
}

// ---------------------------------------------------------------
(function()
{
    carregar_informacao()
    list.forEach(item => {
        createVisualProject(item.nome)
    });
    time_manager()
})();

document.getElementById("inner_lower_div").addEventListener('click', (e) => {nm = e.target.innerHTML})
// console.log(e.target.innerHTML)