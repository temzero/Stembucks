
// Hambuger Menu Button 
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

function navToggle() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
  document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)

// Footer content expand 
document.querySelectorAll('.accordion-header').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const content = item.nextElementSibling;
        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = 0;
        }
    });
});