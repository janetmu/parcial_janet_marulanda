



const Card = ({ data }) => {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "20px", marginTop: "20px" }}
    >
      <h2>Información Libro</h2>
      <p>
        <strong>Título</strong> {data.title}
      </p>
      <p>
        <strong>Autor</strong> {data.author}
      </p>
    </div>
  );
};

export default Card;
