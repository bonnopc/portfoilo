import { useEffect, useState } from "react";

interface IDeviceWidth {
  isMobileUp: boolean;
  isTabletUp: boolean;
}

const DEFAULT_DEVICE_WIDTH = {
  isMobileUp: false,
  isTabletUp: false,
};

/**
 * This hook will return the device width
 * it will return isMobileUp: true if the device width is >= 768px
 * and isTabletUp: true if the device width is >= 1024px
 * @returns {IDeviceWidth} device width
 * @example
 * const { isMobileUp, isTabletUp } = useDeviceWidth();
 * if (isMobileUp) {
 *  // do something for tablet and desktop
 * } else {
 *  // do something for mobile
 * }
 * if (isTabletUp) {
 *  // do something for desktop
 * } else {
 *  // do something for tablet and mobile
 * }
 */
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
