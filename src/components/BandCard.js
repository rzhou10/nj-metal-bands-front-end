import { Card, Col } from "react-bootstrap";

function BandCard(props) {

  return (
    <Col sm={2} md={4}>
      <Card className="band-card">
        <Card.Body>
          <h2>{props.band.band_name}</h2>

          <div>Formed: {props.band.year_formation}</div>
          <div>Genre: {props.band.genre}</div>
          <div>From: {props.band.city}</div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BandCard;