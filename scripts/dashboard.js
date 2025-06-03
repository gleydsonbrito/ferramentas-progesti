const ano = document.querySelector('#ano');
ano.innerHTML = new Date().getFullYear().toString()

const nomeUser = document.querySelectorAll('.user-name')
const { nome, sobrenome, email } = JSON.parse(localStorage.getItem('perfil'))

nomeUser.forEach(n => n.innerHTML = `${capitalizar(nome)} ${capitalizar(sobrenome)}`)


const iniciais = `${nome.charAt(0).toUpperCase()}${sobrenome.charAt(sobrenome).toUpperCase()}`
const avatar = document.querySelector('.avatar')
avatar.innerHTML = iniciais

const emailUser = document.querySelector('.user-email')
emailUser.innerHTML = email

const welcomeUser = document.querySelector('.welcome-user')
welcomeUser.innerHTML = `${capitalizar(nome)}`

const userProfile = document.getElementById('userProfile');
const userDropdown = document.getElementById('userDropdown');

userProfile.addEventListener('click', function (e) {
    e.stopPropagation();
    userDropdown.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', function (e) {
    if (userDropdown.classList.contains('show') && !userProfile.contains(e.target)) {
        userDropdown.classList.remove('show');
    }
});

// Close dropdown with ESC key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && userDropdown.classList.contains('show')) {
        userDropdown.classList.remove('show');
    }
});

// Menu item active state
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', function () {
        menuItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});


function capitalizar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}