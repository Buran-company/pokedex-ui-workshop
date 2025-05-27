import { Fragment } from "react";
import Pokemon from "@/model/pokemon";
import {
  Card,
  Row,
  Col,
  Image,
  Badge,
  ProgressBar,
  ListGroup,
  Container,
} from "react-bootstrap";

type Props = {
  pokemon: Pokemon;
};

const typeColors: Record<string, string> = {
  Fire: "danger",
  Water: "primary",
  Grass: "success",
  Electric: "warning",
  Psychic: "info",
  Ice: "info",
  Ground: "secondary",
  Rock: "dark",
  Flying: "primary",
  Bug: "success",
  Normal: "secondary",
  Fighting: "danger",
  Ghost: "dark",
  Poison: "purple",
  Dark: "dark",
  Dragon: "indigo",
  Steel: "secondary",
  Fairy: "pink",
};

export default function PokemonComponent({ pokemon }: Props) {
  return (
    <Container className="mt-4">
      <Card className="shadow-lg rounded-4">
        <Card.Body>
          {/* Header and Image */}
          <Row className="align-items-center">
            <Col md={4} className="text-center mb-3 mb-md-0">
              <Image
                src={pokemon.mainImage}
                fluid
                roundedCircle
                style={{ maxHeight: "200px" }}
              />
            </Col>
            <Col md={8}>
              <h2 className="display-5">{pokemon.pokemonName}</h2>
              <div>
                {pokemon.pokemonType.map((type) => (
                  <Badge
                    key={type}
                    bg={typeColors[type] || "secondary"}
                    className="me-2"
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </Col>
          </Row>

          {/* Stats Section */}
          <ListGroup variant="flush" className="mt-4">
            {[
              { label: "HP", value: pokemon.healthPoints, variant: "success" },
              { label: "Attack", value: pokemon.attack, variant: "danger" },
              { label: "Defense", value: pokemon.defense, variant: "info" },
              { label: "Speed", value: pokemon.speed, variant: "warning" },
            ].map((stat) => (
              <ListGroup.Item key={stat.label}>
                <strong>{stat.label}:</strong>
                <ProgressBar
                  now={stat.value}
                  max={255}
                  label={`${stat.value}`}
                  className="mt-1"
                  variant={stat.variant}
                  animated
                />
              </ListGroup.Item>
            ))}
          </ListGroup>

          {/* Evolution Section */}
          <Row className="mt-4">
            <Col>
              <h5>Evolution Chain</h5>
              <p>
                {pokemon.evolutionFamily.map((name, idx) => (
                  <Fragment key={name}>
                    <Badge bg="secondary" className="me-1">
                      {name}
                    </Badge>
                    {idx < pokemon.evolutionFamily.length - 1 && (
                      <span className="me-1">➝</span>
                    )}
                  </Fragment>
                ))}
              </p>
              <p>
                <strong>Previous Evolution:</strong> {pokemon.devolution || "—"}
              </p>
              <p>
                <strong>Next Evolution:</strong> {pokemon.evolution || "—"}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
