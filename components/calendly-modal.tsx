"use client"

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null | undefined;
      }) => void;
    };
  }
}

interface CalendlyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    
    // Only add the script if it's not already present
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      document.body.appendChild(script)
    }

    // Initialize Calendly widget
    const initWidget = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/abdullahi-ali-averixai?primary_color=0ea028',
          parentElement: modalRef.current?.querySelector('.calendly-inline-widget'),
        })
      }
    }

    script.onload = initWidget
    
    // If script was already loaded, initialize immediately
    if (window.Calendly) {
      initWidget()
    }

    return () => {
      // Clean up is handled by Calendly itself when the element is removed
      // We don't need to remove the script as it can be reused
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm">
      <div ref={modalRef} className="relative bg-black w-full max-w-[900px] max-h-[90vh] sm:max-h-[85vh] rounded-xl sm:rounded-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Calendly widget */}
        <div 
          className="calendly-inline-widget w-full h-[600px] sm:h-[700px]" 
          data-url="https://calendly.com/abdullahi-ali-averixai?primary_color=0ea028"
        />
      </div>
    </div>
  )
}