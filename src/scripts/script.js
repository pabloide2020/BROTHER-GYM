const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const navBarLinks = document.getElementsByClassName('navigator')[0]

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})