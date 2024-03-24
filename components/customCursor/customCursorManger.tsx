import React, { createContext, useState } from 'react';

type CursorContextType = {
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
};

export const CursorContext = createContext<CursorContextType>({
  size: 'small',
  setSize: () => {},
});
export default function CursorManager({
  children,
}: {
  children: React.ReactNode;
}) {
  const [size, setSize] = useState('small');
  return (
    <CursorContext.Provider value={{ size, setSize }}>
      {children}
    </CursorContext.Provider>
  );
}
