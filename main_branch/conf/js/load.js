
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
    }, 300); 
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

// exibir abas
{
    // abre e fecha as abas do programa
    let aba_state = [1, 1, 0 ,0, 0, 0, 0];

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
    function showAbaNovoProjeto(t)
    {
        if(t == 1)
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
        else
        {
            document.getElementById("hidden_NP_div").style.display = "none";
            document.getElementById("NP_item").innerHTML = "Adicionar Novo Projeto";
            aba_state[2] = 0
        }
    }
    function showAbaUploadFile(t)
    {
        if (t == 1)
        {
            if (aba_state[3] == 1)
            {
                document.getElementById("hidden_F_div").style.display = "none";
                document.getElementById("F_item").innerHTML = "Carregar Novos Projetos"
                
                aba_state[3] = 0
            }
            else
            {
                document.getElementById("hidden_F_div").style.display = "block";
                document.getElementById("F_item").innerHTML = "Cancelar Carregamento"
                
                aba_state[3] = 1
            }
        }
        else
        {
            document.getElementById("hidden_F_div").style.display = "none";
            document.getElementById("F_item").innerHTML = "Cancelar Carregamento";
            aba_state[3] = 0
        }
        
    }
    function showAbaNovoLog(t)
    {
        if (t == 1)
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
        else
        {
            document.getElementById("hidden_LG_div").style.display = "none";
            document.getElementById("LG_item").innerHTML = "Adicionar Novo Log";
            aba_state[4] = 0
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
            if(aba_state[6] == 1)
                {
                    document.getElementById("out_input_div").style.display = "none";
                    document.getElementById("outH").innerHTML = "adicionar saída"
                    aba_state[6] = 0
                }
                else
                {
                    document.getElementById("out_input_div").style.display = "block";
                    document.getElementById("outH").innerHTML = "Cancelar";
                    aba_state[6] = 1
                }
        }
    }
}


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

// estetica garante que os botoes da area de 
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

// carregar horas gastas
// carregar horas gastas
{
    function loadTimeSpent() 
    {
        document.getElementById("time_spent").innerHTML = "00:00";

        let hr_entrada = document.getElementById("ul_entrada").children;
        let hr_saida = document.getElementById("ul_saida").children;

        let arr_ent = Array.from(hr_entrada);
        let arr_sai = Array.from(hr_saida);
        let res = [];
        
        console.log(arr_sai.length)
        // itera pelo o tamanho do arr de saida
        if (arr_sai.length > 0)
        {
            for (let i = 0; i < arr_sai.length; i++) 
            {
                let a = arr_ent[i].innerText.toString();
                let b = arr_sai[i].innerText.toString();
                
                res.push(diffTime(a, b));
            }

            
            let tmp_gasto = "00:00";
            let tmp_soma = "00:00";
            let last_tmp = "00:00";
            if (res.length > 1)
            {
                for (let i = 0; i < res.length; i++) 
                {
                    let tratarData = (str = "") =>
                    {
                        let ax = str.replace("h", "")
                        ax = ax.replace("m", "");

                        return ax;
                    }

                    a = res[i].slice(0,5);
                    tmp_soma = sumTime(tratarData(tmp_soma), a);
                    tmp_gasto = tmp_soma
                }
            }
            else
            {
                let a = arr_ent[0].innerText.toString();
                let b = arr_sai[0].innerText.toString();

                let x = diffTime(a, b);
                let y = x.split(":");

                // console.log(y);

                let time_f = y[0] + "h:" + y[1] + "m";
                tmp_gasto = time_f
            }
            document.getElementById("time_spent").innerHTML = tmp_gasto;
        }
    }

    let diffTime = (ini_ = "", fim_ = "") => {
        let inicio_d = new Date("2022-02-20T"+ini_+":00");
        let fim_d = new Date("2022-02-20T"+fim_+":00");

        let diferenca = new Date( fim_d - inicio_d );

        let h = diferenca.getUTCHours();
        let m = diferenca. getUTCMinutes();

        if (m > 59)
        {
            h += 1;
            m = m % 60;
        }
        let resultado = (h < 10) ? `0${h}:` : `${h}:`;
        resultado += (m < 10) ? `0${m}` : `${m}`;
        
        // if (diferenca.getUTCMinutes() < 10)
        // {
        //     resultado +=  "0" + diferenca.getUTCMinutes();
        // }
        // else
        // {
        //     resultado +=  diferenca.getUTCMinutes();
        // }
        

        console.log("diff -- " + resultado);
        return resultado;
    }

    let sumTime = (ini_ = "", fim_ = "") => {
        let entrada = new Date("2022-02-20T"+ini_+":00");
        let saida = new Date("2022-02-20T"+fim_+":00");

        let h =  entrada.getHours() + saida.getHours();
        let m = entrada.getMinutes() + saida.getMinutes();

        if (m > 59)
        {
            h += 1;
            m = m % 60;
        }
        let resultado = (h < 10) ? `0${h}h:` : `${h}h:`;
        resultado += (m < 10) ? `0${m}m` : `${m}m`;
        
        console.log("sum -- "+resultado);
        return resultado;
    }
}
// global_map.set("teste original", {"nome": ["eudes"]});
// global_map.get("teste original").nome.push("cleia");
// console.log(global_map.get("teste original").nome)