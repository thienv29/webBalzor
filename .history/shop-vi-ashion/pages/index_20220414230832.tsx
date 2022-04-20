import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import logo from '../public/img/logo.png'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [])

  return (
    <div>


      

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
      <

    </div>

  )
}

export default Home
