import firebase from 'firebase/app'



const agregar = () => {
  const addProductModel = document.getElementById('addProductModel')
  const addProductProveedor = document.getElementById('addProductProveedor')
  const addProductCode = document.getElementById('addProductCode')
  const addProductMarca = document.getElementById('addProductMarca')
  const addProductPrice = document.getElementById('addProductPrice')
  const addProductPriceIgv = document.getElementById('addProductPriceIgv')
  const btnAddProduct = document.getElementById('btnAddProduct')
  const notificationAddProduct = document.getElementById('notification-add-product')

  var db = firebase.firestore();


  btnAddProduct.addEventListener('click', e=>{
    if (addProductModel.value == '' || addProductProveedor.value=='' || addProductCode.value=='' || addProductMarca.value=='' || addProductPrice.value=='') {
      e.preventDefault()
      console.log('no a ingresado contenido');
      notificationAddProduct.innerHTML = `
          <div class="alert alert-danger" role="alert">
            Llene todos los espacios para completar el registro del producto.
          </div>
         `
      setTimeout(function(){notificationAddProduct.innerHTML = ''},2000)
    }else{
      e.preventDefault()
        if(Number(addProductPrice.value)){
          addProductPriceIgv.value = (Number(addProductPrice.value/100)*18) + Number(addProductPrice.value)
          addProductPriceIgv.innerHTML = addProductPriceIgv.value
        }
        db.collection("product").add({
          model: addProductModel.value,
          proveedor: addProductProveedor.value,
          code: addProductCode.value,
          marca:addProductMarca.value,
          price:addProductPrice.value,
          priceigv:addProductPriceIgv.value
      }).then(function(docRef){
          console.log("documento escrito con ID: ", docRef.id);
          notificationAddProduct.innerHTML = `
          <div class="alert alert-success" role="alert">
            se agregado su producto de modelo <b>${addProductModel.value}</b> y marca <b>${addProductMarca.value}</b>
          </div>
          `
          setTimeout(function(){notificationAddProduct.innerHTML = ''},3000)
          addProductModel.value = ''
          addProductProveedor.value=''
          addProductCode.value =''
          addProductMarca.value =''
          addProductPrice.value = ''
          addProductPriceIgv.value = ''
      }).catch(function(error) {
          console.error("Error adding document: ", error);
      });
    }

  })
}

export default agregar
