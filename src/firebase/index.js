// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, doc, getDoc } from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8oZ54WmsMDtLZrfycWh-ZXrULGOmLEp4",
  authDomain: "ch-react-62e70.firebaseapp.com",
  projectId: "ch-react-62e70",
  storageBucket: "ch-react-62e70.appspot.com",
  messagingSenderId: "1078931300704",
  appId: "1:1078931300704:web:99b1064a1f7ae355777e05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getProductsModular() {
  const productSnapshot = await getDocs(collection(db, 'products'));
  let products = [];
  // productSnapshot.forEach(doc => console.log("firebase", doc.data()))
  productSnapshot.forEach(doc => products.push({ id: doc.id, ...doc.data() }));
  return products;
}

async function getProductModular(idProduct) {
  const docRef = doc(db, 'products', idProduct);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log('No such document!!')
  }
}

function getProductsNamespaced() {
  const query = db.collection('products');
  let products = [];

  query.get().then(querySnapshot => {
    querySnapshot.forEach(doc => products.push({ id: doc.id, ...doc.data() }))
  });
  return products;
}

function getProductNamespaced(idProduct) {
  const docRef = db.collection('products').doc(idProduct);

  docRef.get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    })
}

export {
  getProductsModular,
  getProductModular,
  getProductsNamespaced,
  getProductNamespaced,
  db
}

