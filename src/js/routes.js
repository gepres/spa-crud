import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import './config'

import tplLogin from '../html/login.tpl.html'
import tplProduct from '../html/product.tpl.html'
import tplProductTable from '../html/product_table.tpl.html'
import tplHome from '../html/home.tpl.html'
import tplContact from '../html/contact.tpl.html'


import agregar from './add_product'
import deleteProduct from './delete_product'
import tableProduct from './table_product'


const routes = () => {
  const main = document.querySelector('.Main')
  document.addEventListener('DOMContentLoaded', e =>{
    document.innerHTML = tplLogin
    // main.innerHTML = tplHome
  })

  document.addEventListener('click',e=>{
    if(e.target.matches('a[href="#"]')){
      e.preventDefault()
    }
    if(e.target.matches('#home')){
      main.innerHTML = tplHome
    }else if(e.target.matches('#product')){
      main.innerHTML = tplProduct
      agregar()
    }else if(e.target.matches('#productTable')){
      main.innerHTML = tplProductTable
      // deleteProduct()
      tableProduct()
      deleteProduct('id','model')
    }else if(e.target.matches('#contact')){
      main.innerHTML = tplContact
    }
  })

}

export default routes
