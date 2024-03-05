import React from 'react';
import { Button, Card } from 'react-bootstrap';

function NFTInfo() {
  return (
    <>
      <h2>보유 현황</h2>
      <div className='d-flex justify-content-between'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://ipfs.io/ipfs/QmeExEYoftvbYQvQWhCMdVgua1MARtyQbDUVVP99sUG8dC?filename=%EC%9D%B4%EB%B0%A9%EC%9A%B4_%EB%8F%84%EB%8B%B4%EC%82%BC%EB%B4%89.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://ipfs.io/ipfs/QmVbs2x4kemWiHc4k29jjbrMp7JgFszpM951givZ139JSh?filename=%EA%B5%AC%EB%8B%B4%EB%8F%84_%EC%9D%B4%EB%B0%A9%EC%9A%B4.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://ipfs.io/ipfs/QmSJ3rrxnExFMw1G4fh4iXihtT5GFPPpLfcTsotKvPkUNz?filename=%EC%82%AC%EC%9D%B8%EC%95%94%EB%8F%84-%EA%B9%80%ED%99%8D%EB%8F%84.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default NFTInfo;