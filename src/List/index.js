import { Fragment, useState, useEffect } from 'react'
import { Card, Container, Row, Col} from 'react-bootstrap'

const Products = () => {

    const [product, setProduct] = useState([{id: 1,
        name: 'Zanahoria',
        description: 'Lorem ipsum hopman tue',
        farm: 'Boyacá',
        stock: 300,
        pricePerPack: '45.000'}]);

    useEffect( () => {

        fetch('https://portal-de-campesinos-back.herokuapp.com/api/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(async res => {
            if (res.status === 200){
                const resData = await res.json();
                console.log(resData)
                
                setProduct(resData.data)
            }else {
                const resData = await res.json();
                throw new Error(resData.error);
            }
        })
        .catch(err => {
            console.log(err);
        });
    })

    return (
        <Fragment>
            <Container>
                <div className="cardWrapper mt-5">          
                    {
                        product.map((product, idx) => (
                            <Row className="mt-3">
                                <Col sm>
                                    <img src={product.img_url} className="product-img"></img>
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