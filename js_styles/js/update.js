



function showEntryInput(t)
{
    let x = document.getElementById("in_input_div");
    let y = document.getElementById("out_input_div");

    if (t == 1)
        x.style.display = "flex";
    else
        y.style.display = "flex";
}


aba_state = [1, 1, 0 ,0]
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

function MostrarAbaNovoLog()
{
    if(aba_state[3] == 1)
    {
        document.getElementById("hidden_LG_div").style.display = "none";
        document.getElementById("LG_item").innerHTML = "Adicionar Novo Log"
        aba_state[3] = 0
    }
    else
    {
        document.getElementById("hidden_LG_div").style.display = "block";
        document.getElementById("LG_item").innerHTML = "Ocultar Aba Novo Log"
        aba_state[3] = 1
    }
}



