import React from "react";
import Header from "./Header";
import BirdControl from "./BirdControl";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return (
    <React.Fragment>
      <Container>
        <Header />
        <BirdControl />
      </Container>
    </React.Fragment>
  );
}

export default App;