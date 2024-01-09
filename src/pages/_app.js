import '@/styles/globals.css'
// import { DrawerProvider } from '../Context/context';
import { ComponentProvider } from '@/Context/context'

export default function App({ Component, pageProps }) {
  return (
      <ComponentProvider>
        <Component {...pageProps} />
      </ComponentProvider>
  )
}
