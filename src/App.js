import React, {useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Action from "./components/Action";



function App() {
const [isloading, setisloading] = useState(true);

console.log(isloading);

  return (
    <>
      <div className="bod">
        <Navbar/>
        {/* {isloading? <div>Is loading...</div>: 
        } */}
        <div><h3 className="text-center text-white my-4">
          The chances of success is 20-to-1
        </h3>
        <section id="1" className="mt-4 px-5">
          <h4>Actions & Adventures</h4>
          <div className="cover">
         <Action setisloading={setisloading} />
          </div>
        </section>
        <section id="2" className="mt-4">
          <h4>Trending Now</h4>
          <div>
            <div className="card" style={{ width: "22rem" }}>
              <video
                controls
                src=""
                className="card-img-top" 
                height={"250"}
                alt="..."
              ></video>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted ">
                  Card subtitle
                </h6>
                <p className="card-text">The man is here.</p>
              </div>
            </div>
          </div>
        </section>
        </div> 
      </div>
    </>
  );
}

export default App;
