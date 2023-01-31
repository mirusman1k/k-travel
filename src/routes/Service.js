import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1614056965546-42fbe24eb36c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2729&q=80"
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
