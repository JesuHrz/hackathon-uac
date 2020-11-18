import { Container } from 'react-bootstrap'
import './style.css'

function ProductDetail(props) {

  const product = props.product;

    return (
      <>
        <Container>
          <div className="product-detail-container">
            <div className="product-detail-picture-side">
              <img className="product-detail-picture" 
                src={product.img_url} 
                alt="product_img"
              />
            </div>

            <div className="product-detail-description">
                <h2>{product.name}</h2>

                <p>{product.description}</p>

                <table>
                  <tr>
                    <td className="table-title">SKU: </td>
                    <td>{product.sku}</td>
                    <td className="table-title">Freshness:</td>
                    <td>{product.freshness} dia</td>
                  </tr>

                  <tr>
                    <td className="table-title">Category:</td>
                    <td>{product.category}</td>
                    <td className="table-title">Buy by:</td>
                    <td>{product.buy_by}</td>
                  </tr>

                  <tr>
                    <td className="table-title">Stock:</td>
                    <td>in stock</td>
                    <td className="table-title">Delivery:</td>
                    <td>{product.delivery} dia</td>
                  </tr>

                  <tr>
                    <td className="table-title">Farm:</td>
                    <td>{product.farm}</td>
                    <td className="table-title">Delivery area:</td>
                    <td>{product.delivery_Area}</td>
                  </tr>
                </table>

                <div className="product-detail-push">
                  <span className="price">${product.price}</span> 
                  <div className="purchase-form">
                    <input className="product-detail-quantity" type="number" name="quantity"/>
                    <button className="btn-purchase">+ Add to cart</button> 
                  </div>
                </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
  
  export default ProductDetail;