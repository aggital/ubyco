import React, {FC} from "react";
import 'bootstrap/dist/css/bootstrap.css'
interface App{
  Component: any;
  pageProps: any;
}
const MyApp:FC<App>= ({ Component, pageProps }) => {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
