import { useState } from "react";
import "./App.css";

function App() {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    

    const copyTask = [...task];

    copyTask.push({ title, details})

    setTask(copyTask)

    setTitle('')
    setDetails('')
  };

  return (
    <>
      <div className="h-screen lg:flex bg-black text-white">
        
        <form
          onSubmit={(e) => {
            submitHandler(e);
            let hed={title}
          }}
          className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
        >
          <h1 className="text-3xl text-center top-0 left-7">Add Notes</h1>

          <input
            type="text"
            placeholder="Enter Notes Heading"
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
              console.log(title)
             }}
            className="px-5 w-full font-medium outline-none  py-2 border-2 rounded"
          />

          <textarea
            type="text"
            placeholder="Enter Details"
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
            className="w-full font-medium px-5 py-2 h-32 items-start flex-row outline-none  border-2 rounded"
          />

          <button className="bg-white active:bg-gray-600 w-full font-medium text-black px-5 py-2 rounded">
            Add Notes
          </button>


        </form>
        <div className="  lg:w-1/2 lg:border-l-2  p-10 h-full">
          <h1 className="text-3xl font-bold text-center">Recent Notes</h1>
          <div className="flex flex-wrap items-start gap-5 mt-5 h-full overflow-auto ">
            {task.map(function(elem, idx){
              return <div key={idx} className="h-52 w-40 text-black rounded-xl p-4 bg-white">
                <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
                <p className="mt-2 leading-tight font-medium text-gray-700">{elem.details}</p>
              </div>
            })}
           
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
