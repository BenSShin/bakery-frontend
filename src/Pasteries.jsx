export function Pasteries(props) {
  console.log(props);
  return (
    <div id="pasteries">
      <h1>Pasteries</h1>
      <div className="pasteryCards">
        {props.pasteries.map((pastry) => (
          <div key={pastry.id} className="pastrycard">
            <h2>{pastry.name}</h2>
            <p>price: {pastry.price}</p>
            <img src={pastry.image} alt="pastry picture" />
          </div>
        ))}
      </div>
    </div>
  );
}
