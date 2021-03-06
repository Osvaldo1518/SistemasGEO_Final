const listaloggedout = document.querySelectorAll('.logged-out');
const listaloggedin = document.querySelectorAll('.logged-in');
const datosdelacuenta = document.querySelector('.datosdelacuenta');

const configurarMenu = (user) =>{
    if(user){
        db.collection('usuarios').doc(user.uid).get().then(doc => {
            const html = `
            <p>Name: ${doc.data().nombre}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${doc.data().telefono}</p>
            <p>Direction: ${doc.data().direccion}</p>
            `;

            datosdelacuenta.innerHTML = html;
        });

        listaloggedin.forEach(item => item.style.display = 'block');
        listaloggedout.forEach(item => item.style.display = 'none');
    } else {
        listaloggedin.forEach(item => item.style.display = 'none');
        listaloggedout.forEach(item => item.style.display = 'block');
    }

};
