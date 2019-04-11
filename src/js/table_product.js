import firebase from 'firebase/app'

var db = firebase.firestore();
const tableProduct = () => {
  // mostrar en la tabla
  $(document).ready(function(){
    db.collection("product").onSnapshot((query) => {
        const arr = []
        query.forEach((doc) => {
          const data = doc.data()
          // var name = data.name
          // console.log(data);
            arr.push({id:doc.id,modelo:data.model,marca:data.marca,proveedor:data.proveedor,codigo:data.code,precio:data.price,opcion:`<button onclick="deleteProduct('${doc.id}','${data.model}')" data-toggle="modal" data-target=".modal-delete"><i class="fas fa-trash-alt"></i></button>`})
        });
        // console.log(arr);
        $('#example').dataTable({
          destroy: true,
          data: arr,
          columns: [
            { data: 'id' },
            { data: 'modelo' },
            {data:'marca'},
            {data:'proveedor'},
            {data:'codigo'},
            {data:'precio'},
            {data:'opcion'}
          ]
        });
    });
  });
}
export default tableProduct
