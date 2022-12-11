import { Component } from "react";
import Bar from "./Bar";
import { motion } from "framer-motion";


class SkillsChart extends Component {
    render() {

        return (
            <div>
                <ul>
                    <motion.li

                        initial={{
                            x: -500,
                            opacity: 0,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={
                            { duration: 1 }
                        }

                        className="skills_chartbar w-10/12">
                        <span className="skills_chartbar_label">JavaScript</span>
                    </motion.li>
                    <motion.li

                        initial={{
                            x: -500,
                            opacity: 0,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={
                            { duration: 1.2 }
                        }

                        className="skills_chartbar w-9/12">
                        <span className="skills_chartbar_label">React</span>
                    </motion.li>
                    <motion.li

                        initial={{
                            x: -500,
                            opacity: 0,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={
                            { duration: 1.4 }
                        }

                        className="skills_chartbar w-11/12">
                        <span className="skills_chartbar_label">Java</span>
                    </motion.li>
                    <motion.li

                        initial={{
                            x: -500,
                            opacity: 0,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={
                            { duration: 1.6 }
                        }

                        className="skills_chartbar w-11/12">
                        <span className="skills_chartbar_label">HTML</span>
                    </motion.li>
                    <motion.li

                        initial={{
                            x: -500,
                            opacity: 0,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={
                            { duration: 1.8 }
                        }

                        className="skills_chartbar w-12/12">
                        <span className="skills_chartbar_label">CSS</span>
                    </motion.li>
                    <motion.li

                        initial={{
                            x: -500,
                            opacity: 0,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={
                            { duration: 2.0 }
                        }

                        className="skills_chartbar w-7/12">
                        <span className="skills_chartbar_label">C++</span>
                    </motion.li>
                    <motion.li

                        initial={{
                            x: -500,
                            opacity: 0,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={
                            { duration: 2.2 }
                        }

                        className="skills_chartbar w-6/12">
                        <span className="skills_chartbar_label">Python</span>
                    </motion.li>
  

                </ul>
            </div>
        );
    }
}
export default SkillsChart;                              