import React, { createContext, useContext, useState, useEffect } from 'react';

interface MobileContextType {
  isMobile: boolean;
}

const MobileContext = createContext<MobileContextType>({ isMobile: false });

export const MobileProvider: React.FC<{ isMobileOverride?: boolean; children: React.ReactNode }> = ({
  isMobileOverride,
  children,
}) => {
  const [isWindowSmall, setIsWindowSmall] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const checkSize = () => {
      setIsWindowSmall(window.innerWidth < 768);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const isMobile = isMobileOverride !== undefined ? isMobileOverride : isWindowSmall;

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

export const useMobileView = () => useContext(MobileContext);
