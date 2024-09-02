import { FC } from "react";


type TProductCardProps = {
    name: string,
    imageUrl: string
}

const ProductCard: FC<TProductCardProps> = ({ name, imageUrl }) => {

    return(
        <div className="w-80 h-96 bg-[#FFD49A] flex flex-col cursor-pointer rounded-3xl">
            
            <img src={imageUrl} alt="product img" className="h-72"/>
            <div className="w-full content-center text-left pl-5 pt-5">
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="italic font-serif">100&#36;</p>
            </div>
            
        </div>
    )
}

export default ProductCard