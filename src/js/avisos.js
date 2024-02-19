const botao = document.querySelector("input[type='submit']")

const inputs = document.querySelectorAll(".input")

const textarea = document.querySelector('textarea')

const avisos = document.querySelectorAll(".aviso")

function verificarConteudo(){
    inputs.forEach((item,i) =>{
        item.addEventListener('change', () =>{
            if(item.value !== ""){
                item.classList.add("verificado")
                avisos[i].classList.remove('visivel')
            }
            else{
                item.classList.remove("verificado")
                
            }
        })
    })
    
    textarea.addEventListener('change', () =>{
        if(textarea.value !== ""){
            textarea.classList.add("verificado")
            avisos[3].classList.remove('visivel')
        }
        else{
            textarea.classList.remove("verificado")
            
        }
    })
}

verificarConteudo()




botao.addEventListener('click', () => {
    inputs.forEach((item, i) =>{
        
            let validacaoInput = item.value
            let validacaoArea = textarea.value

            if(validacaoInput == ""){
                item.classList.add('alter')
                avisos[i].classList.add('visivel')
            }
            else{
                item.classList.remove('alter')
                avisos[i].classList.remove('visivel')
            }
            if(validacaoArea == ""){
                textarea.classList.add('alter')
                avisos[3].classList.add('visivel')
            }
            else{
                textarea.classList.remove('alter')
                avisos[3].classList.remove('visivel')
            }

            verificarConteudo()  
        
        
    })

    
})