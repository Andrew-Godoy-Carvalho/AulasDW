
const form = document.getElementById('formTarefa');
const input = document.getElementById('inputTarefa');
const lista = document.getElementById('listaTarefas');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const textoTarefa = input.value.trim(); // Correção aqui

    if (textoTarefa !== '') {
        const li = document.createElement('li');
        li.textContent = textoTarefa;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'X';
        botaoRemover.classList.add('remover');

        botaoRemover.addEventListener('click', function() {
            lista.removeChild(li);
        });

        li.appendChild(botaoRemover);
        lista.appendChild(li);
        input.value = '';
    }
});

/*Explicação do código:

Seleção de elementos:

document.getElementById('formTarefa'): Seleciona o formulário pelo seu ID.
document.getElementById('inputTarefa'): Seleciona o campo de entrada de texto pelo seu ID.
document.getElementById('listaTarefas'): Seleciona a lista não ordenada (ul) pelo seu ID.

Evento submit do formulário:

form.addEventListener('submit', function(event) { ... }): Adiciona um ouvinte de evento para o evento submit do formulário.
event.preventDefault(): Impede o envio padrão do formulário, que recarregaria a página.
Obtenção do texto da tarefa:

const textoTarefa = input.value.trim(): Obtém o valor do campo de entrada de texto, remove espaços em branco extras do início e do fim e armazena-o na variável textoTarefa.
Criação do item da lista (li):

if (textoTarefa !== '') { ... }: Verifica se o texto da tarefa não está vazio.
const li = document.createElement('li'): Cria um novo elemento li.
li.textContent = textoTarefa: Define o texto do elemento li como o texto da tarefa.
Criação do botão de remoção:

const botaoRemover = document.createElement('button'): Cria um novo elemento button.
botaoRemover.textContent = 'X': Define o texto do botão como "X".
botaoRemover.classList.add('remover'): Adiciona a classe "remover" ao botão.
Evento click do botão de remoção:

botaoRemover.addEventListener('click', function() { ... }):Adiciona um ouvinte de evento para o evento click do botão de remoção.

lista.removeChild(li): Remove o elemento li da lista.

->Adição do botão e do item à lista: 

li.appendChild(botaoRemover): Adiciona o botão de remoção ao elemento li.
lista.appendChild(li): Adiciona o elemento li à lista.
input.value = '': Limpa o campo de entrada de texto. */


    