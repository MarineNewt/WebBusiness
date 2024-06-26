import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import backgroundimg from '@/public/images/background-home.jpg'
import HomePage from "@/components/HomePage";
import AddressPage from "@/components/AddressPage";
import TestemonialSlice from "@/components/TestemonialSlice"
import PlanPage from "@/components/PlanPage"
import ShowcasePage from "@/components/ShowcasePage"
import ServicesPage from "@/components/ServicesPage"
import TrustPage from "@/components/TrustPage"
import FAQSlice from "@/components/FAQSlice"
import ActionCall from "@/components/ActionCall"

export default function Home() {
  return (
    <>
      <Head>
        <title>Era Website Development</title>
        <meta name="description" content="Modern customized website design and building." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className={styles.backgroundabs} style={{backgroundImage: `url(${backgroundimg.src})`}}></ div>
        <HomePage />
        <AddressPage />
        <TestemonialSlice/>
        <PlanPage/>
        <ShowcasePage/>
        <ServicesPage/>
        {/*<TrustPage/>*/}
        <FAQSlice/>
        <ActionCall/>
      </main>
    </>
  );
}
