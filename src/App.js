const myName = "Oleh";
const colors = ["red", "green", "blue"];
const imgObj = {
  src: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
  alt: "taco",
};
const favSite = { name: "Google", url: "https://www.google.com/" };
const num1 = 10;
const num2 = 20;

function App() {
  return (
    <>
      <h1>{myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={imgObj.src} alt={imgObj.alt} />
      <a href={favSite.url}>{favSite.name}</a>
      <p>{num1 + num2}</p>
      <ul>
        {colors.map((color) => (
          <li>{color}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
