import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {

  const [location, setLocation] = useState('');

  var apiKey = "349b0fdf1350ac957992a3f7364fdf4e";

  var lang = "";
  var units = "";

  const url = `https://api.openweathermap.org/data/2.5/weather?`

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          placeholder
        />
      </main>

    </div>
  )
}
