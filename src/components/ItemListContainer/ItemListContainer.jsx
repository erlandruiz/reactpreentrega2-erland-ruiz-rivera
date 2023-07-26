
import { Item } from '../Item/Item';
import './ItemListContainer.css';


//ItemListContainer con la props enviadas desde la APP.
export const ItemListContainer = ({products}) => {
  return (
    <div className='itemlistcontainer'>
      {products.map((product)=>(
        <Item
        key={product.id}
        id={product.id}
        img={product.img}
        category={product.category}
        title={product.title}
        price={product.price}
        oferta={product.oferta}
        />
      ))}
    </div>
  )
}
