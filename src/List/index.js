import { Fragment } from 'react'
import { Card, Container, Row, Col} from 'react-bootstrap'
import Product from './products.js'

const Products = () => {
    return (
        <Fragment>
            <Container>
                <div className="cardWrapper mt-5">          
                    {
                        Product.map((product, idx) => (
                            <Row className="mt-3">
                                <Col sm>
                                    <img key={idx} src={ product.image } className="product-img"></img>
                                </Col>
                                <Col sm>
                                    <Card.Title key={idx} className="mt-3">{ product.name }</Card.Title>
                                    <Card.Subtitle key={idx} className="mb-2 text-muted">{ product.description }</Card.Subtitle>
                                    <Card.Text key={idx} className="mt-4">Farm: { product.farm }</Card.Text>
                                    <Card.Text key={idx}>Stock: { product.stock}</Card.Text>
                                </Col>
                                <Col sm>
                                    <Card.Title key={idx} className="mt-3">${ product.pricePerPack }</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Tax: 0.05%</Card.Subtitle>
                                    <button className="btn-product-detail">Product Detail</button>
                                </Col>
                            </Row>
                        ))
                    }
                    
                </div>
            </Container>
        </Fragment>
    );

}

export default Products;