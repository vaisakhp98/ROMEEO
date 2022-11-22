import '../styles/globals.css'

import "./../configureAmplify"

import NProgress from 'nprogress';
import "nprogress/nprogress.css";
import { Router } from 'next/router';
import UserProvider from '@lib/context/authContext';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
  return <UserProvider>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    </UserProvider>
}

export default MyApp
