import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";


function Buttons() {
  return (
      <ButtonGroup className="metal-toggle">
        <Button variant="secondary">Gold</Button>
        <Button variant="secondary">Silver</Button>
        <Button variant="white">Both</Button>
      </ButtonGroup>
  );
}

export default Buttons;