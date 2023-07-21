import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Components/Components.css"

//Components
import SideBar from "./Components/SideBar";
import PartyCard from "./Components/PartyCard"
import ExportCard from "./Components/ExportCard"
import Buttons from "./Components/Buttons";
import MainTable from "./Components/Table";


function App() {

  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App">
      <div className="karigar-summary-page">
        <div className="master-background" />
        <div className="karigar-summary-page-child" />
        <img className="top-left-profile" alt="" src="/top-left-profile.svg" />

        <Buttons />
        <SideBar />
        <PartyCard />
        <ExportCard />
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch modal with grid
        </Button>
        <MainTable />
      </div>
    </div>
  );
}


export default App;