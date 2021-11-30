//Importamos la funcion para inicializar la aplicacion de firebase
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// Añadimos las credenciales
export const firebaseApp = {
    apiKey: 'AIzaSyCzxPk_0XOYR9RnD61AAIc_-aBgE-jTpqU',
    authDomain: 'dagga-winkel-ecommerce.firebaseapp.com',
    projectId: 'dagga-winkel-ecommerce',
    storageBucket: 'dagga-winkel-ecommerce.appspot.com',
    messagingSenderId: '464799535723',
    appId: '1:464799535723:web:fea760da257c4f72cf172e',
    measurementId: 'G-R5KBRF8LQD',
}

export const app = initializeApp(firebaseApp)
export const auth = getAuth()
export const db = getFirestore(app)
console.log('xd')
