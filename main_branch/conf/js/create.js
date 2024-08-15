
// carrega os itens da lista e cria os projetos de forma visivel
function loadMapItens(text)
{
    if (text != null)
    {
        let obj = JSON.parse(text);
        if (obj.projetos.length != 0)
        {
            obj.projetos.forEach(a => {
                global_map.set(a.nome, a)
            });

            global_map.forEach(a =>{
                loadPjElements(a.nome); // load.js
                // console.log(a.nome);
            })
        }
    }
    else
    {
        localStorage.setItem("projetos", '{"projetos":[]}')
    }
    // global_obj.projetos.length
}

// cria e salva um novo projeto na lista
function createNewProject() 
{
    let nome_projeto = document.getElementById("project_name").value
    let desc_projeto = document.getElementById("project_desc").value
    let entradas = [] //"00:00"
    let saidas =  [] //"00:00"
    let logs = []

    let obj = JSON.parse(localStorage.getItem("projetos"));

    obj.projetos.push({nome:nome_projeto,desc:desc_projeto, entrada:entradas, saida:saidas, logs:logs})
    
    console.table(obj)

    updateGlobalJson(obj);
    location.reload()
}

// cria e salva um novo log relacionado ao projeto atual
function createNewLog()
{
    let log_value = document.getElementById("log_area").value

    if (global_name != "none")
    {
        global_map.get(global_name).logs.push(log_value);
        // console.log(global_map.get(global_name));

        let obj = allToObj(global_map);
        updateGlobalJson(obj)
    }
    location.reload()
}

// cria e salva um novo registro de hora relacionado ao projeto atual
function createHourRegistry(t) 
{
    let xy = document.getElementById("in_input_div");
    let yz = document.getElementById("out_input_div");

    let x = document.getElementById("in_input");
    let y = document.getElementById("out_input");

    let ref = global_map

    if (t == 1 ) 
    {
       if (x.value != "")
       {
            xy.style.display = "none";
            x.style.borderColor = '#000000';

            ref.get(global_name).entrada.push(x.value);
            let obj = allToObj(ref);

            updateGlobalJson(obj);
       }
    }
    else
    {
        if (y.value != "")
        {
            yz.style.display = "none";
            y.style.borderColor = '#000000';

            ref.get(global_name).saida.push(y.value);
            let obj = allToObj(ref);

            updateGlobalJson(obj);
        }
    }
    getInfo();
}

// auto invocação
(function()
{
    // localStorage.setItem("projetos", global_json)
    loadMapItens(localStorage.getItem("projetos"));
    securityCheck();
})();

// adiciona um listener ao elemento que chama uma função e muda o nome da
document.getElementById("inner_lower_div").addEventListener('click', (e) => {global_name = e.target.innerHTML})