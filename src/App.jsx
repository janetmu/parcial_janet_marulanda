import { useState } from "react";
import Card from "./Components/Card";

function App() {
  const [formData, setFormData] = useState({ title: "", author: "" });
  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (formData.title.trim().length < 3 || formData.title[0] === "") {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    if (formData.author.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    setSubmittedData(formData);
    setError("");
  };

  return (
    <div className="App">
      <h1>Busqueda de libros</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={formData.author}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {submittedData && <Card data={submittedData} />}
    </div>
  );
}

export default App;
