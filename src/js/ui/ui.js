import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toggleModal } from '../modal';
import { async } from '@firebase/util';

const loginStateEl = document.querySelector('.loginState');
const loginSignupEl = document.querySelector('.button-authorization');
const modalErrorMessageAreaEl = document.getElementById(
  'modal-error-message-area'
);

// const loginLogoutButtonEl = document.querySelector('.button-authorization');
// loginLogoutButtonEl.addEventListener('click', onLoginLogoutButtonClick);

// function onLoginLogoutButtonClick(e) {
//   e.preventDefault();
//   if (loginLogoutButtonEl.textContent === 'Logout') {
//     onLogout();
//   }
// }

// const logoutButtonEl = document.getElementById('logout');

export async function userLogIn(e) {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  // console.log(email, password);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    ).then(res => {
      if (res.user) {
        toggleModal();
      }
    });
    // console.log(userCredential.user);
  } catch (error) {
    modalErrorMessageAreaEl.textContent =
      'Wrong email or password. Please, try again.';
    console.log(error.message);
  }
}

function showLoginState(user) {
  // Additional info. Just paste in to innerHTML
  // <p><b>You are logged in as:</b> ${user.displayName}</p>
  // <p><b>userID:</b> ${user.uid}</p>
  loginStateEl.innerHTML = `<p>${user.email}</p>`;
}

export async function monitorAuthState() {
  onAuthStateChanged(auth, user => {
    if (user) {
      loginSignupEl.textContent = 'Logout';
      showLoginState(user);
    } else {
      loginSignupEl.textContent = 'Log In';
      loginStateEl.innerHTML = '';
    }
  });
}