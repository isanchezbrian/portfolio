export const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2
      }
    }
  }
    
export const item = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: '0%',
      transition: {duration: 0.5},
      opacity: 1
    }
  }