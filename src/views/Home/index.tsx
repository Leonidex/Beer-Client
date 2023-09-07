import { useCallback, useEffect, useState } from "react";
import { fetchData } from "./utils";
import { Beer } from "../../types";
import { Button, Paper, Box, Typography, Divider } from "@mui/material";
import styles from "./Home.module.css";
import {
  favoritesAtom,
  removeAllFavoritesAtom,
} from "../../store/favoritesStore";
import { useAtomValue, useSetAtom } from "jotai";
import FavoriteItemsGrid from "../../components/Grid";

const Home = () => {
  const [beerList, setBeerList] = useState<Array<Beer>>([]);
  const favorites = useAtomValue(favoritesAtom);
  const removeAllFavorites = useSetAtom(removeAllFavoritesAtom);

  const handleReloadList = useCallback(fetchData.bind(this, setBeerList), []);

  // eslint-disable-next-line
  useEffect(handleReloadList, []);

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
                <Button
                  variant="contained"
                  onClick={handleReloadList}
                  size="small"
                >
                  Reload list
                </Button>
              </Box>
              <Divider />
              <FavoriteItemsGrid items={beerList} />
            </Box>
          </Paper>

          <Divider />
          <Paper square sx={{ flexGrow: 1 }}>
            <div className={styles.listContainer}>
              <div className={styles.listHeader}>
                <h3>Saved items</h3>
                <Button
                  variant="contained"
                  onClick={removeAllFavorites}
                  size="small"
                >
                  Remove all items
                </Button>
              </div>
              <FavoriteItemsGrid items={favorites} />
            </div>
          </Paper>
        </main>
      </section>
    </article>
  );
};

export default Home;
