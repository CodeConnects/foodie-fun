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
      <div className="weather-head text-center my-0 mx-auto">
        <h1 className="mb-4">WeatherAPI</h1>
        <p><img className="my-0 mx-auto" src={`${data.current.condition.icon}`} /></p>
        <h2 className="h-10">{data.location.localtime}</h2>
        <h2 className="h-10"><span className="text-yellow-300">{data.current.temp_f}° F and {data.current.condition.text} in {data.location.name}, {data.location.region}</span></h2>
        <h2 className="h-10">lat {data.location.lat} long {data.location.lon}</h2>
      </div>

      <ul className="flex flex-wrap justify-center">
        {data.forecast.forecastday.map((day: any) => (
          <li key={day.date} className="text-center mt-12 mx-10 mb-2">
            <p>{day.day.condition.text}</p>
            <img className="mx-auto" src={`${day.day.condition.icon}`} />
            <p>High: {day.day.maxtemp_f}° F</p>
            <p>Low: {day.day.mintemp_f}° F</p>
            <p>{day.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
