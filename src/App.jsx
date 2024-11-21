import Community from "./components/Community";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Holders from "./components/Holders";
import HowToWorks from "./components/HowToWorks";
import Nav from "./components/Nav";
import Whyneed from "./components/Whyneed";

export default function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <Community />
      <Whyneed />
      <HowToWorks />
      <Holders />
      <Footer />
    </main>
  );
}
