import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios'

export default function Home() {

  const [location, setLocation] = useState('');
  const [data, setData] = useState({});
  const [weather, setWeather] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  var apiKey = "349b0fdf1350ac957992a3f7364fdf4e";

  var lang = "kr";
  var units = "metric";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${apiKey}&lang=${lang}`
  console.log(url)

  const searchLocation = (event) => {
    if(event.key === "Enter") {
      axios.get(url)
      .then((response) => {
        console.clear
        setData(response.data)
        console.log(response.data);
        setWeather(response.data.weather);
        setErrorMessage("")
      }).catch(err => {
        console.log(err);
        setErrorMessage("Please enter another location")
        setData({});
        setWeather()
      })
      setLocation('')
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
        {data.name}
        <input
          value={location}
          onChange={event => setLocation(event.target.value)} 
          //when user type -> setLocation
          placeholder="Enter Location"
          onKeyDown={searchLocation} //make it button
          type="text"
        />

        {
          weather && weather.map((w, index) => {
            return (
            <div key={index}>
              <div>{w.description}</div>
              <div>{w.main}</div>
            </div>
            )
          })
        }
      </main>

    </div>
  )
}
