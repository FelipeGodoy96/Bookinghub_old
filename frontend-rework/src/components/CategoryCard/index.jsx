import './styles.css'

export const CategoryCard = ({product}) => {
    return (
        <div className='category-card flex flex-col rounded-lg overflow-hidden drop-shadow-md shadow-lg'>
            <img className='w-full ' src={product.source} />
            <p className='m-4 font-semibold'>
                {product.categoria}
            </p>
            <p className='mx-4 mb-4 text-slate-500'>
                {product.quantidade + ' encontrado(s)'} 
            </p>
        </div>
    )
}