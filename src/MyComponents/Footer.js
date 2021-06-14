import React from "react";

export const Footer = () => {
  return (
    <footer
      className="bg-dark text-light py-4"
      style={{
        position: "sticky",
        overflow: "hidden",
        height: "70px",
        marginTop: "5px",
      }}
    >
      <p className="text-center" style={{ lineHeight: "35px" }}>
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  );
};
