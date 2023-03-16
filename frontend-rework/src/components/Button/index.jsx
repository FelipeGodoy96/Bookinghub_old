import { ButtonComponent } from './styles'

export const Button = ({text, variant, width}) => {
    return (
        <ButtonComponent variant={variant} width={width}>
            {text}
        </ButtonComponent>
    )
}