import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

    const firebaseConfig = {
        apiKey: "AIzaSyBqMYttVBJCU50p6OyJeDyQtgzz4fw297k",
        authDomain: "fir-2b295.firebaseapp.com",
        projectId: "fir-2b295",
        storageBucket: "fir-2b295.appspot.com",
        messagingSenderId: "848658056219",
        appId: "1:848658056219:web:4c61a341e4739d543e24be",
        measurementId: "G-FXLQTGNMQ8"
      };

      export default firebase.initializeApp(firebaseConfig)

