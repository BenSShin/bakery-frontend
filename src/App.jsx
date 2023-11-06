import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

function Header() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#bread">Bread</a> | <a href="#posts-new">Pasteries</a>
      </header>
    </div>
  );
}

function Bread() {
  return (
    <div id="bread">
      <h1>Bread</h1>
    </div>
  );
}

function Pasteries() {
  return (
    <div id="pasteries">
      <h1>Pasteries</h1>
    </div>
  );
}

function Content() {
  return (
    <div>
      <Bread />
      <Pasteries />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
    </footer>
  );
}
