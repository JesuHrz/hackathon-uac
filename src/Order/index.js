import React from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    Card
} from 'react-bootstrap'
import Product from '../List/products'


function OrderSumary(props) {
    return (
        <Container className="border mt-5 col-md-6">
            <h1>Order Sumary</h1>
            <p> Price can change depending on shipping method and taxes of your </p>
            {/*
                <div className="cardWrapper mt-5">
                    {
                        Product.map((product, idx) => (
                            <Row className="mt-3">
                                <Col sm>
                                    <img key={idx} src={product.image} alt="" className="product-img"></img>
                                </Col>
                                <Col sm>
                                    <Card.Title key={idx} className="mt-3">{product.name}</Card.Title>
                                    <Card.Subtitle key={idx} className="mb-2 text-muted">{product.description}</Card.Subtitle>
                                    <Card.Text key={idx} className="mt-4">Farm: {product.farm}</Card.Text>
                                    <Card.Text key={idx}>Stock: {product.stock}</Card.Text>
                                </Col>
                                <Col sm>
                                    <Card.Title key={idx} className="mt-3">${product.pricePerPack}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Tax: 0.05%</Card.Subtitle>
                                    <button className="btn-product-detail">Product Detail</button>
                                </Col>
                            </Row>
                        ))
                    }
                </div>
                */ }
        </Container>

    );

}

export default OrderSumary;