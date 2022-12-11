import { motion } from "framer-motion";
import SkillsChart from "./Animation/Skills Chart/SkillsChart";

export default function Content() {

  const data = [
    [
   ],
  ];

  return (
    <motion.section
      initial={{
        x: -500,
        opacity: 0.5,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1
      }}


      id='skills-section'
      className="bg-slate-800 w-5/6 m-auto rounded-lg p-6 border border-slate-700 mt-8">
      <h1 className='font-extralight text-center text-4xl mb-5'>Joatan Sampaio</h1>


      <SkillsChart />

      <div className="m-auto w-fit">

      </div>


      <p>
        In love with computers since 2003 when I was only 13 years old, I&apos;ve had many upside downs in this area.
        I always loved programming! My first programming language was C back in 2005 and I kept programming for at lest 2 years.
        Most of my projects were game-related macros in C to get ahead of other players. Also, back then I worked a little bit with HTML and CSS
        to create 2 or 3 websites; one of which I actually sold to a security camera company.
      </p>
      <br />
      <p>
        Many years later, in 2012, I got back to programming! This time, with Java. I got to learn a lot and managed to get a certification
        in java. Soon later that, I started to attend College, where I porsued a bachelor&apos;s degree in Systems of Information, which is a computer science related program.
      </p>
      <br />
      <p>
        Unfortunatelly, I never got to the end of this one. Actually, I gave up on it at the beginning of my 4th year. The reason behind that is that I
        started singing and playing, I made a good living out it for many years. In reality when I got into College, I was already working with that for 1 or 2 years.
      </p>
    </motion.section>
  )
}