import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getEpp } from "../lib/epps.requests";
import { ItemCount } from "../components/ItemCount/ItemCount";



export const Details = () => {

    const {id} = useParams();
    const [epp, setEpp] = useState({})

    useEffect(() => {
        //Colamos el simbolo mas para que lo compare numero a numero y no de elrror al comparlos con uns string
      getEpp(+id).then((res)=>{
        setEpp(res)
      });
    
     
    }, []);
    if(!Object.keys(epp).length) return

    
  return (
    <div className="container">
        <div className="detail">
            <div className="detail__img">
                <img src={epp.img} alt="" />

            </div>

            <div className="detail__info">
                <span className="detail__info-title">{epp.title}</span>
                <p className="detail__info-price">{epp.description}</p>
                <span className="detail__info-price">
                    ${(epp.price || 0).toLocaleString('es-PE',{
                        minimumFractionDigits:2,
                        maximumFractionDigits:2,
                    })}

                </span>
                <span className="detail__info-stock">En Stock hay {epp.stock}</span>

              {/* Simulamos que estamos comprando con alert */}
                <ItemCount stock={epp.stock} onAdd={()=>alert('Comprados')}/>
            </div>

        </div>

    </div>
  )
}
