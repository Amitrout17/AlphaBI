"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import "./register.css";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    if (!email || !password) {
      alert("Please fill in all the fields");
      return;
    }

    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("Registration successful");
      router.push("/login");
      console.log("Registration successful:", user);
    } catch (error) {
      console.error("Registration error:", error.code, error.message);
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Email is already in use. Please use a different email.");
          break;
        case "auth/invalid-email":
          alert("Invalid email format. Please enter a valid email address.");
          break;
        case "auth/weak-password":
          alert("Weak password. Please use a stronger password.");
          break;
        default:
          alert("Registration failed. Please try again.");
      }
    }
  };

  return (
    <main class="signup-main">
      <form class="signup-form" onSubmit={handleSubmit}>
        <h1 class="signup-heading">Please Register</h1>
        <input
          class="signup-input"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="Enter Your Email"
        />
        <input
          class="signup-input"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          type="password"
          placeholder="Enter Password"
        />
        <button class="signup-button" type="submit">
          Register
        </button>
        <div class="signup-login-link">
          Already Registered,
          <Link href={"/login"} class="signup-text-blue">
            Please Login
          </Link>
        </div>
      </form>
    </main>
  );
}
