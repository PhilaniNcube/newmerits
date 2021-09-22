import { Fragment } from 'react';
import Navbar from '../components/Navbar';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
