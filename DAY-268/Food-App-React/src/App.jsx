import "./App.css";
import { SiReact } from "react-icons/si";
import vector from "./assets/01.svg"
function App() {
  return (
    <>
      <div className="flex justify-center items-start w-full h-screen box-border">
        <div className="w-full h-full  max-h-[448px]   bg-bg box-border ">
          <nav className="w-full h-16 box-border  px-16 py-1 flex justify-start items-center ">
            <SiReact className="text-white text-4xl ml-16"></SiReact>
          </nav>
          <div className="w-full h-full box-border  grid lg:grid-cols-2 md:gird-row-2 lg:place-items-center bg-bg px-16">
            {/* left */}
            <div className="h-full w-full p-16 box-border  grid grid-row-3 place-items-start place-self-start place-content-start lg:gap-10 md:gap-10 sm:gap-8">
              <h4 className="lg:text-4xl lg:w-[75%] md:text-3xl md:w-full sm:text-2xl font-bold text-accent ">
                Enhanced Your Skills With Our Website
              </h4>
              <p className="lg:w-[75%] md:w-full text-accent">
                A free community of coders who love to share their knowledge
                with others
              </p>
              <button className="lg:w-[75%] md:w-full h-12 box-border text-center bg-accent text-bg font-bold rounded-md sm:px-2">Explore the communities</button>
            </div>
            {/* right */}
            <div className="h-full w-full box-border flex justify-center lg:items-start">
              <img className="lg:w-full lg:h-96 " src={vector} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
