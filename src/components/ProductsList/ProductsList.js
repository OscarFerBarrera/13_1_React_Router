import { products } from "../../product-list"
import './ProductsList.css';
import { NavLink } from "react-router-dom";

const Productslist = () => {

  return (
    <div className="page">
      <h1>Productos</h1>
      {
        <div className="Productos">
          {products.map((item) =>
            <div
              key={item.id}
              className="Card__product">
              <img
                alt='imange product'
                className="Card__img"
                src={item.image}>
              </img>
              <p
                className="Card__description">
                {item.name}
              </p>
              <nav className='Card__link'>
                <NavLink to={`/ProductDetail/${item.id}`}>Ver Productos</NavLink>
              </nav>
            </div>
          )}
        </div>
      }
    </div >
  );
}

export default Productslist;
