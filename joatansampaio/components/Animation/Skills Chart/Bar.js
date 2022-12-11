import { motion } from "framer-motion";

export default function Bar(props) {

    const { name, attr, animDuration } = props;

    return (
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
            {duration: 1}
          }

        className={attr}>
            <span className="skills_chartbar_label">{name}</span>
        </motion.li>
    )

}