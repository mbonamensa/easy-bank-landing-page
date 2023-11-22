import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export default function AnimateOnScroll({children}) {
    const scrollVariant = {
        hidden: {opacity: 0, scale: 0.9},
        visible: {opacity: 1, scale: 1, transition: {duration: 0.5}}
    }

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible")
        }else {
            control.start("hidden")
        }
    }, [control, inView])

    return (
        <motion.div 
            ref={ref}
            variants={scrollVariant} 
            initial="hidden" 
            animate={control}
        >
          {children}
        </motion.div>
    )
}