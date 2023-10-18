import Head from "next/head";

function Layout({ children}) {
  return (
    <div className="flex flex-col min-h-screen">
   <Head>
    <link rel="stylesheet" href="#" />
   </Head>
   <header>
    <img src="/images/logo.png" alt="logo" />
    <h1>SOFIA°</h1>
   </header>
   {/* content inside children will change dynamically */}
   <main>
    {children}
   </main>
    </div>
  );
}

export default Layout;