import { Head } from "next/document"

const Header = ({ children, pageMeta, infoPage, contentPage }: any) => {
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
            <header>
                
            </header>
        </div>
    )
}export default Layout