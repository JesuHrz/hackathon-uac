import { Fragment } from 'react'
import { Card, Container, Row, Col} from 'react-bootstrap'
import img from './zanahoria.jpg'

const Products = () => {

    const product = [
        {
            id: 1,
            name: 'Zanahoria',
            description: 'Lorem ipsum hopman tue',
            farm: 'Boyacá',
            stock: 300,
            pricePerPack: '45.000'
        },
        {
            id: 2,
            name: 'Yuca',
            description: 'Lorem ipsum hopman tue',
            farm: 'Santander',
            stock: 140,
            pricePerPack: '64.000'
        },
        {
            id: 3,
            name: 'Café',
            description: 'Lorem ipsum hopman tue',
            farm: 'Eje Cafetero',
            stock: 780,
            pricePerPack: '8.000'
        }
    ]

    return (
        <Fragment>
            <Container>
                <div className="cardWrapper mt-5">          
                    {
                        product.map((product, idx) => (
                            <Row className="mt-3">
                                <Col sm>
                                    <img src={img} className="product-img"></img>
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