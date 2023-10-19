import { Center } from "@mantine/core";
import Head from "next/head";

function Layout({ children}) {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
   <Head>
    <link rel="stylesheet" href="#" />
   </Head>
   <Center>
   <header>
    <img style={{width:'100px'}} src="/images/sofiado.png" alt="logo" />
    <h1 className="text-center text-lg md:text-xl p-5">SOFIA°</h1>
   </header>
   </Center>
   <main>
    {children}
   </main>
    </div>
  );
}

export default Layout;