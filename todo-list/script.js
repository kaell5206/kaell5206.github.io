	const input = document.querySelector('#texto-tarefa');
	const button = document.querySelector('#criar-tarefa');
	const listOL = document.querySelector('#lista-tarefas');
	const apagarTudo = document.querySelector('#apaga-tudo');
	const classCompleted = document.querySelectorAll('.completed');
	const removerFinalizadosButton = document.querySelector('#remover-finalizados')
	const removerSelecionadoButton = document.querySelector('#remover-selecionado')
	const salvarList =  document.querySelector('#salvar-tarefas')
	const moverCimaButton = document.querySelector('#mover-cima');
	const moverBaixoButton  = document.querySelector('#mover-baixo');
	const storage = localStorage;
	const color = 'rgb(128, 128, 128)';
	
	
	function criarTarefa() {
		const inputText = input.value;
		const createListItem = document.createElement('li');
		if(inputText !== '') {
			createListItem.innerHTML = createListItem.innerText = inputText;
			createListItem.classList.add('listItem')
			listOL.appendChild(createListItem);
			input.value = '';
		}
	}
	
	button.addEventListener('click', criarTarefa)
	
	// usei de referencia o exemplo do post do alexandre lemos no slack, pois tinha a mesma duvida que ele
function selectListItem(event) {
	if (document.querySelectorAll('.selected').length == 0){
		event.target.classList.add('selected')
	} else if (document.querySelectorAll('.selected').length > 0) {
		const selector =  document.querySelector('.selected');
		selector.classList.remove('selected')
		event.target.classList.add('selected')
		
	}
}
listOL.addEventListener('click', selectListItem);

function completedTask() {
	listOL.addEventListener('dblclick', (event) => {
		const seletor = event.target;
	seletor.classList.toggle('completed')
})
}
completedTask()

apagarTudo.addEventListener('click', () => { listOL.innerHTML = ''})

function removerFinalizados() {
	const lista = document.querySelectorAll('li');
	for (let i = 0; i < lista.length; i+=1){
		if (lista[i].classList.contains('completed')) {
			listOL.removeChild(lista[i]);	
		}	
	} 
} 
removerFinalizadosButton.addEventListener('click', removerFinalizados)


function saveInLocalStorage(){
	let OLInner = document.querySelector('ol');
	if (listOL.innerHTML === '') {
		storage.setItem('phrases', JSON.stringify([]));
	} else {
				storage.setItem('phrases', JSON.stringify(OLInner.innerHTML));
		}
}
salvarList.addEventListener('click', saveInLocalStorage)

function carregarLocalSave() {
	const getStor = JSON.parse(storage.getItem('phrases'));
	listOL.innerHTML = getStor;
	// let listaArray = document.querySelectorAll('li');
	// const getLocalItem = JSON.parse(storage.getItem('phrases'));
	// const getLocalClasses = JSON.parse(storage.getItem('classes'));
	// for (let i = 0; i < getLocalItem.length; i += 1) {
	// 	const createElementLoad = document.createElement('li');
	// 	createElementLoad.innerHTML = createElementLoad.innerText = getLocalItem[i];
	// 	// createElementLoad.innerHTML = createElementLoad.classList = getLocalClasses[i];
	// 	listOL.appendChild(createElementLoad)
	// 	listaArray[i].innerHTML = listaArray[i].classList.add(getLocalClasses[i])
}
function moverCima() {
	let listaItem = document.querySelectorAll('li');
	for (let i = 1; i <= listaItem.length - 1; i += 1) {
    if(listaItem[i].classList.contains('selected')) {

        listOL.insertBefore(listaItem[i], listaItem[i - 1])
    } 
}
}
moverCimaButton.addEventListener('click', moverCima)

function moverBaixo() {
	let listaItem = document.querySelectorAll('li');
	for (let i = 0; i < listaItem.length - 1; i+=1) {
    if( listaItem[i].classList.contains('selected')) {
			listOL.insertBefore(listaItem[i + 1], listaItem[i]);
         }
}
}
moverBaixoButton.addEventListener('click', moverBaixo)

function removerSelecionado() {
	const lista = document.querySelectorAll('li');
	for (let i = 0; i < lista.length; i+=1){
		if (lista[i].classList.contains('selected')) {
			listOL.removeChild(lista[i]);	
		}	
	} 
} 
removerSelecionadoButton.addEventListener('click', removerSelecionado)

if(storage.getItem('phrases')) {
	carregarLocalSave()
}