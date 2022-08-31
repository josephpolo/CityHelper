import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>City Furniture - Helper</title>
        <meta name="description" content="Tool created to help agents better write their comments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="hoverEffect">City Helper</h1>
    </div>
  )
}
