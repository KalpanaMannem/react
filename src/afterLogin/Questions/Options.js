import react from 'react'

export const Options=(props)=>{
   const {v,i}=props.data

   const fnChange=(eve)=>{
       let val= eve.target.value
       let ind=eve.target.id
      props.fnPrepareOptions(val,ind)
   }

   const fnAdd =()=>{
        props.fnAddOptions()
   }
   const fnRemove=(index)=>{
        props.fnDeleteOptions(index)
   }
    return(
        <div className='row mb-3'>
         <div className='col-5 text-end'>
             <b>Option{i+1}:</b>
         </div>
         <div className='col-3'>
             <input onChange={fnChange} className='form-control' value={v} id={i}/>
         </div>
         <div className='col-3'>
            <input onClick={fnAdd} type="button" value="+" className='me-1 bg-primary btn btn-primary'></input>
            <input onClick={()=>fnRemove(i)} type="button" value="-" className='bg-primary btn btn-primary'></input>
         </div>
     </div>
    )

}



