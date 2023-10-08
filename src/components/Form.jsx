import { useState } from 'react'
import Data from '../assets/data'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import { LuSend } from "react-icons/lu";

export default function Form() {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    areaCode: '',
    phoneNumber: '',
    city: '',
    amount: '',
    reason: '',
    months: '',
    good: '',
    brand: '',
    model: '',
    keyword: '',
  })

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }

  function inputOnChange(e) {
    console.log(e.target.value)
    setValues({...values, [e.target.name]: e.target.value})
  }

  function selectOnChange(e) {
    console.log(e.value)
    setValues({...values, [e.name]: e.value})
  }

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      {Data.map((item) =>
        item.input ? (
          <FormInput key={item.id} item={item} value={values[item.name]} onChange={inputOnChange} />
        ) : (
          <FormSelect key={item.id} item={item} value={values[item.name]} onChange={selectOnChange} />
        )
      )}
      <button className='btnSubmit' type="submit">
        <LuSend />
        Enviar Solicitud
      </button>
    </form>
  )
}
