import React from 'react'
import { useSelector } from 'react-redux'

const IdShown = () => {
    const Datas = useSelector((state)=>state.form.formDatas)
  return (
    <> 
     <div>Form Data</div>
     {Datas.map((formData)=>(
        <li key={formData.id}>
            {formData.id}
            {formData.firstname}
            {formData.lastname}
        </li>
     ))}
    </>
  )
}

export default IdShown