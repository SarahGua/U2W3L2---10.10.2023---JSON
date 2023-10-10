const textName = document.getElementById('input-name')
const buttonSave = document.getElementById('save-button')
const buttonRemove = document.getElementById('remove-button')
const localKey = 'name'



const save = () => {
    const name = textName.value 
    localStorage.setItem(localKey, name)
    alert('Nome salvato!')
    const savedName = localStorage.getItem(localKey)
    const paragraphName = document.getElementById('existing-name')
    paragraphName.innerHTML = savedName

}

const remove = () => {
   if (window.confirm('Rimuovere il nome?'))
   textName.value = ''
   localStorage.removeItem(localKey)
   const savedName = localStorage.getItem(localKey)
   const paragraphName = document.getElementById('existing-name')
   paragraphName.innerHTML = ''

}

buttonSave.addEventListener('click', save)
buttonRemove.addEventListener('click', remove)