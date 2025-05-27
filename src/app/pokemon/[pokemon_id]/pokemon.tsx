import { Fragment } from "react";
import Pokemon from "@/model/pokemon";
import styles from "./Pokemon.module.css";

type Props = {
  pokemon: Pokemon;
};

const typeColors: Record<string, string> = {
  Fire: "#fd7d24",
  Water: "#4592c4",
  Grass: "#9bcc50",
  Electric: "#eed535",
  Psychic: "#f366b9",
  Ice: "#51c4e7",
  Fairy: "#fdb9e9",
  Dark: "#707070",
  Ghost: "#7b62a3",
  Normal: "#a4acaf",
};

export default function PokemonComponent({ pokemon }: Props) {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.glow} />
            <div className={styles.imageWrapper}>
            <img
                src={pokemon.mainImage}
                alt={pokemon.pokemonName}
                className={styles.pokemonImage}
            />
            </div>
            <h1 className={styles.title}>{pokemon.pokemonName}</h1>
            <div className={styles.types}>
            {pokemon.pokemonType.map((type) => (
                <span
                key={type}
                className={styles.badge}
                style={{ backgroundColor: typeColors[type] || "#ccc" }}
                >
                {type}
                </span>
            ))}
            </div>

            <div className={styles.stats}>
            {["healthPoints", "attack", "defense", "speed"].map((key) => (
                <div key={key} className={styles.stat}>
                <span className={styles.label}>{key.toUpperCase()}</span>
                <div className={styles.bar}>
                    <div
                    className={styles.fill}
                    style={{
                        width: `${Math.min((pokemon as any)[key] / 2.5, 100)}%`,
                    }}
                    />
                </div>
                <span className={styles.value}>{(pokemon as any)[key]}</span>
                </div>
            ))}
            </div>

            <div className={styles.evolution}>
            <h3>Evolution Chain</h3>
            <div className={styles.evolutionRow}>
                {pokemon.evolutionFamily.map((evo, idx) => (
                <Fragment key={evo}>
                    <span className={styles.evoItem}>{evo}</span>
                    {idx < pokemon.evolutionFamily.length - 1 && (
                    <span className={styles.arrow}>➜</span>
                    )}
                </Fragment>
                ))}
            </div>
            </div>
        </div>
    </div>
  );
}