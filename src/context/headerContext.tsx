"use client";

import { createContext, useContext, useRef } from "react";

type THeader = {
  featuresRef: React.Ref<HTMLDivElement> | null;
};
const LinkContext = createContext<THeader | undefined>(undefined);

export const LinkWrapper = ({ children }: { children: React.ReactNode }) => {
  const featuresRef = useRef(null);

  return (
    <LinkContext.Provider value={{ featuresRef: featuresRef.current }}>
      {children}
    </LinkContext.Provider>
  );
};

export const useLinkContext = () => {
  const context = useContext(LinkContext);
  if (!context)
    throw new Error("useLinkContext must be used within a LinkWarapper");
  return context;
};
