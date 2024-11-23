type ToDo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default async function SSRPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  const data = await res.json()

  return (
    <div className="container mx-auto p-4 w-1/2">
      {/* <title>Mi título</title> */} {/*  <-- It's works now! but Next.js have a better way */}
      {/* <meta name="description" content="Descripción detallada de mi página" /> */}
      <h2 className="text-3xl font-bold text-center">{`Server Side Rendering Page`}</h2>
      <h3 className="text-2xl font-bold italic text-gray-700">{`Esto no es nada sorprendente viéndolo desde Next.js; pero para React.js es nuevo`}</h3>
      <ul className="list-disc pl-4 max-w-md p-4">
        {data.map((todo: ToDo) => (
          <li key={todo.id} className="flex justify-between">
            <span>{todo.title}</span>
            <span>{todo.completed ? '✅' : '❌'}</span>
          </li>
        ))}
      </ul >
    </div>
  )
};
