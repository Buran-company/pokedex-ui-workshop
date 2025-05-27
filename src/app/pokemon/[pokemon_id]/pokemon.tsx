import { Fragment } from "react";
import Pokemon from "@/model/pokemon";
import {
  Card,
  Row,
  Col,
  Badge,
  ProgressBar,
  ListGroup,
  Container,
} from "react-bootstrap";
import styles from "./PokemonComponent.module.css"; // Custom CSS module

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
  Poison: "secondary",
  Dark: "dark",
  Dragon: "primary",
  Steel: "secondary",
  Fairy: "pink",
};

export default function PokemonComponent({ pokemon }: Props) {
  return (
    <Container className="mt-5">
      <Card className="shadow rounded-4 p-3">
        <Card.Body>
          <Row className="align-items-center">
            <Col
              xs={12}
              md={4}
              className="d-flex justify-content-center mb-3 mb-md-0"
            >
              <div className={styles.imageCircle}>
                <img
                  src={pokemon.mainImage}
                  alt={pokemon.pokemonName}
                  className={styles.image}
                />
              </div>
            </Col>
            <Col md={8}>
              <h2 className="display-5">{pokemon.pokemonName}</h2>
              <div className="mb-2">
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

          {/* Evolution */}
          <Row className="mt-4">
            <Col>
              <h5>Evolution Chain</h5>
              <p className="fs-6">
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
              <p className="text-muted">
                <strong>Devolution:</strong>{" "}
                {pokemon.devolution || <span>—</span>}
              </p>
              <p className="text-muted">
                <strong>Evolution:</strong>{" "}
                {pokemon.evolution || <span>—</span>}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
