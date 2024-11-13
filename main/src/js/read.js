
// le o conteudo recebido pelo input files
function readFiles()
{   
    let input = document.getElementById("file_receiver").files
    let reader = new FileReader();

    reader.readAsText(input[0])

    reader.onerror = (e)=>{
        console.error(e)
    }
    reader.onload = ()=>{
        loadFileName(input[0].name)
        loadReceivedFiles(reader.result)
    }
}