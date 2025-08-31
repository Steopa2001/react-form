import { useState } from "react"

//Lista articoli 
const initialArticles = [
  {
    id: 1, title:'Primo Articolo'
  },
  {
    id: 2, title:'Secondo Articolo'
  },
  {
    id: 3, title:'Terzo Articolo'
  }
];

function App() {

  const [articles, setArticles] = useState(initialArticles)

  return (
    <div>
      <h1>Lista Articoli</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  )

}

export default App
