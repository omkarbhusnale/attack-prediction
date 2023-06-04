import { initializeApp } from "firebase/app";
import "firebase/database";
import { getAuth } from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCpNlL-6L-ltmsiipyn72EjF6_EGFV6GzE",
  authDomain: "attack-prediction.firebaseapp.com",
  databaseURL:
    "https://attack-prediction-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "attack-prediction",
  storageBucket: "attack-prediction.appspot.com",
  messagingSenderId: "278387665901",
  appId: "1:278387665901:web:40d218aed6bf61be4f15e4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// firebase.initializeApp(firebaseConfig);
// const databaseRef = firebase.database().ref();
// export const afpRef = databaseRef.child("afp");
// export default firebase;
