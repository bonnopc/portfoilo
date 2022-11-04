import "../styles/globals.scss";
import type { AppProps } from "next/app";
import DefaultLayout from "@/layouts/DefaultLayout";
import ThemeProvider from "@/contexts/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default MyApp;
