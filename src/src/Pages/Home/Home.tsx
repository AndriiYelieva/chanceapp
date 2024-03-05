import { Header } from "../../components/Header";
import { Head } from "../../components/Head";
import { AboutPeople } from "../../components/AboutPeople";
import { OpenTheFunctions } from "../../components/OpenTheFunctions";
import { AboutUs } from "../../components/AboutUs";
import { FAQ } from "../../components/FAQ";
import { Support } from "../../components/Support";
import { Footer } from "../../components/Footer";
import { Cookies } from "../../components/Cookies";

export const Home = () => {
  return (
    <>
      <Header />
      <Head />
      <AboutPeople />
      <OpenTheFunctions />
      <AboutUs />
      <FAQ />
      <Support />
      <Footer />

      <Cookies />
    </>
  );
}