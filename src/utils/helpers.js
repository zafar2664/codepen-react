// import {signInWithRedirect} from "firebase/auth"
// import { auth } from "../config/firebase.config"
// import { GoogleAuthProvider } from "firebase/auth/web-extension"

// const googleProvider = new GoogleAuthProvider()

// export const signInWithGoogle = async () => {
//     await signInWithRedirect(auth, googleProvider).then(userCred => {
//         window.location.reload()
//     })

// }




import { signInWithRedirect,signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { v4 as uuidv4 } from 'uuid';
import { name } from "file-loader";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
      
        // The redirect will handle the sign-in process,
        // so the code after signInWithRedirect won't execute immediately.

        // After successful sign-in, the page will redirect,
        // so reloading the page might not be necessary in most cases.
        // window.location.reload();

    } catch (error) {
        // Handle errors here if needed
        console.error("Error signing in with Google:", error);
    }
};
getRedirectResult(auth)
.then((result) => {
  if (result) {
    // This gives you a GitHub Access Token.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
  }
}).catch((error) => {
  // Handle Errors here.
  console.error("Error getting redirect result:", error);
});
// You can define other methods related to Firebase Authentication here.
// For example, signOut, getUserProfile, etc.


/*export const signInWithGitHub = async () => {
    try {
        await signInWithRedirect(auth, githubProvider);
        // The redirect will handle the sign-in process,
        // so the code after signInWithRedirect won't execute immediately.

        // After successful sign-in, the page will redirect,
        // so reloading the page might not be necessary in most cases.
        // window.location.reload();

    } catch (error) {
        // Handle errors here if needed
        console.error("Error signing in with Google:", error);
    }
};

// You can define other methods related to Firebase Authentication here.
// For example, signOut, getUserProfile, etc. */
//const googleProvider = new GoogleAuthProvider()

/*export const signInWithGitHub = async () => {
     await signInWithRedirect(auth, githubProvider).then(userCred => {
         window.location.reload()
     })

 }*/
export const signInWithGitHub = async () => {
    try {
        await signInWithPopup(auth, githubProvider);
        // const credential = GithubAuthProvider.credentialFromResult(result);
        // if (credential) {
        //     // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        //     const token = credential.accessToken;
        //     // ...
        // }

        // // The signed-in user info.
        // const user = result.user;
        // console.log(user);
        // The redirect will handle the sign-in process for GitHub,
        // similar to signInWithGoogle.

        // Optionally, you can reload the page after sign-in.
        // window.location.reload();

    } catch (error) {
        // Handle errors here if needed
        console.error("Error signing in with GitHub:", error);
    }
};

{/* menu ke liye */}

export const Menus = [
    { id: uuidv4(), name: "Projects", uri: "/home/projects"},
    { id: uuidv4(), name: "Collections", uri: "/home/collection"},
    { id: uuidv4(), name: "Profile", uri: "/home/profile"},
];

export const signOutAction = async () => {
    await auth .signOut().then(() => {
        window.location.reload();
    });
};