import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>WhatsApp Web</title>
      <link id="favicon" rel="shortcut icon" type="image/png" href="https://web.whatsapp.com/img/favicon/1x/favicon.png"></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
