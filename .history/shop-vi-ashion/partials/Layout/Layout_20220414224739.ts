const Layout = ({ children, pageMeta,infoPage,contentPage }: any) => {
    return (<Head>
        <title>{meta.title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={meta.description} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_DOMAIN + router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.site_name} />
        <meta property="og:title" content={meta.title} />
        <meta httpEquiv="Content-type" name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width" />
        <link rel="icon" href="/images/logo/Belle-Palace32.png" sizes="32x32" />
        <link rel="icon" href="/images/logo/Belle-Palace192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/images/logo/Belle-Palace180.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>)
}