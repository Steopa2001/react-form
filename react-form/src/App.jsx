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

  // Stato per gestire la lista degli articoli, inizializzato con initialArticles
  const [articles, setArticles] = useState(initialArticles);

  // Stato per gestire il valore del campo input per il nuovo articolo
  const [newTitle, setNewTtitle] = useState('');

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

export default App;
