import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [])
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" />
        <link rel="stylesheet" href="css/elegant-icons.css" type="text/css" />
        <link rel="stylesheet" href="css/jquery-ui.min.css" type="text/css" />
        <link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css" />
        <link rel="stylesheet" href="css/slicknav.min.css" type="text/css" />
        <link rel="stylesheet" href="css/style.css" type="text/css" />
      </Head>

      {/* <!-- Page Preloder --> */}
      {Loading ? }

      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__close">+</div>
        <ul className="offcanvas__widget">
          <li><span className="icon_search search-switch"></span></li>
          <li><a href="#"><span className="icon_heart_alt"></span>
            <div className="tip">2</div>
          </a></li>
          <li><a href="#"><span className="icon_bag_alt"></span>
            <div className="tip">2</div>
          </a></li>
        </ul>
        <div className="offcanvas__logo">
          {/* <a href="./index.html"><Img src="img/logo.png" alt=""></a> */}
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__auth">
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      </div>

    </div>

  )
}

export default Home
