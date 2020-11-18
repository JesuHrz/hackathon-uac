import { Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Row, Col, Table, Card } from 'react-bootstrap'
import './style.css'

function ProductDetail(props) {

    const history = useHistory();
    const product = props.history.location.state;

    function checkoutHandler(e, product){
      history.push("/checkout", product)
    }

    return (
      <>
        <Container>
        <div className="cardWrapper mt-5">
          <Row className="mt-5">
            <Col lg={6} md={12} sm={12}>
              <img className="img-fluid rounded" 
                  src={product.img_url} 
                  alt="product_img"
                />
            </Col>
            <Col lg={6} md={12} sm={12}>
              <h2 className="product-detail-name">{product.name}</h2>
              <p>{product.description}</p>
              <Table>
                <tbody>
                  <tr>
                    <td>SKU: </td>
                    <td>{product.sku}</td>
                    <td>Freshness:</td>  
                    <td>{product.freshness}</td>
                  </tr>
                  <tr>
                    <td>Category:</td>
                    <td>{product.category}</td>
                    <td>Buy by:</td>  
                    <td>{product.buy_by}</td>
                  </tr>
                  <tr>
                    <td>Stock:</td>
                    <td>in stock</td>
                    <td>Delivery:</td>  
                    <td>{product.delivery} dia</td>
                  </tr>
                  <tr>
                    <td>Farm:</td>
                    <td>{product.farm}</td>
                    <td>Delivery area:</td>  
                    <td>{product.delivery_area}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col className="text-right">
              <Card.Title className="price">${product.price_per_pack}</Card.Title>
              <div className="purchase-form">
                    <input className="product-detail-quantity" type="number" defaultValue="0" name="stock"/>
                    <button className="btn-purchase" onClick={(e)=>{
                      checkoutHandler(e, product)
                    }} >Comprar</button> 
                  </div>
            </Col>
          </Row>
          </div>
        </Container>
      </>
    );
  }
  
  export default ProductDetail;