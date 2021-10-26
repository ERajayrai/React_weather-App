import React,{useState,useEffect} from 'react'
import "./style.css"
import { WeatherCard } from './WeatherCard';

export const Temp = () => {
    const [searchValue, setSearchValue] = useState("CHANDAULI");
    const [myIf, setMyIf] = useState({})
    const getWeatherInfo= async()=>{
        try {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=4b85bdd09e5cd8178e0ff022a86fd4e2`;
            const res= await fetch(url)
            const data= await  res.json();
            const {main:weathermood}=data.weather[0];
            const {temp,humidity,pressure}=data.main;
            const  {name}=data;
            const {speed}=data.wind;
            const {country, sunset}=data.sys;
            const myNewWeatherInfo={
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                 sunset
            }
            setMyIf(myNewWeatherInfo)
            console.log(myNewWeatherInfo)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getWeatherInfo()
        }, [])
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} className="searchTerm" placeholder="search wether by city name" autoFocus id="search" />
                    <button className="searchButton" onClick={getWeatherInfo} type="button">
                        search
                    </button>
                </div>
            </div>
            <WeatherCard  myIf={myIf}/>
        </>
    )
}
