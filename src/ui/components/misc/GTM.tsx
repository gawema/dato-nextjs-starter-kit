import Script from 'next/script';

export const Gtm = () =>
  process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GTM ? (
    <Script
      id="google-tag-manager-ga4"
      strategy="afterInteractive"
    >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM}');`}</Script>
  ) : null;
