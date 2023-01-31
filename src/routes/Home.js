import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destinations from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1530173660394-4047e55984d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        title="Let's Explore Kashmir"
        text="See The Kashmir Like Never Before"
        buttonText="Explore Destinations"
        url="/ "
        btnClass="show"
      />
      <Destinations />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
