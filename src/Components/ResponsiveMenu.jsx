import { motion, AnimatePresence } from 'framer-motion'


const ResponsiveMenu = ({open}) => {
  return <AnimatePresence mode='wait'>
    {open &&(<motion.div
            initial={{opacity:0,y:-100}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:-80}}
            className='absolute left-0 z-20 w-full h-screen top-20'
            >
              <div className="py-10 m-6 text-xl font-semibold text-white uppercase bg-primary rounded-3xl">
                <ul className='flex flex-col items-center justify-center gap-10 '>
                  <li>Home</li>
                  <li>About</li>
                  <li>Service</li>
                  <li>Contact</li>
                </ul>
              </div>
            </motion.div>
            
        )
    }
  </AnimatePresence>
  
}

export default ResponsiveMenu
