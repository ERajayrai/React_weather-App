import React,{useEffect} from 'react'

export const WeatherCard = ({myIf}) => {
    const [weatherState, setWeatheState] = React.useState("");
    const{
        temp,humidity,pressure,weathermood,name,speed
        ,country, sunset
    }=myIf;
    useEffect(() => {
      if (weathermood) {
        switch (weathermood) {
          case "Clouds":
            setWeatheState("wi-day-cloudy");
            break;
          case "Haze":
            setWeatheState("wi-fog");
            break;
          case "Clear":
            setWeatheState("wi-day-sunny");
            break;
          case "Mist":
            setWeatheState("wi-dust");
            break;
  
          default:
            setWeatheState("wi-day-sunny");
            break;
        }
      }
    }, [weathermood]);
    let sec=sunset;
    let date= new Date(sec *1000);
    let timeStr=`${date.getHours()}:${date.getMinutes()}`
    return (
        <>
            
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">
                            {weathermood}
                        </div>
                        <div className="place">
                            {name} , {country}
                        </div>
                    </div>
                </div>
                <div  className="date">{new Date().toLocaleString()}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className="extra-info-leftside">{timeStr} <br />
                            sunset</p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className="extra-info-leftside">{humidity} <br />
                            humidity</p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                                <p><i className={"wi wi-rain"}></i></p>
                                <p className="extra-info-leftside">{pressure} <br />
                                pressure</p>
                            </div>
                            <div className="two-sided-section">
                                <p><i className={"wi wi-strong-wind"}></i></p>
                                <p className="extra-info-leftside">{speed}<br />
                                wind</p>
                            </div>
                        </div>
                    
                </div>
            </article>
        </>
    )
}
