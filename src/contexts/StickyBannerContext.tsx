import { createContext, useContext, useState, ReactNode } from "react";

interface StickyBannerContextType {
  isBannerVisible: boolean;
  setIsBannerVisible: (visible: boolean) => void;
}

const StickyBannerContext = createContext<StickyBannerContextType | undefined>(undefined);

export function StickyBannerProvider({ children }: { children: ReactNode }) {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <StickyBannerContext.Provider value={{ isBannerVisible, setIsBannerVisible }}>
      {children}
    </StickyBannerContext.Provider>
  );
}

export function useStickyBanner() {
  const context = useContext(StickyBannerContext);
  if (context === undefined) {
    throw new Error("useStickyBanner must be used within a StickyBannerProvider");
  }
  return context;
}
