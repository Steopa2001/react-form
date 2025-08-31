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

   // Funzione chiamata al submit del form
   const handleSubmit = (e) => {
    // Previene il comportamento di default del form che ricarica la pagina
    e.preventDefault();
   }

     // Creiamo un nuovo oggetto articolo con id incrementale e titolo preso dall'input
     const newArticle = {
      id: articles.length + 1,
      title: newTitle
     }

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
