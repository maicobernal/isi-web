///Fetch para el submit para enviar datos a WebApp de Google
window.addEventListener("load", function() {
    const form = document.getElementById('formulariorecetas');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        mode: 'cors',
        body: data,
      })
      .then(() => {
        alert('Receta enviada exitosamente, por favor chequee su email para corroborar sus datos.\nRecuerde que la receta será enviada en un plazo de 72hs hábiles.')
        // Swal.fire('Datos cargados exitosamente');
      })
      .catch(() => {
        alert('Error al enviar los datos')
      }
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Error: sus datos no fueron cargados',
    //     footer: '<a href="www.google.com.ar">¿Qué está pasando?</a>'
    //   })
      )
    });
  });


  ///Fetch para el submit para enviar datos a WebApp de Google
window.addEventListener("load", function() {
  const form = document.getElementById('formulariocontacto');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      mode: 'cors',
      body: data,
    })
    .then(() => {
      alert('Su consulta fue enviada correctamente y será respondida a la brevedad.')
      // Swal.fire('Datos cargados exitosamente');
    })
    .catch(() => {
      alert('Error al enviar los datos')
    }
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: 'Error: sus datos no fueron cargados',
  //     footer: '<a href="www.google.com.ar">¿Qué está pasando?</a>'
  //   })
    )
  });
});