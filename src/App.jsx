import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  //add task
  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    setTitle("");
    setDetails("");
  };

  //  delete taks
  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <>
      <div className="h-screen lg:flex bg-black text-white">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
        >
          <h1 className="text-3xl text-center top-0 left-7">Add Notes</h1>

          <input
            type="text"
            placeholder="Enter Notes Heading"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="px-5 w-full font-medium outline-none  py-2 border-2 rounded"
          />

          <textarea
            type="text"
            placeholder="Enter Details"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            className="w-full font-medium px-5 py-2 h-32 items-start flex-row outline-none  border-2 rounded"
          />

          <button className="bg-white active:bg-gray-600 w-full font-medium text-black px-5 py-2 rounded">
            Add Notes
          </button>
        </form>
        <div className="  lg:w-1/2 lg:border-l-2  p-10 h-full">
          <h1 className="text-3xl font-bold text-center">Recent Notes</h1>
          <div className="flex flex-wrap items-start gap-5 mt-5 h-[90%] overflow-auto ">
            {task.map(function (elem, idx) {
              return (
                <div
                  key={idx}
                  className="flex justify-between flex-col items-start relative h-52 w-40 text-black bg-cover rounded-xl pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]"
                >
                  <div>
                    <h3 className="leading-tight text-xl font-bold">
                      {elem.title}
                    </h3>
                    <p className="mt-2 leading-tight font-medium text-gray-700">
                      {elem.details}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      deleteNote(idx);
                    }}
                    className="w-full bg-red-600 py-1 text-xs rounded font-bold cursor-pointer active:scale-95 text-white"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
