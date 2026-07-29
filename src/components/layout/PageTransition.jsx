import { motion } from 'framer-motion'

const curtainVariants = {
  initial: { scaleY: 1, transformOrigin: 'top' },
  animate: {
    scaleY: 0,
    transformOrigin: 'top',
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    scaleY: 1,
    transformOrigin: 'bottom',
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
}

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
}

export default function PageTransition({ children }) {
  return (
    <>
      {/* Curtain overlay */}
      <motion.div
        className="fixed inset-0 z-[9999] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #e91e8c 0%, #2d1057 50%, #0d0118 100%)',
        }}
        variants={curtainVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      {/* Page content */}
      <motion.div
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </>
  )
}
