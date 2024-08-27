import React from "react";


type TProductCardProps = {
    name: string,
    imageUrl: string
}

const ProductCard: React.FC<TProductCardProps> = ({ name, imageUrl }) => {

    return(
        <div className="size-72 bg-cyan-200 flex flex-col rounded-3xl cursor-pointer">
            <h1 className="w-full h-1/5 text-center content-center	">{name}</h1>
            <img src={imageUrl} alt="product img" className="object-fit w-full h-4/5"/>
        </div>
    )
}

export default ProductCard