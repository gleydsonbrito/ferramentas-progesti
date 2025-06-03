const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      fetch('./u.json')
        .then(res => res.json())
        .then(res => {
          res.usuarios.forEach(usuario => {
            if (usuario.login === email) {
              const sHASH = CryptoJS.MD5(password).toString()
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