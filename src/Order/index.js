import React from 'react';
import { useHistory } from 'react-router-dom'
import {
    Container,
    Card,
    Row,
    Col,
    Table
} from 'react-bootstrap'
import "./index.css"


function OrderSumary(props) {

    const product = props.history.location.state;
    console.log(props.history.location.state);

    return (
        // <div className="container border cont">
            <Container>
                <div className="summary-header">
                    <h1 id="orderTxt">Order Sumary</h1>
                    <p id="orderSubTxt"> Price can change depending on shipping method and taxes of your </p>
                </div>
                <div className="cardWrapper mt-4">
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
                                        <td>Delivery:</td>  
                                        <td>{product.delivery} dia</td>
                                        <td>Farm:</td>
                                        <td>{product.farm}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-right">
                            <Card.Title className="price">${product.price_per_pack}</Card.Title>
                        </Col>
                    </Row>
                </div>
            </Container>



    );

}

export default OrderSumary;