import { useCallback, useEffect, useState } from "react";
import { fetchData } from "./utils";
import { Beer } from "../../types";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Checkbox,
  Paper,
  Link,
  Grid,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import styles from "./Home.module.css";
import { favoritesAtom } from "../../store/favoritesStore";
import { useAtomValue } from "jotai";

const Home = () => {
  const [beerList, setBeerList] = useState<Array<Beer>>([]);
  const favorites = useAtomValue(favoritesAtom);

  const refreshList = useCallback(fetchData.bind(this, setBeerList), []);

  // eslint-disable-next-line
  useEffect(refreshList, []);

  return (
    <article>
      <section>
        <main
          style={{
            justifyContent: "space-between",
          }}
        >
          <Paper square sx={{ flexGrow: 1 }}>
            <Box className={styles.listContainer} sx={{ flexGrow: 1 }}>
              <Box className={styles.listHeader}>
                <Typography
                  variant={"h5"}
                  sx={{ fontWeight: 600, letterSpacing: 1.5 }}
                  color="primary"
                >
                  A random list of beer breweries:
                </Typography>
                <Button variant="contained" onClick={refreshList}>
                  Reload list
                </Button>
              </Box>
              <Divider />
              <Grid
                container
                columns={{ xs: 4, sm: 4, md: 7, lg: 10 }}
                width={{ sm: "100%", md: "90%" }}
                alignSelf={"center"}
                justifyContent={"center"}
                gap={[0, 1]}
              >
                {beerList.map((beer, index) => (
                  <Grid
                    item
                    key={`home-random-beer-list[${index}]`}
                    xs={4}
                    sm={3}
                  >
                    <Link component={RouterLink} to={`/beer/${beer.id}`}>
                      <Button
                        sx={{ width: "100%", textTransform: "none" }}
                        variant={"outlined"}
                      >
                        {beer.name}
                      </Button>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>

          <Paper square>
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
