
import Firebase from 'firebase'
const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDp6plvZEMyLE47Ggiuqwo_56aHlVu3gDs",
  authDomain: "vuejs-ef50c.firebaseapp.com",
  databaseURL: "https://vuejs-ef50c.firebaseio.com",
  projectId: "vuejs-ef50c",
  storageBucket: "vuejs-ef50c.appspot.com",
  messagingSenderId: "247924455137"
});
export const db = firebaseApp.database();
export const storage = firebaseApp.storage();