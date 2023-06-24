import './styles.css'

export const ProductCard = ({product}) => {
    return (
        <div className='product flex flex-col bg-white rounded-b-lg overflow-hidden drop-shadow-md shadow-lg'>
            <img src={product.source} className='w-full rounded-b-md' />
        </div>
    )
}