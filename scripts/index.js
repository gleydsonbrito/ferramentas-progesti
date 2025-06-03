const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputEmail = document.getElementById('email').value;
  const inputPassword = document.getElementById('password').value;

  fetch('./u.json')
    .then(res => res.json())
    .then(res => {
      const findedUser = res.usuarios.find(u => u.login === inputEmail)
      if (!findedUser) {
        alert(`O usuário ${inputEmail} não está cadastrado no sistema.`)
        return
      }

      res.usuarios.forEach(usuario => {
        if (usuario.login === inputEmail) {
          const sHASH = CryptoJS.MD5(inputPassword).toString()
          if (usuario.senha === sHASH) {
            const nomeSobrenome = usuario.login.split('@')[0]
            const [nome, sobrenome] = nomeSobrenome.split('.')
            const perfil = {
              nome,
              sobrenome,
              "email": usuario.login
            }
            localStorage.setItem('perfil', JSON.stringify(perfil))
            window.location.href = './pages/dashboard.html';
          }
        }
      });
    })
});