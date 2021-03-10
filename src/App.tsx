import { Col, Container, Row } from 'react-bootstrap';
import Routes from './routes/Routes';

function App() {
  return (
    <Container fluid>
				<Row>
					<Col className="p-0">
						<Routes />
					</Col>
				</Row>
			</Container>
  );
}

export default App;
