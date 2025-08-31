import { useState } from "react";

//Lista articoli
const initialArticles = [
  {
    id: 1,
    title: "Primo Articolo",
  },
  {
    id: 2,
    title: "Secondo Articolo",
  },
  {
    id: 3,
    title: "Terzo Articolo",
  },
];

function App() {
  // Stato per gestire la lista degli articoli, inizializzato con initialArticles
  const [articles, setArticles] = useState(initialArticles);

  // Stato per gestire il valore del campo input per il nuovo articolo
  const [newTitle, setNewTitle] = useState("");

  // Funzione chiamata al submit del form
  const handleSubmit = (e) => {
    // Previene il comportamento di default del form che ricarica la pagina
    e.preventDefault();
    // Creiamo un nuovo oggetto articolo con id incrementale e titolo preso dall'input
    const newArticle = {
      id: articles.length + 1,
      title: newTitle,
    };
    // Aggiorniamo lo stato articles aggiungendo il nuovo articolo
    setArticles([...articles, newArticle]);

    // Resettiamo il campo input dopo aver aggiunto l'articolo
    setNewTitle("");
  };

  // Funzione per cancellare un articolo dato il suo id
  const handleDelete = (id) => {
    // Filtra la lista rimuovendo l'articolo con l'id passato
    const updateArticles = articles.map((article) => article.id !== id);
    setArticles(updateArticles);
  };

  return (
    <div>
      <h1>Lista Articoli</h1>
      <ul>
        {/* Cicliamo sugli articoli e mostriamo il titolo di ciascuno */}
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>

      <h2>Aggiungo il nuovo articolo:</h2>

      <form onSubmit={handleSubmit}>
        {/* Campo input controllato dal stato newTitle */}
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Titolo articolo"
        />
        {/* Pulsante per inviare il form */}
        <button type="submit">Aggiungi</button>
      </form>
    </div>
  );
}

export default App;
