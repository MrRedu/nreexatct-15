import { use } from "react";

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export default function UsePage() {
  const data = use(fetchData());

  console.log(data);

  return (
    <>
      <h2>{`</UsePage>`}</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
};
