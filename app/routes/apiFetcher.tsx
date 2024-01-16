import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await response.json();
  //console.log(photos[5]);

  /*const data = { message: "Hello from the API!" };

  const reply = new Response(JSON.stringify(data), {
    status: 269,
    headers: { "content-type": "application/json" },
  });

  return reply;*/
  return photos;
}

export default function ApiFetcher() {
  const data: any = useLoaderData();
  return (
    <div>
      <h1>API Fetcher</h1>
      <p>Fetches data from an API and displays it.</p>
      <p>Here's the data:</p>

      <h3><img src={data[12].thumbnailUrl} alt={data[5].title} />{data[5].title}</h3>
      <p><img src={data[10].url} alt={data[5].title} /></p>
      
    </div>
  );
}
