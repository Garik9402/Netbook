const burgerNode = document.querySelector('.header__burger')
const overlayPopup = document.querySelector('.popup-menu')
const popupBody = document.querySelector('.popup-menu__body')
const swipeClose = document.querySelector('.popup-menu__swipe-close')
const popupMenuItem = document.querySelectorAll('.popup-menu-list-item')

burgerNode.addEventListener('click', openPopupFanc)
function openPopupFanc() {
   overlayPopup.classList.add('active')
   popupBody.classList.add('active')
   document.body.style.overflow = 'hidden'
}
function closeModal() {
   overlayPopup.classList.remove('active')
   popupBody.classList.remove('active')
   document.body.style.overflow = 'visible'
}
overlayPopup.addEventListener('click', (e) => {
   if (e.target === overlayPopup) {
      closeModal()
   }
})
popupMenuItem.forEach(el => {
   el.addEventListener('click', () => {
      closeModal()
   })
})
swipeClose.addEventListener('swiped-down', function (e) {
   closeModal()

});
swipeClose.addEventListener('click', function (e) {
   closeModal()

});
