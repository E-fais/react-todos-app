import React from 'react'

function Todo(props) {
    
    const deleteBtn=(key)=>{
        const newList= props.items.filter((obj)=>{
   return obj.key!==key
}) ;
props.setItems(newList)
    }



  return (
    <div>

 {props.items.map((obj)=>{
    return(
       
           <h2>{obj.item} <button className='deleteBtn' onClick={()=>{deleteBtn(obj.key) }}>X</button></h2> 
        
    )
  }) }

    </div>
  )
}

export default Todo