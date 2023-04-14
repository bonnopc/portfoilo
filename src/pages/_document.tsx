import { GOOGLE_ANALYTICS_ID } from "@/config/gtag";
import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const DESCRIPTION =
  "Prosenjit Chowdhury (@bonnopc) is working as a software engineer for more than 5 years. He has a proven experience working with React.js, Flutter, Typescript, Javascript, Redux, etc. He is also a passionate open source contributor. He is currently working as a software engineer at Multiplyr, building Affine DeFi, a DeFi protocol to earn yields.";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content={DESCRIPTION} />
          <meta name="keywords" content="portfolio, developer, software, javascript" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />

          {/* Open Graph meta tags - Start */}
          <meta property="og:title" content="Prosenjit Chowdhury (@bonnopc) | Software Engineer" />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:url" content="https://bonnopc.dev" />
          <meta
            property="og:image"
            content="/static/images/bonnopc-prosenjit-chowdhury-social-preview.png"
          />

          <meta name="twitter:title" content="Prosenjit Chowdhury (@bonnopc) | Software Engineer" />
          <meta name="twitter:description" content={DESCRIPTION} />
          <meta
            name="twitter:image"
            content="/static/images/bonnopc-prosenjit-chowdhury-social-preview.png"
          />
          <meta
            name="twitter:card"
            content="/static/images/bonnopc-prosenjit-chowdhury-social-preview.png"
          />
          {/* Open Graph meta tags - End */}

          <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/icon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />

          {/* Google tag for analytics */}
          <Script
            async
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ANALYTICS_ID}');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
