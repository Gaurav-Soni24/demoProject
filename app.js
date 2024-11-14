import { getDatabase } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-database.js";

const db = getDatabase();


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsT7lWd8Oo9yOvq_sv6rv2zeUetFoLRYA",
    authDomain: "demoproject-a3809.firebaseapp.com",
    projectId: "demoproject-a3809",
    storageBucket: "demoproject-a3809.firebasestorage.app",
    messagingSenderId: "877079777591",
    appId: "1:877079777591:web:49f08475497ce5ea27cab2",
    measurementId: "G-SFKBTG6Q2R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get auth instance
const auth = firebase.auth();

// Sign Up
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Successfully signed up!');
            console.log('User:', user);
        })
        .catch((error) => {
            alert(error.message);
            console.error('Error:', error);
        });
});

// Sign In
document.getElementById('signinForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Successfully signed in!');
            console.log('User:', user);
        })
        .catch((error) => {
            alert(error.message);
            console.error('Error:', error);
        });
});

document.getElementById('logoutButton').addEventListener('click', () => {
    auth.signOut().then(() => {
        console.log('Signed out successfully');
    }).catch((error) => {
        console.error('Error signing out:', error);
    });
});

// Auth state observer
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('User is signed in:', user);
    } else {
        console.log('User is signed out');
    }
});

// Write user data to Firebase Realtime Database
function writeUserData(name, email,age) {
    db.ref().set({
      name: name,
      email: email,
      age: age
    });
}

writeUserData('John Doe', 'john.doe@example.com', 30);