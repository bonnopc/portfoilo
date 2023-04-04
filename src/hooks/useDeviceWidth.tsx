import { useEffect, useState } from "react";

interface IDeviceWidth {
  isMobileUp: boolean;
  isTabletUp: boolean;
}

const DEFAULT_DEVICE_WIDTH = {
  isMobileUp: false,
  isTabletUp: false,
};

export default function useDeviceWidth(): IDeviceWidth {
  const [deviceWidth, setDeviceWidth] = useState<IDeviceWidth>({ ...DEFAULT_DEVICE_WIDTH });

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      const { innerWidth } = window;
      setDeviceWidth({
        isMobileUp: innerWidth >= 768,
        isTabletUp: innerWidth >= 1024,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceWidth;
}
