import type { ReactNode } from 'react'

const Warning = ({ children }: { children: ReactNode }) => (
  <div className="my-4 border-l-4 border-amber-500 bg-amber-100 p-4 text-amber-700">
    <p className="font-bold">警告</p>
    <p>{children}</p>
  </div>
)

export default Warning
