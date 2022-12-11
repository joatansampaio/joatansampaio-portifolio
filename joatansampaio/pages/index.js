import Head from 'next/head'
import Intro from '../components/Containers/Intro'
import Content from '../components/ContentMain'

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <title>Joatan Sampaio</title>
      </Head>

      <main className='bg-gradient-to-tl from-j_main_dark to-j_main_light min-h-screen'>
        <div>
          <Intro />
          <Content />
        </div>
      </main>

    </div>
  )
}
