'use client'

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  closeOnOverlayClick?: boolean
  children: React.ReactNode
  closeOnScroll?: boolean
}

export const AShowModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  closeOnOverlayClick = true,
  children
}) => {
  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      e.preventDefault()
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.addEventListener('touchmove', preventScroll, { passive: false })
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.removeEventListener('touchmove', preventScroll)
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.removeEventListener('touchmove', preventScroll)
    }
  }, [isOpen])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[1000000] overflow-hidden"
      onTouchMove={(e) => e.stopPropagation()}
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => {
          if (closeOnOverlayClick) onClose()
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full flex-col">
        <div className="max-w-[660px] p-6 mo:p-5 w-full mo:bottom-0">
          <button className="flex mo:justify-center justify-end w-full top-10 relative">
            <img src="./hero.svg" />
          </button>
          <div className="rounded-lg shadow-lg relative z-[10000] p-6 mo:p-2.5 bg-contain mo:bg-cover w-full h-auto bg-[#0D131B] border-r-[#00FF0D] border-r-8 border border-l-0 border-t-0 border-b-1 border-b-[#00FF0D] bg-black/50 bg-[url(/line.svg)] bg-no-repeat">
            <div className="float-right cursor-pointer" onClick={onClose}>
              <img src="./close.svg" />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
