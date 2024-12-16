import Head from 'next/head';
import "./home.css";
import styles from "./page.module.css";
import Nav from './components/nav';
import FirstSection from './components/firstSection';
import SecondSection from './components/secondSection';
import ThirdSection from './components/thirdSection';
import FourthSection from './components/fourthSection';
import FifthSection from './components/fifthSection';
import LastSection from './components/lastSections';
import SectionWindow from './components/sectionWindow';
import FormWindow from './components/formWindow';
import Faq from './components/faq';
import ClientScriptLoader from './components/ClientScriptLoader';

export default function Home() {
  return (
    <>
      <Head>
        <title>GAD</title>
        <link rel="alternate" hreflang="en" href="http://localhost:3000/en/" />
        <link rel="alternate" hreflang="ar" href="http://localhost:3000/ar/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preload" href="/images/first_section/lines.png&w=2048&q=75" as="image" />
      </Head>
      <Nav />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <LastSection />
      <SectionWindow />
      <FormWindow />
      <Faq />
      <ClientScriptLoader />
    </>
  );
}
