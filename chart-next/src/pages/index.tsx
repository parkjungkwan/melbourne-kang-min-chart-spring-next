import BarChart from 'components/chart/BarChart'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const handleClick=(e:any)=>{
    e.preventDefault()
    
  } 

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/chart"><button >챠트보기</button></Link>
      <Link href="/googleLogin"><button>구글 로그인</button></Link>
      <Link href="/kakaoMap"><a><button>카카오 맵</button></a></Link>
    </div>
  )
}

export default Home
