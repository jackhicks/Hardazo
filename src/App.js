import React from "react";
import SkatezineContent from "./Page/SkatezineContent";
import Footer from "./Page/Footer";
import Header from "./Page/Header";
import CookieBanner from "./Components/CookieBanner";

function App() {
  return (
    <>
      <CookieBanner />
      <main className="main">
        <Header />
        <SkatezineContent />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
