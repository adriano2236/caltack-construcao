import { lazy, Suspense, useEffect } from "react";
import Lenis from "lenis";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
const Trabalhos = lazy(() => import("./pages/Trabalhos"));
import Whatsapp from "./components/Whatsapp";
const Servicos = lazy(() => import("./pages/Servicos"));
const QuemSomos = lazy(() => import("./pages/QuemSomos"));
const Diferencial = lazy(() => import("./pages/Diferencial"));
import { Routes, Route } from "react-router-dom";
function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      // 👈 AQUI
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.2,
      wheelMultiplier: 0.9,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <Whatsapp />
    </>
  );
}

function App() {
  return (
    <>
      <SmoothScroll />
      <Header />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/diferencial" element={<Diferencial />} />
          <Route path="/trabalhos" element={<Trabalhos />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
