// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyBtKgsLsqc-eokRiHfnlYJz9YxGDPfhUY8",
    authDomain: "test-firebase-a80f9.firebaseapp.com",
    projectId: "test-firebase-a80f9",
    storageBucket: "test-firebase-a80f9.appspot.com",
    messagingSenderId: "157654555699",
    appId: "1:157654555699:web:f017617409535613d81746"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Inicializa Base de datos
let db = firebase.firestore();

// Anade coleccion a la base de datos
const createUser = () => {
    let first = prompt("Inserta tu nombre");
    let last = prompt("Inserta tu apellido");
    db
        .collection("users")
        .add({
            first: first,
            last: last,
            born: 1815
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
};

document.querySelector("#create").addEventListener("click", () => {
    createUser()
});

// Lee datos
db
    .collection("users")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().first}`);
        });
    });
// Read ONE
function readOne(id) {
    db
        .collection("users")
        .doc(id)
        .get()
        .then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
}
readOne("OIbLr01Ku8hEyAAuWZqf");

// Registrar un usuario por email
const signUp = (email, password) => {

    firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(`se ha registrado ${user.email} ID:${user.uid}`)
            alert(`se ha registrado ${user.email} ID:${user.uid}`)
            // Directamente creamos el usuario y lo almacenamos en FireStore
            createUser({
                email: user.email,
                pass: user.password
                //! Revisar
                
            })
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(`Error: ${errorMessage}`);
        });
};

// Registra un usuario con el formulario
document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = event.target.elements.email.value;
    let pass = event.target.elements.pass.value;
    let pass2 = event.target.elements.pass2.value;
    pass === pass2 ? signUp(email, pass) : alert("error password");
})

//! LLamar con el boton
const signIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            let user = userCredential.user;
            console.log(`se ha logado ${user.email} ID:${user.uid}`)
            alert(`se ha logado ${user.email} ID:${user.uid}`)
            console.log(user);
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
        });
};
//! LLamar con el boton
const signOut = () => {
    let user = firebase.auth().currentUser;
    firebase.auth().signOut().then(() => {
        alert(`${user.email} Bye, bye!`);
    }).catch((error) => {
        // An error happened.
    });
    
};

