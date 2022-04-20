import { Head } from "next/document"
import { useEffect, useState } from 'react'
import Header from "../Header/header";

const Layout = () => {
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
                <link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />
                <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css" />
                <link rel="stylesheet" href="css/slicknav.min.css" type="text/css" />
                <link rel="stylesheet" href="css/style.css" type="text/css" />
            </Head>

            {/* <!-- Page Preloder --> */}
            {Loading ? <div id="preloder">
                <div className="loader"></div>
            </div> : ""}

            
            <Header />
            

        </div>
    )
}
export default Layout