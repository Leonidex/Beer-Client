import { useCallback, useEffect, useState } from "react";
import { fetchData } from "./utils";
import { Beer } from "../../types";
import {
  Button,
  Paper,
  Box,
  Typography,
  Divider,
  Skeleton,
  Fade,
  Stack,
} from "@mui/material";
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
          <Fade in={!!beerList}>
            <Stack direction={"column"} sx={{ height: "100%" }}>
              <Paper square sx={{ flexGrow: 1 }}>
                <Box
                  className={styles.listContainer}
                  sx={{
                    // flex: "0 0 60%",
                    overflowX: "hidden",
                    // overflowY: "auto",
                    height: "100%",
                  }}
                >
                  <Box className={styles.listHeader}>
                    <Typography
                      variant={"h5"}
                      sx={{
                        fontWeight: 600,
                        letterSpacing: 1.5,
                        userSelect: "none",
                      }}
                      color="primary"
                    >
                      A random list of beer breweries:
                    </Typography>
                    <Button
                      variant={"outlined"}
                      onClick={handleReloadList}
                      size="small"
                    >
                      Reload list
                    </Button>
                  </Box>
                  <Divider />
                  {beerList?.length ? (
                    <FavoriteItemsGrid items={beerList} />
                  ) : (
                    <Skeleton
                      variant={"rounded"}
                      width={"100%"}
                      height={"100%"}
                    />
                  )}
                </Box>
              </Paper>

              <Divider />
              <Paper
                square
                sx={{ flex: "0 0 40%", overflowX: "hidden", overflowY: "auto" }}
              >
                <Box className={styles.listContainer}>
                  <Box className={styles.listHeader}>
                    <Typography
                      variant={"h5"}
                      sx={{ fontWeight: 600, letterSpacing: 1.5 }}
                      color="primary"
                    >
                      Saved items:
                    </Typography>

                    <Button
                      variant={"outlined"}
                      onClick={removeAllFavorites}
                      size="small"
                      disabled={!favorites?.length}
                    >
                      Remove all items
                    </Button>
                  </Box>
                  <Divider />
                  <FavoriteItemsGrid items={favorites} />
                </Box>
              </Paper>
            </Stack>
          </Fade>
        </main>
      </section>
    </article>
  );
};

export default Home;
