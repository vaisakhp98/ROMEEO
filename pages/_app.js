import '../styles/globals.css'

import "./../configureAmplify"

import NProgress from 'nprogress';
import "nprogress/nprogress.css";
import { Router } from 'next/router';


NProgress.configure({
  minimum : 0.3,
  easing:'ease',
  speed:800,
  showSpinner: false
})

Router.events.on('routeChangeStart',()=>NProgress.start());
Router.events.on('routeChangeComplete',()=>NProgress.start());
Router.events.on('routeChangeError',()=>NProgress.start());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
