// remove o ultimo elemento da lista e remove da exibição tambem
// recarrega a pagina sempre que chamada
function RemoveProject() 
{
    if (obj.projetos.length != 0)
    {
        list.pop()
        obj.projetos.pop()
        
        let arr = document.getElementsByClassName("prj")
        arr[arr.length-1].remove()

        localStorage.setItem("pjs",JSON.stringify(obj))
        location.reload()
    }
    
}