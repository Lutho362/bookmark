
import './style.css';
import React, { useState } from "react"
import DisplayMusic from './Components/DisplayMusic'
import Form from './Components/Form'

function App() {

  const [musicList , setMusicList] = useState([{
    music:'Sbali',
    artist: 'Intaba Yase Dubai',
    year: 2020,
    musicLink:'https://www.youtube.com/watch?v=OpiLr3Ien6I'}])

    const [search, setSearch] = useState('')

  const handleDelete = val =>{
    setMusicList(musicList.filter(item=> item.music !== val))
  }


  function AddingNewMusic(load){
      let oldArray = musicList;
      let newArray = [...oldArray, load];
      setMusicList(newArray);
      

  }
  
  

  return (
    
      <div className = "big">
        <div className="first">
          <Form add={AddingNewMusic}/>
        </div >

        <div className="second">
          <div className='inner'>
            <input type = 'text' placeholder='Search by song name' name='search' value= {search} onChange={e => setSearch(e.target.value)} />
            <h2>MY BOOKMARK LIST</h2>
            <DisplayMusic music={musicList} Delete={handleDelete} search={search}/>
          </div>  
        </div>
      </div>
   
  );
}

export default App;

