import './styles.css'

export const CategoryCard = ({category}) => {
    return (
        <div className='category-card flex flex-col rounded-lg overflow-hidden drop-shadow-md shadow-lg'>
            <img className='w-full ' src={category.source} />
            <p className='m-4 font-semibold'>
                {category.categoria}
            </p>
            <p className='mx-4 mb-4 text-slate-500'>
                {category.quantidade + ' encontrado(s)'} 
            </p>
        </div>
    )
}