'use client'

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  closeOnOverlayClick?: boolean
  children: React.ReactNode
}

export const AShowModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  closeOnOverlayClick = true,
  children
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const preventScroll = (e: TouchEvent) => e.preventDefault()

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      window.addEventListener('touchmove', preventScroll, { passive: false })
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      window.removeEventListener('touchmove', preventScroll)
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      window.removeEventListener('touchmove', preventScroll)
    }
  }, [isOpen, mounted])

  if (!mounted || !isOpen) return null

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[1000000] overflow-hidden"
      onTouchMove={(e) => e.stopPropagation()}
    >
      <div
        className="absolute inset-0 bg-[#000000B2]  backdrop-blur-[14px]"
        onClick={() => {
          if (closeOnOverlayClick) onClose()
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full flex-col">
        <div className="max-w-[660px] p-6 mo:p-5 w-full mo:bottom-0 mb-10">
          <div className="flex justify-end w-full top-[1.875rem] relative ">
            <img src="./hero.svg" className='' />
          </div>
          <div className="rounded-lg shadow-lg p-6 mo:p-2.5 bg-contain mo:bg-cover mo:bg-right w-full h-auto bg-[#0D131B] border-r-[#00FF0D] border-r-8 border border-l-0 border-t-0 border-b-1 border-b-[#00FF0D]  bg-[url(/line.svg)] bg-no-repeat">
            <div className="float-right cursor-pointer relative z-[10000]" onClick={onClose}>
              <img src="./close.svg" width={25} height={25} />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
