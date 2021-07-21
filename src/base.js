
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAgdeLHY_y3sP5X6fcxxwSJiLvWx5LBKqs",
    authDomain: "netsurf-34891.firebaseapp.com",
    projectId: "netsurf-34891",
    storageBucket: "netsurf-34891.appspot.com",
    messagingSenderId: "106214861259",
    appId: "1:106214861259:web:b5e8f816b8bc0161a12e4e"
})


export { firebaseApp }
