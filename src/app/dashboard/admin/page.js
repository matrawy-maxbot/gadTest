"use client";
import dynamic from 'next/dynamic';
import Head from 'next/head';

const DynamicDashboard = dynamic(() => import('./pageContent'), {
  ssr: false,
});

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>GAD | Admin Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DynamicDashboard />
    </>
  );
}
