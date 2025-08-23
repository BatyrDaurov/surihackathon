"use client";
import React from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/shared";
import { SuriContainer } from "@/components/global";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { animationsVariants, mediaLiteracy, solutions } from "@/lib/constants";
import "swiper/css";
import "swiper/css/navigation";
import s from "./HomePage.module.scss";
import { Comics, MediaLiteracy, SolutionCard } from "@/components/landing";

export default function Home({}) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile((prev) => !prev);
    }
  }, []);

  return (
    <>
      <section id="hero" className={s.hero}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 1.5,
            delay: 0,
            type: "spring",
          }}
        >
          <Image
            src={"/treehero.png"}
            className={s.hero__tree}
            width={1125}
            height={750}
            alt=""
          />
        </motion.div>

        <div className={s.hero__container}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animationsVariants("row", "left")}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.8,
              delay: isMobile ? 0.4 : 0.8,
              type: "spring",
            }}
            className={s.hero__images}
          >
            <div className={s.hero__suri}>
              <Image src={"/surihero.png"} width={526} height={744} alt="" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={
              isMobile
                ? animationsVariants("row", "left")
                : animationsVariants("row", "right")
            }
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              type: "spring",
            }}
            className={s.hero__text}
          >
            Hi! I&apos;m Suri. With the rapid development of information
            technology and its impact on society, I&apos;ve decided to start my
            own blog on media literacy. While some see technological progress as
            an investment in the future and a way to simplify everyday tasks,
            others use it for personal gain, disregarding moral principles. Join
            me in exploring media literacy—it&apos;s not only useful but
            essential for your safety. Together, we&apos;ll make the learning
            process engaging and unforgettable!
          </motion.div>
        </div>
      </section>
      <section id="media-literacy">
        <SuriContainer
          className={`${s.media} ${s.section_indent} ${s.separateless}`}
        >
          <SectionTitle align="center" text="Media Literacy" />
          <div className={s.media_cards}>
            <Swiper
              className={s.media_swiper}
              navigation={true}
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                575: {
                  centeredSlides: true,
                  slidesPerView: "auto",
                },
                1023: {
                  slidesPerView: 4,
                },
              }}
            >
              <div className={s.mask}>
                {mediaLiteracy.map((topic, key) => (
                  <SwiperSlide key={topic.title} className={s.animation_card}>
                    <MediaLiteracy
                      counter={isMobile ? 0 : key}
                      title={topic.title}
                      icon={topic.icon}
                      description={topic.description}
                      bannerGradient={topic.bannerGradient}
                      textColor={topic.textColor}
                    />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </SuriContainer>
      </section>
      <section id="solutions">
        <SuriContainer className={`${s.section_indent}`}>
          <SectionTitle align="center" text="Solutions" />
          <div className={s.solutions}>
            <Swiper
              freeMode
              navigation={true}
              modules={[Navigation]}
              className={s.swiper_solution}
              slidesPerView={1}
              spaceBetween={30}
            >
              {solutions.map((solution) => (
                <SwiperSlide key={solution.title}>
                  <SolutionCard
                    title={solution.title}
                    description={solution.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </SuriContainer>
      </section>
      <section id="comics">
        <SuriContainer className={`${s.section_indent}`}>
          <SectionTitle align="center" text="My life cases" />
          <div className={s.comics}>
            <Comics />
          </div>
        </SuriContainer>
      </section>
    </>
  );
}
