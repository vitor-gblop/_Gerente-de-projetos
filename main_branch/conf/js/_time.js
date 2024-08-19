
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