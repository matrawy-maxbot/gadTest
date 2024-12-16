import Head from 'next/head';
import Image from 'next/image';
import "./login.css";
import styles from "./page.module.css";
import LoginForm from './components/loginForm';
import ClientScriptLoader from './components/ClientScriptLoader';

export default function Login() {
  return (
    <>
      <Head>
        <title>GAD | Admin Dashboard Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="body-background">
        <div className="gradiant-point point1"></div>
        <div className="gradiant-point point2"></div>
      </div>
      <div className="container">
        <LoginForm />
      </div>
      <ClientScriptLoader />
    </>
  );
}
