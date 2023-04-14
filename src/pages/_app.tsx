import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import DefaultLayout from "@/layouts/DefaultLayout";
import ThemeProvider from "@/contexts/ThemeProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GOOGLE_ANALYTICS_ID } from "@/config/gtag";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // track page view with Google Analytics
      window.gtag("config", GOOGLE_ANALYTICS_ID, {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default MyApp;
