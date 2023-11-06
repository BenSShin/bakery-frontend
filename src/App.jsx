/* eslint-disable react/prop-types */
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Welcome } from "./Welcome";

function App() {
  return (
    <div>
      <Welcome />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
