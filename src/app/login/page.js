"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import "./login.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyBpCyz7w9ctoSbat9XfHOfwDJyxofobcOk",
      authDomain: "alphabi-74ebf.firebaseapp.com",
      projectId: "alphabi-74ebf",
      storageBucket: "alphabi-74ebf.appspot.com",
      messagingSenderId: "452483475347",
      appId: "1:452483475347:web:2a16b05257cb003dafaa66",
      measurementId: "G-KZS8090WXH",
    };
    initializeApp(firebaseConfig);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please Enter Your Email");
      return;
    }
    if (!password) {
      alert("Please Enter Password");
      return;
    }

    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      alert("Login Successfully");
      router.push("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-login-credentials") {
        alert("Invalid email or password. Please try again.");
      } else {
        alert("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="main-login">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="login-heading">Please Login</h1>
          <input
            class="login-input"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            className="login-input"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            placeholder="Enter Password"
          />
          <button className="login-button">Login</button>
          <div class="login-register-link">
            Not Registered Yet?
            <Link class="login-text-blue" href={"/signup"}>
              Please Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
