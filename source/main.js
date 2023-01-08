let clickCount = 0

document.querySelector('#clicks').addEventListener('click', () => {
  alert(`Click ${++clickCount}!`)
})
