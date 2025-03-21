/* CONST define a variavel como constante 
(não pode ser alterada, neste caso, não pode trocar de elemento do html).
    
    
    document getElementByID('elementoHtml') pega um elemento html pelo id para
    ser programado no JS.*/

    const form = document.getElementById("formTarefa")
    const input = document.getElementById("inputTarefa")
    const lista = document.getElementById("listaTarefa")
    
    /* addEventListener adiciona uma "escuta" a um 
    evento de elemento html.
    "submit" é o evento que ocorre quando o formulário é enviado.
    function(event) cria a função que será executada quando o evento ocorrer.
    event é a variavel que armazena as informações do evento que ocorreu. */
    
    form.addEventListener("submit", function(event){
        //evita que o formulário seja enviado e a página recarregada*/
        event.preventDefault();
    
        //armazena o valor do imput na variavel
    /* preventDefault -> Tira as configurações base
    trim() -> Tira espaço vazio, em branco do começo e do fim do texto*/
        const textTarefa = input.value.trim();
    
        if(textTarefa != '')
        {
            // cria um elemento html do tipo li
            const li = document.createElement('li');
            // adiciona o texto do input no elemento li
            li.textContent = textTarefa
    
            const botaoRemover = document.createElement ('button');
            botaoRemover.textContent = 'X'
            //Adiciona a classe remover ao botão criado
            botaoRemover.classList.add('remover')
    
            botaoRemover.addEventListener('click', function (){
                //remove o elemento li da lista se o botão for clicado
                lista.removeChild(li);
    
            });
            //adiciona o botão Remover ao elemento li
            /* Só é possivel remover elementos filhos através desse método. Como exemplo: 
            O ul não poderia remover o elemento contido no li como filho*/
    
            li.appendChild(botaoRemover);
            /*Adiciona um elemento, qualquer que seja, como filho.
             Nesse caso adiciona o elemento li a lista de tarefas*/
    
            lista.appendChild(li);
            //limpa o valor do input
    
            input.value = '';
        }    
    });