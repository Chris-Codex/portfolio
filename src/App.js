import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/projects/Project";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-16">

        <Banner />
        <Features />
        <Project />
      </div>
    </div>
  );
}

export default App;
