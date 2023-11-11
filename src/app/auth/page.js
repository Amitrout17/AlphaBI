import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const signup = (e) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

function page() {
  return <div>page</div>;
}

export default page;
