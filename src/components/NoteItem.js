import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext';


function NoteItem(props) {
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const {note, updateNote} = props;
  return (
    <>
        
        <div className="col-md-3">
        <div className="card my-3">
            <div className="card-body">
              <div className="d-flex felx-wrap justify-content-between">
                <h5 className="card-title">{note.title}</h5><div className="icon">
                  <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted successfully","success")}}></i>
                  <i className="fa-solid fa-pen-to-square" onClick={()=>{updateNote(note); }}></i>
                </div>
                </div>
                <p className="card-text">{note.description}</p>
            </div>
        </div>
        </div>
        
    </>
  )
}

export default NoteItem