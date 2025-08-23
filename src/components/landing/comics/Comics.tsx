import React from "react";
import s from "./Comics.module.scss";

type Props = {};

export const Comics = (props: Props) => {
  return (
    <div className={s.comics}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1226.696725696522!2d6.957555069844396!3d50.94133322292215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25baabe19431%3A0x2a4a36df1841a8d8!2zQ29sb2duZSBDYXRoZWRyYWwsIERvbWtsb3N0ZXIgNC9Nb3NhaWMgSW4gVGhlIENyb3NzaW5nLCA1MDY2NyBLw7Zsbiwg0JPQtdGA0LzQsNC90LjRjw!5e1!3m2!1sru!2sru!4v1755951867778!5m2!1sru!2sru"
        width="100%"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
