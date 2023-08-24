import { ButtonComponent } from './styles'

export const Button = ({text, variant, width, fontSize, onClick}) => {
    return (
        <ButtonComponent variant={variant} width={width} fontSize={fontSize} onClick={onClick}>
            {text}
        </ButtonComponent>
    )
}