import React, { useContext, useEffect } from "react";

import { useNavigation } from "react-navi";
import { Card } from "react-bootstrap";

function User({ _id, username }) {
  const navigation = useNavigation();
  function navigate() {
    navigation.navigate(`/user/${_id}`);
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title onClick={navigate}>{username}</Card.Title>
        <br></br>
      </Card.Body>
    </Card>
  );
}

export default React.memo(User);
