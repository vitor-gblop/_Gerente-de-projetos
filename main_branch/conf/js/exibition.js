// exibir abas
{
    // abre e fecha as abas do programa
    let aba_state = [1, 1, 0 ,0, 0, 0, 0];

    var showInfoDiv = ()=>
    {
        document.getElementById("inner_upper_info_div").style.display = "block";
    }

    
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