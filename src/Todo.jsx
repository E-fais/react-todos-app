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
        <div  className='listedTodo'>
           <p>{obj.item} <button className='deleteBtn' onClick={()=>{deleteBtn(obj.key) }}>X</button></p> 
        </div>
    )
  }) }

    </div>
  )
}

export default Todo