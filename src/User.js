import React, { useContext, useEffect } from "react";

import { Link } from "react-navi";
import { Card } from "react-bootstrap";

function User({ _id, username }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{username}</Card.Title>
        <br></br>
      </Card.Body>
    </Card>
  );
}

export default React.memo(User);
