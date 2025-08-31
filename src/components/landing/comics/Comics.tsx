import React from "react";
import s from "./Comics.module.scss";

export const Comics = () => {
  return (
    <div className={s.comics}>
      <iframe
        allowFullScreen
        allow="clipboard-write"
        scrolling="no"
        className="fp-iframe"
        src="https://heyzine.com/flip-book/d4d82d784b.html"
        style={{
          border: "1px solid lightgray",
          width: "100%",
          height: "600px",
          borderRadius: "20px",
        }}
      ></iframe>
    </div>
  );
};
