import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Product = (props) => {
    const {product} = props;
  return (
    <Container>
    <Card border="secondary m-auto" style={{width: '18rem', height: '22rem'}}>
        <Card.Img style={{height: '15rem'}}    variant="top" src={product.image} alt={product.alt}/>
        
        <Card.Body>
            <Card.Text className='text-center'>
                {product.description}
            </Card.Text>
            <Card.Text >Price: ${product.price.toFixed(2)}</Card.Text>
        </Card.Body>
    </Card>
    </Container>
  )
}

export default Product