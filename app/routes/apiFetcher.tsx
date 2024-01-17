import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {

  const key = 'ae7a5ef0d7bc4855965204819241701';
  const q = 'miami';
  const days = '7';
  const aqi = 'no';
  const alerts = 'no';
  const url = 'http://api.weatherapi.com/v1/forecast.json?key='+key+'&q='+q+'&days='+days+'&aqi='+aqi+'&alerts='+alerts;
  
  const weather = await fetch(url);
  const weatherData = await weather.json();
  //console.log("weatherData: "+weatherData);
  return weatherData;
}

export default function ApiFetcher() {
  const data: any = useLoaderData();
  return (
    <div>
      <div className="weather-head" style={{textAlign: 'center', width: 'fit-content', margin: '0 auto', position: 'relative'}}>
        <h1 style={{marginBottom: '32px'}}>WeatherAPI</h1>
        <p><img style={{margin: '0 auto'}} src={`${data.current.condition.icon}`} /></p>
        <h2 style={{paddingTop: '6px', lineHeight: '32px'}}>{data.location.localtime}</h2>
        <h2 style={{lineHeight: '40px'}}><span style={{color: 'yellow'}}>{data.current.temp_f}° F and {data.current.condition.text} in {data.location.name}, {data.location.region}</span></h2>
        <h2 style={{lineHeight: '32px'}}>lat {data.location.lat} long {data.location.lon}</h2>
      </div>

      <ul>
        {data.forecast.forecastday.map((day: any) => (
          <li key={day.date} style={{textAlign: 'center', float: 'left', margin: '50px 50px 10px 0px'}}>
            <p>{day.day.condition.text}</p>
            <img style={{marginLeft: 'auto', marginRight: 'auto'}} src={`${day.day.condition.icon}`} />
            <p>High: {day.day.maxtemp_f}° F</p>
            <p>Low: {day.day.mintemp_f}° F</p>
            <p>{day.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
