import Head from 'next/head'
import {Index} from '../src/containers/Index'

export default function Home() {
  return (
    <div>
        <Index />
        
      <Head>
        <title>Juan Duran Dev</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap" key="raleway-font" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap" key="mono-font" rel="stylesheet"></link>
      </Head>
      
    </div>
  )
}
