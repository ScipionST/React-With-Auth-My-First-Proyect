import './css/ButtonAdd.css'
import buttonAdd from '../../assets/buttonX.svg'
interface ButtonAddProps {
    className?: string
    type: "submit" | "reset" | "button"
    alText: string
    onClick?: () => void
}

const ButtonAdd: React.FC<ButtonAddProps> = ({ className, alText, type, onClick }) => {
    return (
        <button
            className={`button-add ${className || ''}`}
            type={type}
            onClick={onClick}
        >
            <img src={buttonAdd} alt={alText} />
        </button>
    )
}

export default ButtonAdd