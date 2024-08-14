import './css/Input.css'

interface InputProps {
  className?: string
  placeholder?: string
  type: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
}

const Input: React.FC<InputProps> = ({ className, placeholder, type, value, onChange, onClick }) => {
  return (
    <>
      <input
        className={`input-comp ${className || ''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
    </>
  )
}

export default Input