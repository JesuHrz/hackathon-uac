import { Fragment, useState, useEffect } from 'react'
import { Card, Container, Row, Col} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const Products = () => {

    const [product, setProduct] = useState([]);

    const history = useHistory();
    
    function handleClick(e, prod){
        history.push("/productDetail", prod);
    }

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
                console.log(resData.data)
                setProduct(resData.data)
            }else {
                const resData = await res.json();
                throw new Error(resData.error);
            }
        })
        .catch(err => {
            console.log(err);
        });
    },[])

    return (
        <Fragment>
            <Container>
                <div className="cardWrapper mt-5">          
                    {
                        product.map((product, idx) => (
                            <Row className="mt-3" key={idx}>
                                <Col sm>
                                    <img src={product.img_url} className="product-img" alt="product_imag"></img>
                                </Col>
                                <Col sm>
                                    <Card.Title className="mt-3">{ product.name }</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted descript">{ product.description }</Card.Subtitle>
                                    <Card.Text className="mt-4">Farm: { product.farm }</Card.Text>
                                    <Card.Text>Stock: { product.stock}</Card.Text>
                                </Col>
                                <Col sm>
                                    <Card.Title className="mt-3">${ product.price_per_pack }</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Tax: 0.05%</Card.Subtitle>
                                    <button className="btn-product-detail"
                                        onClick={e => {
                                            handleClick(e, product);
                                        }}
                                    >Product Detail</button>
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