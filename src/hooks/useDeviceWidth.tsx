import { useEffect, useState } from "react";

interface IDeviceWidth {
  isMobile: boolean;
}

export default function useDeviceWidth(): IDeviceWidth {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      const { innerWidth } = window;
      const isMobile = innerWidth <= 768;
      setIsMobile(isMobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile };
}
