import { useEffect, useState } from "react";
import { fetchData } from "./utils";
import { Beer } from "../../types";
import { Link as RouterLink } from "react-router-dom";
import { Button, Checkbox, Paper, TextField, Link } from "@mui/material";
import styles from "./Home.module.css";
import { favoritesAtom } from "../../store/favoritesStore";
import { useAtomValue } from "jotai";

const Home = () => {
  const [beerList, setBeerList] = useState<Array<Beer>>([]);
  const favorites = useAtomValue(favoritesAtom);

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeerList), []);

  return (
    <article>
      <section>
        <main>
          <Paper>
            <div className={styles.listContainer}>
              <div className={styles.listHeader}>
                <TextField label="Filter..." variant="outlined" />
                <Button variant="contained">Reload list</Button>
              </div>
              <ul className={styles.list}>
                {beerList.map((beer, index) => (
                  <li key={index.toString()}>
                    <Checkbox />
                    <Link component={RouterLink} to={`/beer/${beer.id}`}>
                      {beer.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Paper>

          <Paper>
            <div className={styles.listContainer}>
              <div className={styles.listHeader}>
                <h3>Saved items</h3>
                <Button variant="contained" size="small">
                  Remove all items
                </Button>
              </div>
              <ul className={styles.list}>
                {favorites.map((beer, index) => (
                  <li key={index.toString()}>
                    <Checkbox />
                    <Link component={RouterLink} to={`/beer/${beer.id}`}>
                      {beer.name}
                    </Link>
                  </li>
                ))}
                {!favorites.length && <p>No saved items</p>}
              </ul>
            </div>
          </Paper>
        </main>
      </section>
    </article>
  );
};

export default Home;
