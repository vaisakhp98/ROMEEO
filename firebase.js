import * as firebase from 'firebase/app'
import "firebase/auth"

const firebaseConfig = {
    apiKey: process.env.NEXT_APP_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_APP_FIREBASE_APP_ID 
}

const app = firebase.initializeApp(firebaseConfig) // initialize firebase

// export const auth = app.auth()
// export default app