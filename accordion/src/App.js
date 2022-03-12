import data from "./data";
import "./App.css";
import { useState } from "react";
import SingleContent from "./components/SingleContents"

function App() {
  const [context, setContent] = useState(data);
  return (
    <>
      <main>
        <div className="App">
          <div className="container">
            <h1>รวบรวมข้อมูลเว็บไซต์</h1>
            <section>
              {context.map((data)=>{
                return <SingleContent key={data.id} {...data}/>
              })}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
