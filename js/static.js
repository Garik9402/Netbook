const tubListItem = document.querySelectorAll('.teem__tub-item')
const teemList = document.querySelectorAll('.teem__list')
tubListItem.forEach(el => {
   el.addEventListener('click', function () {
      let index = this.dataset.id
      tubListItem.forEach(el => {
         el.classList.remove('teem__tub-item--active-tub')
      })
      this.classList.add('teem__tub-item--active-tub')
      teemList.forEach(list => {
         list.classList.remove('teem__list--active')
      })
      teemList[index].classList.add('teem__list--active')

   })
})

const inputText = document.querySelectorAll('[type ="text"]')
inputText.forEach(el => {
   el.addEventListener('input', () => {
      localStorage.setItem(el.name, el.value)
   })
})
function checkStorage() {
   inputText.forEach(el => {
      if (el.type === 'text') {
         el.value = localStorage.getItem(el.name, el.value)
      }
   })
}
checkStorage()