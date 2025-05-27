import Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image, Card, Badge, ListGroup } from 'react-bootstrap';


type Props ={
   pokemon: Pokemon;
}


export default function PokemonComponent(props : Props) {
    const {pokemon} = props;

    return (
    <Container className="mt-4">
        <Row className="justify-content-md-center mb-4">
            <Col md="auto"><h1>{pokemon.pokemonName}</h1></Col>
        </Row>

        <Row>
            <Col md={4}>
                <Image src={pokemon.mainImage} fluid rounded />
            </Col>

            <Col md={8}>
                <Card>
                    <Card.Header as="h5">Basic Information</Card.Header>
                    <ListGroup variant="flush">
                    <ListGroup.Item><strong>Number:</strong> #{pokemon.pokemonNumber}</ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Type:</strong>{" "}
                        {pokemon.pokemonType.map((type, index) => (
                        <Badge bg="primary" className="me-1" key={index}>{type}</Badge>
                        ))}
                    </ListGroup.Item>
                    <ListGroup.Item><strong>Evolution:</strong> {pokemon.evolution || "N/A"}</ListGroup.Item>
                    <ListGroup.Item><strong>Devolution:</strong> {pokemon.devolution || "N/A"}</ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Evolution Family:</strong>{" "}
                        {pokemon.evolutionFamily.map((name, i) => (
                        <Badge bg="secondary" className="me-1" key={i}>{name}</Badge>
                        ))}
                    </ListGroup.Item>
                </ListGroup>
            </Card>

            <Card className="mt-3">
                <Card.Header as="h5">Stats</Card.Header>
                    <ListGroup variant="flush">
                    <ListGroup.Item><strong>HP:</strong> ❤️ {pokemon.healthPoints}</ListGroup.Item>
                    <ListGroup.Item><strong>Attack:</strong> ⚔️ {pokemon.attack}</ListGroup.Item>
                    <ListGroup.Item><strong>Defense:</strong> 🛡️ {pokemon.defense}</ListGroup.Item>
                    <ListGroup.Item><strong>Speed:</strong> 💨 {pokemon.speed}</ListGroup.Item>
                </ListGroup>
            </Card>
            </Col>
        </Row>
    </Container>
   );
}
