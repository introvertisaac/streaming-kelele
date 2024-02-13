// @ts-npcheck
"use client"

import { motion } from "framer-motion"

import { fadeIn, planetVariants, staggerContainer } from "@/lib/utils"

import { TitleText } from "./custome-text"
import StartSteps from "./steps"
import styles from "./styles"

const GetStarted = () => (
  <section
    className={`${styles.paddings}  relative z-10  mx-10 rounded-t-3xl  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(192,132,252,0.5),rgba(255,255,255,0))] `}
  >
    <motion.div
      //   variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="h-[90%] w-[90%] object-contain"
        />
      </motion.div>
      {/* <div className="absolute bottom-10 -z-10 flex w-full justify-center">
        <div className="animate-pulse-slow h-[400px] w-[400px] max-w-full rounded-full bg-gradient-to-tr from-purple-600 to-[#8057e9] opacity-20 blur-[100px]" />
      </div> */}
      {/* <div className="absolute bottom-0 -z-10 flex w-full justify-center">
        <div className="animate-pulse-slow h-[310px] w-[310px] max-w-full rounded-full bg-[#8678F9] opacity-20 blur-[100px]" />
      </div> */}
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex flex-[0.75] flex-col justify-center"
      >
        {/* <TypingText title="| How Metaversus Works" /> */}
        <TitleText title={<>START ON CHACHA</>} />
        <div className="mt-[31px] flex max-w-[500px] flex-col gap-[10px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
)

export default GetStarted

export const startingFeatures = [
  "Go to the streams page",
  "Go to creator dashboard and generate the key",
  "Put the key on your fav streaming software",
  "And Yeah , Smash start stream and spark live",
]