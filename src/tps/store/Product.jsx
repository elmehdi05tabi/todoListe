import Rating from "./Rating";

export default function Product({products}) {
    return (
        <tr>
                    <td className="bg-secondary text-white">{products.id}</td>
                    <td className="bg-secondary text-white">{products.title}</td>
                    <td className="bg-secondary text-white">{products.price}</td>
                    <td className="bg-secondary text-white">{products.description.slice(0,100)}...</td>
                    <td className="bg-secondary text-white">{products.category}</td>
                    <td className="bg-secondary text-white"><img src={products.image}  alt={products.title} width={150}/></td>
                    <td className="bg-secondary text-white"><Rating rate={products.rating.rate} count={products.rating.count}/></td>
        </tr>
    )
}