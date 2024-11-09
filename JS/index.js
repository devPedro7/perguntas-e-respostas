//recuperando os input radio
let elementos = document.querySelectorAll('[type = radio]')

//validação para saber se está funcionando: alert(elementos.length)

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('change', (elemento)=>{
        //teste para saber se está validando a alteração alert('teste')
        
        //verificar se a opcao marcada é a correta - recuperando o value
        let opcaoMarcada = elemento.target.value
        
        //validação do elemento marcado
        if(opcaoMarcada == "correta"){
            let parentNode = elemento.target.parentNode
            parentNode.style.backgroundColor = '#81B36D'

            let els = parentNode.parentNode.querySelectorAll('[type=radio]')

            for(let n = 0; n < els.length; n++){
                els[n].disabled = true
            }
        }
        else if(opcaoMarcada == "incorreta"){
            let parentNode = elemento.target.parentNode
            parentNode.style.backgroundColor = '#D12426'

            let els = parentNode.parentNode.querySelectorAll('[type=radio]')

            for(let n = 0; n < els.length; n++){
                els[n].disabled = true
            }

            let correta = parentNode.parentNode.querySelector('[value="correta"]')
            correta.parentNode.style.backgroundColor = '#81B36D'

        }
    })
}