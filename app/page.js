 
import AboutUs from "./components/About_Us";
  import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Homeowners from "./components/Homeowners";
 import LatestWork from "./components/Our_Latest_Work";
import ProblemSolution from "./components/ProblemSolution";
import Scoth_Brace from "./components/Scoth_Brace";
 

 
export default function Home() {
  return (
    <div  >
  <Hero/>
 <ProblemSolution/>
 <Scoth_Brace/>
 <AboutUs/>
 <Gallery/>
 <Homeowners/>
 <LatestWork/>
  </div>

  );
}
