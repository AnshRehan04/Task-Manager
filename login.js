import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithPopup, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvu8m9a4zmGFCPATYRUQVmHhbir76GtbU",
  authDomain: "task-echo.firebaseapp.com",
  projectId: "task-echo",
  storageBucket: "task-echo.appspot.com",
  messagingSenderId: "337813516628",
  appId: "1:337813516628:web:9cc384076071760be158c1",
  measurementId: "G-Q602G2P0R7"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);
auth.languageCode = 'en';
const user = auth.currentUser;

const btn = document.getElementById("login-btn");
btn.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      localStorage.setItem('username', user.displayName);
      localStorage.setItem('email', user.email);
      localStorage.setItem('profilePic', user.photoURL); 
      window.location.href = "/Main.html";
    })
    .catch((error) => {
      console.error(error);
    });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    updateprofile(user);
  }
});
function updateProfile(user) {
  document.getElementById("j_usn").textContent = user.displayName;
  document.getElementById("j_email").textContent = user.email;
  document.getElementById("profile-pic").src = user.photoURL;  // Update profile picture
}
