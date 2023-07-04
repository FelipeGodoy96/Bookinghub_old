import { ButtonComponent } from './styles'

export const Button = ({text, variant, width, fontSize}) => {
    return (
        <ButtonComponent variant={variant} width={width} fontSize={fontSize}>
            {text}
        </ButtonComponent>
    )
}