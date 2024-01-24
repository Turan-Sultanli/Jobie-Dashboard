import { useMediaQuery } from "../hooks/useMediaQuery";
import { createContext, useContext, useEffect, useState } from "react";

const SidebarContext = createContext(null);

export default function SidebarProvider({ children }) {
  const [isLargeOpen, setIsLargeOpen] = useState(true);
  const [isSmallOpen, setIsSmallOpen] = useState(false);

  const isOpen = isLargeOpen || isSmallOpen;

  const isScreenSmall = useMediaQuery("(max-width: 992px)");

  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall) setIsSmallOpen(false);
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [isScreenSmall, isSmallOpen]);

  function toggle() {
    if (isScreenSmall) {
      setIsSmallOpen((prev) => !prev);
    } else setIsLargeOpen((prev) => !prev);
  }

  function close() {
    if (isScreenSmall) {
      setIsSmallOpen(false);
    } else {
      setIsLargeOpen(false);
    }
  }

  return (
    <SidebarContext.Provider
      value={{
        isScreenSmall,
        isLargeOpen,
        isSmallOpen,
        isOpen,
        toggle,
        close,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSidebarContext() {
  const value = useContext(SidebarContext);
  if (value == null) throw Error("Cannot use outside of SidebarProvider");

  return value;
}
