import { ButtonComponent } from './styles'

export const Button = ({text, variant, width, fontSize, onClick, disabled}) => {
    return (
        <ButtonComponent variant={variant} width={width} fontSize={fontSize} onClick={onClick} disabled={disabled}>
           {text}
        </ButtonComponent>
    )
}