import React, { memo } from "react";
import { motion } from "framer-motion";
import { animationsVariants } from "@/lib/constants";
import s from "./Solution.module.scss";

type SolutionCardProps = {
  title: string;
  description: React.ReactNode;
};

export const SolutionCard = memo(
  ({ title, description }: SolutionCardProps) => (
    <motion.div className={s.solution_card}>
      <div className={s.solution_card__info}>
        <motion.h4
          initial="hidden"
          whileInView="visible"
          variants={animationsVariants("column", "bottom")}
          transition={{
            duration: 0.8,
            delay: 0.25,
            type: "spring",
          }}
          className={s.solution_card__title}
        >
          {title}
        </motion.h4>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animationsVariants("column", "bottom")}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
          }}
          className={s.solution_card__description}
        >
          {description}
        </motion.div>
      </div>
    </motion.div>
  )
);
