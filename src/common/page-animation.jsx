import { AnimatePresence, motion } from "framer-motion";

// opacity: 0 mean it will be invisible at first, and opacity: 1 mean it will be visible and have a fade in effect
const AnimationWrapper = ({ children, keyValue, initial = { opacity: 0 }, animate = { opacity: 1 }, trasition = { duration: 1 }, className }) => {
    return (
        <AnimatePresence>
            {/* framer-motion property */}
            <motion.div
                key={keyValue}
                initial={initial}
                animate={animate}
                trasition={trasition}
                className={className}
            >
                { children }
            </motion.div>
        </AnimatePresence>
    )
}

export default AnimationWrapper;