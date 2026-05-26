import React, { useState, useCallback, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import image1 from "../../assets/1.png"
import image2 from "../../assets/2.png"

const images = [
  {
    id: 1,
    src: image1,
    alt: "Gourmet food plating",
  },
  {
    id: 2,
    src: image2,
    alt: "Fine dining restaurant",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=800",
    alt: "Chefs preparing food",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    alt: "Modern facility interior",
  },
  {
    id: 5,
    src: "/events_catering.png",
    alt: "Clean workspace",
  },
]

export function VerticalImageStack() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const lastNavigationTime = useRef(0)
  const navigationCooldown = 400 // ms between navigations

  const navigate = useCallback((newDirection) => {
    const now = Date.now()
    if (now - lastNavigationTime.current < navigationCooldown) return
    lastNavigationTime.current = now

    setCurrentIndex((prev) => {
      if (newDirection > 0) {
        return prev === images.length - 1 ? 0 : prev + 1
      }
      return prev === 0 ? images.length - 1 : prev - 1
    })
  }, [])

  const handleDragEnd = (_, info) => {
    const threshold = 50
    if (info.offset.x < -threshold) {
      navigate(1)
    } else if (info.offset.x > threshold) {
      navigate(-1)
    }
  }

  const handleWheel = useCallback(
    (e) => {
      if (Math.abs(e.deltaX) > 30) {
        if (e.deltaX > 0) {
          navigate(1)
        } else {
          navigate(-1)
        }
      } else if (Math.abs(e.deltaY) > 30) {
        if (e.deltaY > 0) {
          navigate(1)
        } else {
          navigate(-1)
        }
      }
    },
    [navigate],
  )

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [handleWheel])

  // Auto-rotate every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      navigate(1)
    }, 3500)
    return () => clearInterval(interval)
  }, [navigate])

  const getCardStyle = (index) => {
    const total = images.length
    let diff = index - currentIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total

    if (diff === 0) {
      return { x: 0, scale: 1, opacity: 1, zIndex: 5, rotateY: 0 }
    } else if (diff === -1) {
      return { x: -220, scale: 0.85, opacity: 0.7, zIndex: 4, rotateY: -10 }
    } else if (diff === -2) {
      return { x: -400, scale: 0.7, opacity: 0.4, zIndex: 3, rotateY: -20 }
    } else if (diff === 1) {
      return { x: 220, scale: 0.85, opacity: 0.7, zIndex: 4, rotateY: 10 }
    } else if (diff === 2) {
      return { x: 400, scale: 0.7, opacity: 0.4, zIndex: 3, rotateY: 20 }
    } else {
      return { x: diff > 0 ? 600 : -600, scale: 0.5, opacity: 0, zIndex: 0, rotateY: diff > 0 ? 30 : -30 }
    }
  }

  const isVisible = (index) => {
    const total = images.length
    let diff = index - currentIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return Math.abs(diff) <= 2
  }

  return (
    <div style={{ position: 'relative', display: 'flex', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      
      {/* Subtle ambient glow */}
      <div style={{ pointerEvents: 'none', position: 'absolute', inset: 0 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%', height: '600px', width: '600px', transform: 'translate(-50%, -50%)', borderRadius: '50%', backgroundColor: 'rgba(8, 51, 31, 0.05)', filter: 'blur(64px)' }} />
      </div>

      {/* Card Stack */}
      <div style={{ position: 'relative', display: 'flex', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', perspective: '1200px' }}>
        {images.map((image, index) => {
          if (!isVisible(index)) return null
          const style = getCardStyle(index)
          const isCurrent = index === currentIndex

          return (
            <motion.div
              key={image.id}
              style={{
                position: 'absolute',
                cursor: isCurrent ? 'grab' : 'pointer',
                transformStyle: "preserve-3d",
                zIndex: style.zIndex,
              }}
              whileTap={{ cursor: isCurrent ? 'grabbing' : 'pointer' }}
              animate={{
                x: style.x,
                scale: style.scale,
                opacity: style.opacity,
                rotateY: style.rotateY,
                zIndex: style.zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 1,
              }}
              drag={isCurrent ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              onClick={() => {
                if (!isCurrent) setCurrentIndex(index)
              }}
            >
              <div
                style={{
                  position: 'relative',
                  height: '600px',
                  width: '550px',
                  overflow: 'hidden',
                  borderRadius: '24px',
                  backgroundColor: 'white',
                  border: '1px solid rgba(0,0,0,0.05)',
                  boxShadow: isCurrent
                    ? "0 25px 50px -12px rgba(8, 51, 31, 0.4), 0 0 0 1px rgba(8, 51, 31, 0.05)"
                    : "0 10px 30px -10px rgba(8, 51, 31, 0.25)",
                }}
              >
                {/* Card inner glow */}
                <div style={{ position: 'absolute', inset: 0, borderRadius: '24px', background: 'linear-gradient(to bottom, rgba(8, 51, 31, 0.1), transparent, transparent)' }} />

                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ objectFit: 'cover', width: '100%', height: '100%', pointerEvents: 'none' }}
                  draggable={false}
                />

                {/* Bottom gradient overlay */}
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '128px', background: 'linear-gradient(to top, rgba(8, 51, 31, 0.8), transparent)' }} />
              </div>
            </motion.div>
          )
        })}
      </div>

    </div>
  )
}
