import React, {useState} from 'react'
  function Form(props){
    const [newList, setNewList] = useState([{music:'' ,artist:'', year:'', musicLink: ''}])

    const AddingNewMusic = load=>{
      props.add(load)
      setNewList({music:'',artist:'',year:'', musicLink:''})
    }
    return(
      <div className='styler'>
        <form onSubmit={e=>e.preventDefault()}>
            <label><h2>Add a bookmark</h2></label><br /><br />
            <label>enter a song name</label><br />
            <input 
              type="text"
              name="music"
              value={newList.music}
              placeholder="enter song name"
              onChange={e => setNewList({...newList, music: e.currentTarget.value})}
            
            /><br /><br />
            <label>Artist name</label><br />
            <input 
              type="text"
              name="musicLink"
              value= {newList.artist}
              placeholder="name of artist"
              onChange={e => setNewList({...newList, artist: e.currentTarget.value})}

            />
            <br /><br />
            <label>Year Realesed</label><br />
            <input 
              type="text"
              name="year"
              value= {newList.year}
              placeholder="year released"
              onChange={e => setNewList({...newList, year: e.currentTarget.value})}
            />  
            <br /><br />
            <label>enter a song link</label><br />
            <input 
              type="text"
              name="musicLink"
              value= {newList.musicLink}
              placeholder="enter link"
              onChange={e => setNewList({...newList, musicLink: e.currentTarget.value})}
            />  
            <br /><br /><br />
            <button onClick = {()=> AddingNewMusic(newList)}> Add </button>
           
          </form>
     </div>     
    )
  }
  export default Form