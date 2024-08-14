import './css/ButtonSubmit.css'

interface ButtonSubmitProps {
    className?: string
    type: 'button' | 'submit' | 'reset'
    title: string
    text?: string
    onClick: () => void
    img?: string
    alt?: string
}

const ButtonSubmit: React.FC<ButtonSubmitProps> = ({ className, type, title, text, onClick, img, alt }) => {

  return (
    <>
      <button
        className={`button-comp  ${className || ''}`}
        type={type}
        title={title}
        onClick={onClick}
      >{text}
        {img && <img src={img} alt={alt} />}
      </button>
    </>
  )
}

export default ButtonSubmit