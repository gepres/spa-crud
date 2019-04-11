import firebase from 'firebase/app'

  var config = {
    apiKey: "AIzaSyDnX5_F1or5io1kf_0Q9mOOtT7DwPGBF-M",
    authDomain: "spa-crud-gepres.firebaseapp.com",
    databaseURL: "https://spa-crud-gepres.firebaseio.com",
    projectId: "spa-crud-gepres",
    storageBucket: "spa-crud-gepres.appspot.com",
    messagingSenderId: "772689322939"
  };

const init = () => firebase.initializeApp(config)

init()
