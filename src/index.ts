const saveName: HTMLInputElement  = document.querySelector('#save_name')!
const saveValue: HTMLInputElement = document.querySelector('#save_value')!
const saveBtn: HTMLButtonElement  = document.querySelector('#save_btn')!

const readName: HTMLInputElement = document.querySelector('#read_name')!
const data: HTMLElement          = document.querySelector('#data')!
const readBtn: HTMLButtonElement = document.querySelector('#read_btn')!
const keys: HTMLUListElement     = document.querySelector('#keys')!


function loadKeys() {
  for (let index = 0; index < localStorage.length; index++) {
    let key = localStorage.key(index)!
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerText = key    
    keys.appendChild(li)
  }
}

loadKeys()
saveBtn.onclick = () => {
   let abc = saveValue.value.trim()
   let abd = saveName.value.trim()

   if  (abc === '' || abd === '' ) {
    alert('bo`sh') 
    return ''
   }
   localStorage.setItem(abd, abc)
   alert('ma`lumot saqlandi')
   keys.innerText = ''
   loadKeys()
  //  alert(abc+ ' ' +abd)
}

readBtn.onclick = () => {
  let name = readName.value.trim()
  if (name === '') {
    alert('bo`sh')
    return
  }
  let value = localStorage.getItem(name)
  if (value === null) {
    data.innerText = '[ma`lumot]'
  }
  else{
    data.innerText = value
  }
}