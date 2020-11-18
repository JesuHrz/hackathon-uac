import React from 'react';
import { useHistory } from 'react-router-dom'
import {
    Container,
    Card
} from 'react-bootstrap'
import "./index.css"


function OrderSumary(props) {

    const product = props.history.location.state;
    console.log(props.history.location.state);

    return (
        <Container className="mt-5 col-md-8">
            <h1 id="OrderTxt">Order Sumary</h1>
            <p> Price can change depending on shipping method and taxes of your </p>
            <div className="container border cont">
                <Container>
                    <div className="product-detail-container">
                        <div className="product-detail-picture-side">
                            <img className="product-detail-picture mt-5"
                                src={product.img_url}
                                alt="product_img"
                            />
                        </div>

                        <div className="product-detail-description mt-2">
                            <h2>{product.name}</h2>

                            <p>{product.description}</p>

                            <table class="tabla">
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
                                    <td>{product.delivery_area}</td>
                                </tr>
                            </table>
                            <div className="product-detail-push">
                                <span className="price"><h1 className="precio" >PRICE: ${product.price_per_pack}</h1>

                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Container>



    );

}

export default OrderSumary;