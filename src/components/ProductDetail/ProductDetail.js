import { useParams } from "react-router-dom";
import { products } from "../../product-list"
import "./ProductDetail.css";

const ProductDetail = () => {

  const { id } = useParams();
  const product = products[id];

  return (
    <div className="page">
      <h1>Detalle del Producto</h1>
      <div className="Producto">
        <div key={product.id} className="Card__producto">
          <img alt='imange product' className="Card__img" src={product.image}></img>
          <p className="Card__description">{product.name}</p>
          <p className="Card__description">{product.price}</p>
          <p className="Card__description">{product.description}</p>
          <button>Marcar como Favorito</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;