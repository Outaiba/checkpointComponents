import logo from "./logo.svg";
import "./App.css";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <Card style={{ width: "18rem", marginLeft: 550, marginTop: 100 }}>
        <ProfilePhoto />
        <Card.Body>
          <Card.Title>
            <FullName />
          </Card.Title>
          <Card.Text>
            <Address />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
