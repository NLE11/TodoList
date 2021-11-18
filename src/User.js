import React, { useContext, useEffect } from "react";

import { Link } from "react-navi";
import { Card } from "react-bootstrap";

function User({ id, author }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{author}</Card.Title>
        <br></br>
      </Card.Body>
    </Card>
  );
}

export default React.memo(User);
