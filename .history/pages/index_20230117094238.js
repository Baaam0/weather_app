import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios'

export default function Home() {

  const [location, setLocation] = useState('');
  const [data, setData] = useState()

  var apiKey = "349b0fdf1350ac957992a3f7364fdf4e";

  var lang = "kr";
  var units = "metric";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${apikey}&lang=${lang}`
  console.log(url)
  const searchLocation = (event) => {
    if(event.key === "Enter") {
      axios.get(url)
      .then((response) => {
        console.clear
        
      })
    }
  }

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
          onChange={event => setLocation(event.target.value)} //when user type -> setLocation
          placeholder="Enter Location"
          onKeyDown={searchLocation} //make it button
          type="text"
        />
      </main>

    </div>
  )
}
