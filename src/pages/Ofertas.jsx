import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getEppsOferta } from "../lib/epps.requests";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";


export const Ofertas = () => {
    const{id} = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
      setProducts([]);
      setIsLoading(true);

      getEppsOferta(id).then((res)=>{
        setIsLoading(false);
        setProducts(res);
      });
    
 
    }, [id])
    

  return (
    <div>
        <div className="container">
            <h5>{isLoading ? 'Cargando...': 'Listo'}</h5>
            <ItemListContainer products={products}/>
        </div>
        
    </div>
  )
}
