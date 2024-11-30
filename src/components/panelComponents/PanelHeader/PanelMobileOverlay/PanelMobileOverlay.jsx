import React from 'react'

export default function PanelMobileOverlay({isOpen}) {
  return (
    <div className={`w-full ${isOpen ? "visible opacity-45" : "invisible opacity-0"} transition-all duration-300 fixed top-0 right-0 z-20 left-0 bg-black opacity-45 h-full`}></div>
  )
}
