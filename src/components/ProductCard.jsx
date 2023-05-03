import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import sampleImage from "../images/SampleKitArray.jpg";

const ProductCard = (props) => {
  const SelectedProducts = props
  console.log(SelectedProducts.props);

  return (
   <>
    {SelectedProducts.props.map((product) => (
      <Card>
      <Card.Header>{product.Header}</Card.Header>
      <img  src={product.Image} />
      <Card.Body>
        <Card.Title>{product.Title}</Card.Title>
        <Card.Text>
        {product.Text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        
      )
    )}
   </>
  )
}

export default ProductCard