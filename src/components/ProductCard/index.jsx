import { useState } from "react";
import { ProductCardDesktop } from "./ProductCardDesktop"
import { ProductCardMobile } from "./ProductCardMobile";

export const ProductCard = ({product}) => {
    const [expandedText, setExpandedText] = useState(false);

    const handleSeeMoreText = (id) => {
        setExpandedText((prevState) => ({ ...prevState, [id]: !prevState[id] }));
      };
    return (
        <>
        {/* <ProductCardDesktop 
        key={product.id}
        product={product} 
        expandedText={expandedText[product.id] || false} 
        handleSeeMoreText={() => handleSeeMoreText(product.id)} /> */}
        <ProductCardMobile
        key={product.id}
        product={product}
        expandedText={expandedText[product.id] || false}
        handleSeeMoreText={() => handleSeeMoreText(product.id)} />
        </>
    )
}

export default ProductCard