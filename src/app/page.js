"use client";
import React, { useState } from "react";

function page() {
  const [key, setkey] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setkey(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(key);
        }}
      >
        click me
      </button>
    </div>
  );
}

export default page;
