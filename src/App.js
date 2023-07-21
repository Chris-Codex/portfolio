import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/projects/Project";
import Resume from "./components/resume/Resume";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-16">

        <Banner />
        <Features />
        <Project />
        <Resume />
      </div>
    </div>
  );
}

export default App;
