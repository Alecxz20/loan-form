import { useState } from "react"

export default function FormInput({ item, onChange }) {
  const { name, required, placeholder, label, errorMessage, pattern, type } = item

  const [focused, setFocused] = useState(false)

  function handleFocused() {
    setFocused(true)
  }

  return (
    <div className="formItem">
      <label className="formItem__label" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        className="formItem__input"
        placeholder={placeholder}
        required={required}
        id={name}
        pattern={pattern}
        name={name}
        onChange={onChange}
        onBlur={handleFocused}
        focused={focused.toString()}
      />
      {errorMessage ? <span className="formItem__error">{errorMessage}</span> : ''}
    </div>
  )
}
