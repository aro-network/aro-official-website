import Spline from '@splinetool/react-spline'
import { AnimatePresence, motion, useScroll } from 'motion/react'
import { useEffect, useState } from 'react'
import './App.css'
import { Architecture } from './components/architecture'
import { Hero } from './components/hero'
import { Solutions } from './components/solutions'
import { Subscribe } from './components/Subscribe'
import { VisionStatement } from './components/vision-statement'

function App() {
  const { scrollY } = useScroll()
  const [showSpline, setShowSpline] = useState(true)

  useEffect(() => {
    scrollY.on('change', (latest) => {
      setShowSpline(latest <= window.innerHeight + 2000)
    })
  }, [scrollY])

  return (
    <div className='w-screen'>
      <AnimatePresence>
        {
          showSpline && <motion.div
            style={{
              position: 'fixed',
              width: '100%',
              height: '100vh',
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Spline scene="https://prod.spline.design/ES73NlbvyVeXL41Y/scene.splinecode" />
          </motion.div>
        }
      </AnimatePresence>
      <main className='container'>
        <Hero />
        <VisionStatement />
      </main>
      <Solutions />
      <Architecture />
      <Subscribe />
    </div>
  )
}

export default App
