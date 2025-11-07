import React, { use, useState } from 'react'


function App() {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [notes, setNotes] = useState([]);

  const submiteHndler = (e) => {
    e.preventDefault();
    console.log(title, detail);
    {/* task =notes //  copytask= newnotes  */ }
    const newNote = [...notes];
    newNote.push({ title, detail });
    setNotes(newNote);
    console.log(newNote);

    setTitle('');
    setDetail('');
  }
  const deleteNote = (index) => {
    const newNote = [...notes];
    newNote.splice(index, 1);
    setNotes(newNote);
  }


  return (
    <div className="min-h-screen  bg-linear-to-br from-gray-900 via-black to-gray-950 text-white flex flex-col lg:flex-row">
      {/* Form Section */}
      <form
        onSubmit={(e) => submiteHndler(e)}
        className="flex flex-col justify-center w-full lg:w-1/2 p-10 lg:p-16 space-y-6"
      >
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">Add a New Note</h2>

        <input
          type="text"
          placeholder="Enter note heading"
          className="px-5 py-3 w-full lg:w-3/4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"

          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}


        />

        <textarea
          placeholder="Write your note here..."
          className="px-5 py-3 w-full lg:w-3/4 bg-gray-800 border border-gray-700 h-40 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none transition"

          value={detail}
          onChange={(e) => {
            setDetail(e.target.value)
          }}
        />

        <button
          type="submit"
          className="w-full  lg:w-3/4 bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 transition"
        >
          Add Note
        </button>
      </form>

      {/* Notes Display Section */}

      <div className="w-full lg:w-1/2 bg-gray-900 p-10 lg:p-16 border-t border-gray-800 lg:border-t-0 lg:border-l">
        <h1 className="text-2xl font-bold text-yellow-400 mb-8">
        Recent Notes Here...
        </h1>

        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-full overflow-auto">
          {notes.map(function (elem, index) {
            return (
              <div
                key={index}
                className="flex flex-col justify-between items-start relative w-40 min-h-52 rounded-xl text-black p-4 bg-white wrap-break-word overflow-y-auto"
              >
                <div className="w-full">
                  <h3 className="leading-tight text-xl font-bold mb-2 wrap-break-word">
                    {elem.title}
                  </h3>
                  <h2 className="text-gray-300 mb-2">--------------------</h2>
                  <p className="leading-snug font-medium text-gray-600 wrap-break-word">
                    {elem.detail}
                  </p>
                </div>

                <button
                  className="w-full bg-red-500 text-white py-1 rounded-md mt-3 hover:bg-red-600 transition"
                  onClick={() => deleteNote(index)}
                >
                  Delete
                </button>
              </div>


            );
          })}
        </div>

      </div>
    </div>

  )
}

export default App
