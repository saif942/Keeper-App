import React from "react";

function KeeperDoc() {
  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });
  const [keeperNote, setKeeperNote] = React.useState([]);

  function updateTitle(event) {
    newTitle = event.target.value;
    id = event.target.id;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [id]: newTitle,
      };
    });
  }

  function addNote(event) {
    setKeeperNote((prevNote) => {
      return [...prevNote, note];
    });
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  }
  function deleteNote(event) {
    let id = event.target.id;
    setKeeperNote((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index != id;
      });
    });
  }
  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            id="title"
            value={note.title}
            onChange={updateTitle}
            placeholder="Enter title"
          />
          <textarea
            id="content"
            value={note.content}
            onChange={updateTitle}
            placeholder="Take a note..."
          />
          <button onClick={addNote}> Add</button>
        </form>
      </div>
      {keeperNote.map((keeper, index) => {
        return (
          <div id={index} key={index} className="note">
            <h1>{keeper.title}</h1>
            <p>{keeper.content}</p>
            <button key={index} id={index} onClick={deleteNote}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default KeeperDoc;
