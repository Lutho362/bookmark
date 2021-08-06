import React from 'react'

const DisplayMusic= props=> {
    const handleDelete= val =>{
        props.Delete(val)
    }
    const mappedData = props.music.filter( val =>{
      if (props.search==""){
        return val
      }else if( val.music.toLowerCase().includes(props.search.toLowerCase())){
        return val
      }}
      ).map((card, i) =>{
        return(
            <div>
              <div className="hdr" key={i}>
              <button onClick= {()=>handleDelete(card.music)}>x</button>
                <p><a href={card.musicLink}>{card.music}</a><br /><br />
                By: {card.artist}<br />Realesed: {card.year}</p>
                
              </div><br />
            </div>
          )
    })
    return(
        <>
            {mappedData}
        </>
    )
    
}
export default DisplayMusic;
