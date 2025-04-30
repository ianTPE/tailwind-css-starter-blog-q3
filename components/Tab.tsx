import type { ReactNode } from 'react';

interface TabProps {
  children: ReactNode;
  title?: string;
  id?: string;
}

export default function Tab({ children, title, id }: TabProps) {
  return (
    <div title={title} id={id}>
      {children}
    </div>
  );
}
