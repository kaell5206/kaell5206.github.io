function criarLista() {
  const firstLIst = document.querySelector('#lista-skills1')
  const secondLIst = document.querySelector('#lista-skills2')
  let skills = ['Git & GitHub', 'HTML', 'CSS', 'JavaScript', 'DOM']
  let skills2 = ['ReactJS', 'Python', 'NodeJS', 'Data structure', 'CSS avançado']
  for (let i = 0; i < skills.length; i += 1) {
    const elementLi = document.createElement('li');
    elementLi.innerHTML = elementLi.innerText = skills[i];
    elementLi.classList.add('item')
    firstLIst.appendChild(elementLi)
  }
  for (let j = 0; j < skills2.length; j += 1) {
    const elementLi = document.createElement('li');
    elementLi.innerHTML = elementLi.innerText = skills2[j];
    elementLi.classList.add('item')
    secondLIst.appendChild(elementLi)
  }
}
criarLista()
