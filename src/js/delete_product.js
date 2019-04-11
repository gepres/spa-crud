import firebase from 'firebase/app'
import 'firebase/firestore'
import './config'
var db = firebase.firestore();

  // eliminar productos

const deleteProduct = (id,model) => {
    const btnDelete = document.getElementById('btn-delete')
    const modalDelete = document.getElementById('modal-delete')

    modalDelete.innerHTML = `
    <p>¿usted desea eliminar a <b>${model}</b> y ${id}?</p>
    `
    btnDelete.addEventListener('click', ()=> {
      db.collection("product").doc(id).delete().then(function() {
        console.log(`tu id eliminado es ${id} y ${model} `);
        modalDelete.innerHTML = `
          <div class="alert alert-danger" role="alert">
          se elimiando a <b>${model}</b>
          </div>
        `
      }).catch(function(error) {
          console.error("Error removing document: ", error);
      });
    })
  }

export default deleteProduct
