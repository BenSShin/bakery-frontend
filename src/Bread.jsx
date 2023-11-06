export function Bread(props) {
  console.log(props);
  return (
    <div id="bread">
      <h1>Bread</h1>
      <div className="breadcards">
        {props.breads.map((bread) => (
          <div key={bread.id} className="breadcard">
            <h2>{bread.name}</h2>
            <p>price: {bread.price}</p>
            <img src={bread.image} alt="bread picture" />
          </div>
        ))}
      </div>
    </div>
  );
}
