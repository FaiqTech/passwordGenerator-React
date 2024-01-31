import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const length = 10;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    const getRandomChar = () =>
      charset[Math.floor(Math.random() * charset.length)];

    const generatedPassword = Array.from({ length }, getRandomChar).join("");
    setPassword(generatedPassword);
  };

  return (
    <div>
      <button
        style={{
          padding: "10px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={generatePassword}
      >
        Parola Oluştur
      </button>
      <p>Yeni Parola: {password}</p>
    </div>
  );
};

export default PasswordGenerator;
