import React, { memo } from "react";
import { motion } from "framer-motion";
import { animationsVariants } from "@/lib/constants";
import Image from "next/image";
import s from "./MediaLiteracy.module.scss";

type MediaLiteracyProps = {
  title: string;
  icon: string;
  description: React.ReactNode;
  bannerGradient: string;
  textColor: string;
  counter: number;
};

export const MediaLiteracy = memo(
  ({
    title,
    icon,
    description,
    bannerGradient,
    textColor,
    counter,
  }: MediaLiteracyProps) => (
    <motion.div
      className={s.card}
      initial="hidden"
      whileInView="visible"
      variants={animationsVariants("row", "bottom")}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.8,
        delay: 0.25 * counter,
        type: "spring",
      }}
      style={
        {
          "--gradient-color": bannerGradient,
          "--text-color": textColor,
        } as React.CSSProperties
      }
    >
      <div className={s.card_banner}>
        <div className={s.card_icon}>
          <Image src={icon} width={130} height={130} alt="" />
        </div>
        <h4 className={s.card_title}>{title}</h4>
      </div>
      <div className={s.card_info}>
        <ul className={s.card_list}>{description}</ul>
      </div>
    </motion.div>
  )
);
