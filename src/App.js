import React from "react";
import SkatezineContent from "./Page/SkatezineContent";
import Footer from "./Page/Footer";
import Header from "./Page/Header";

function App() {
  return (
    <>
      <main className="main">
        <Header/>
        <SkatezineContent />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
