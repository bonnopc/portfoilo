import { useEffect, useState } from "react";

interface IDeviceWidth {
  isMobile: boolean;
  isTablet: boolean;
}

const DEFAULT_DEVICE_WIDTH = {
  isMobile: false,
  isTablet: false,
};

export default function useDeviceWidth(): IDeviceWidth {
  const [deviceWidth, setDeviceWidth] = useState<IDeviceWidth>({ ...DEFAULT_DEVICE_WIDTH });

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      const { innerWidth } = window;
      const isMobile = innerWidth <= 768;
      const isTablet = innerWidth <= 1200;
      setDeviceWidth({ isMobile, isTablet });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceWidth;
}
