import React, { useContext,useState } from 'react'
import noteContext from '../context/notes/noteContext';

const Addnote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;  

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
      e.preventDefault();
      addNote(note.title, note.description, note.tag);
      setNote({title: "", description: "", tag: ""})      
      props.showAlert("Added Successfully","success")
    }
    

    const onChange = (e)=>{
      setNote({...note,[e.target.name]: e.target.value})
    }
  return (
    <div>
        <div className="container mt-3 mb-5">
        <h2>Add a Note</h2>
        <form className='my-3'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">title</label>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} value={note.title} minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">description</label>
            <input type="text" className="form-control" id="description" name="description" onChange={onChange} minLength={5} value={note.description} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">tag</label>
            <input type="text" className="form-control" value={note.tag} id="tag" name="tag" onChange={onChange} required/>
          </div>
          <button type="submit" disabled={note.title.length<5 || note.description.length<5} onClick={handleClick} className="btn btn-primary">Add Note</button>
        </form>
        </div>
    </div>
  )
}

export default Addnote