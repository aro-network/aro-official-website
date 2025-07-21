// Modal.tsx
import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  closeOnOverlayClick?: boolean
  children: React.ReactNode
  closeOnScroll?: boolean
}

export const AShowModal: React.FC<ModalProps> = ({ isOpen, onClose, closeOnScroll = true, closeOnOverlayClick = true, children }) => {
  const scrollStartY = useRef<number>(0)
  const scrollListenerAttached = useRef(false)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    let timeoutId: ReturnType<typeof setTimeout>

    const attachScrollListener = () => {
      if (!closeOnScroll || scrollListenerAttached.current) return
      scrollStartY.current = window.scrollY
      window.addEventListener("scroll", handleScroll, { passive: true })
      scrollListenerAttached.current = true
    }

    const handleScroll = () => {
      const delta = Math.abs(window.scrollY - scrollStartY.current)
      if (delta > 10) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEsc)

    // ✅ 延迟绑定 scroll 监听器，避免刷新误触
    if (closeOnScroll) {
      timeoutId = setTimeout(attachScrollListener, 300)
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
      if (scrollListenerAttached.current) {
        window.removeEventListener("scroll", handleScroll)
        scrollListenerAttached.current = false
      }
      clearTimeout(timeoutId)
    }
  }, [onClose, closeOnScroll])

  if (!isOpen) return null


  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[1000000] flex items-center justify-center backdrop-blur-sm flex-col"
      onClick={() => {
        if (closeOnOverlayClick) onClose()
      }}
    >
      <div className='max-w-[660px] p-6 mo:p-5 w-full'>
        <button className='flex justify-end pt-2 relative top-5 w-full '>
          <img src='./hero.svg' />
        </button>

        <div
          className=" rounded-lg shadow-lg p-6 bg-contain mo:bg-cover  w-full h-auto bg-[#0D131B] border-r-[#00FF0D] border-r-8 border border-l-0 border-t-0 border-b-1 border-b-[#00FF0D]  bg-black/50 bg-[url(/line.svg)] bg-no-repeat "
        >
          <div className='float-right' onClick={onClose}>
            <img src='./close.svg' />
          </div>
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}
