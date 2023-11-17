import { CardDesktop } from "./CardDesktop"
import { OldCardDesktop } from "./oldCardDesktop"

export const ProductCard = ({product}) => {
    return (
        <>
        {/* <CardDesktop /> */}
        <OldCardDesktop product={product} />
        </>
    )
}

export default ProductCard