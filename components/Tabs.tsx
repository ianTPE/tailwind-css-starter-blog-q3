'use client'

import React, { useState } from 'react'
import type { ReactNode } from 'react'

interface TabsProps {
  children: ReactNode
}

export default function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0)
  const items = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<{ title?: string }> => React.isValidElement(child)
  )
  return (
    <div className="my-4">
      <div className="flex overflow-x-auto border-b">
        {items.map((child, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${activeTab === index ? 'border-b-2 border-blue-500' : 'text-gray-600 hover:text-gray-900'}`}
            onClick={() => setActiveTab(index)}
          >
            {child.props.title}
          </button>
        ))}
      </div>
      <div className="p-4">{items[activeTab]}</div>
    </div>
  )
}
