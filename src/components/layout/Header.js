import React from "react";

export default function Header() {
  return (
    <header className="header" style={headerStyle}>
      <h1> Code Challenge </h1>{" "}
    </header>
  );
}

const headerStyle = {
  padding: "10px",
  textAlign: "center"
};
