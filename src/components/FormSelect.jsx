import Select from 'react-select'

export default function FormSelect({ item, onChange }) {
  const { name, label, options } = item
  return (
    <div className="formSelect">
      <label htmlFor={name} className="formItem__label">
        {label}
      </label>
      <Select
        options={options}
        placeholder="Selecciona"
        name={name}
        id={name}
        onChange={onChange}
      />
    </div>
  )
}
