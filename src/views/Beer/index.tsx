import { useEffect, useState } from "react";
import { Beer as IBeer } from "../../types";
import { fetchData } from "./utils";
import { useParams } from "react-router-dom";
import FavoriteStarButton from "../../components/FavoriteStar";
import {
  Box,
  Divider,
  Fade,
  Grid,
  Link,
  Paper,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import styles from "./Beer.module.css";
import { BreweryLogos } from "../../components/BreweryLogo";
import GoogleMapComponent from "../../components/GoogleMap";
import { getAddress } from "../../utils";

const Beer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<IBeer>();

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeer, id), [id]);

  return (
    <article>
      <section>
        <main>
          {beer ? (
            <Fade in={!!beer}>
              <Paper square sx={{ flexGrow: 1 }}>
                <Box className={styles.container}>
                  <Box className={styles.header}>
                    {BreweryLogos.get(beer?.brewery_type as string)}
                    <Tooltip
                      title={beer?.name}
                      enterDelay={1000}
                      disableInteractive
                    >
                      <Typography
                        variant={"h5"}
                        sx={{
                          fontWeight: 600,
                          letterSpacing: 1.5,
                          userSelect: "none",
                        }}
                        color="primary"
                        noWrap
                      >
                        &nbsp;{beer?.name}
                      </Typography>
                    </Tooltip>
                    <FavoriteStarButton item={beer as IBeer} />
                  </Box>
                  <Divider />
                  <Stack
                    direction={"column"}
                    spacing={2}
                    sx={{ flexGrow: 1 }}
                    height={"100%"}
                  >
                    <Paper square sx={{ padding: 2 }}>
                      <Box
                        width={{ xs: "100%", sm: "75%", md: "50%", lg: "33%" }}
                      >
                        <Grid container item columns={2} spacing={1}>
                          <Grid item xs={1}>
                            <Typography>Type:</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography>{beer?.brewery_type}</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography>Address:</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography>{getAddress(beer)}</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography>City:</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography>{beer?.city}</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography>State:</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography>{beer?.state}</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography>Postal Code:</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography>{beer?.postal_code}</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography>Country:</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography>{beer?.country}</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography>Phone:</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Link
                              href={`tel:${beer?.phone}`}
                              underline="hover"
                              color="secondary"
                            >
                              <Typography>{beer?.phone}</Typography>
                            </Link>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography>Website:</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Link
                              href={`tel:${beer?.website_url}`}
                              underline="hover"
                              color="secondary"
                            >
                              <Typography>{beer?.website_url}</Typography>
                            </Link>
                          </Grid>
                        </Grid>
                      </Box>
                    </Paper>
                    <Divider />
                    <Box
                      sx={{
                        height: "100%",
                        flexGrow: 1,
                        flex: "1",
                      }}
                    >
                      <GoogleMapComponent item={beer as IBeer} />
                    </Box>
                  </Stack>
                </Box>
              </Paper>
            </Fade>
          ) : (
            <Paper square sx={{ flexGrow: 1 }}>
              <Box className={styles.container}>
                <Box className={styles.header}>
                  <Skeleton variant={"rounded"} sx={{ width: "100%" }} />
                </Box>
                <Stack
                  direction={"column"}
                  spacing={2}
                  sx={{ flexGrow: 1 }}
                  height={"100%"}
                >
                  <Skeleton
                    variant={"rounded"}
                    sx={{ flexGrow: 1 }}
                    height={"100%"}
                    width={"100%"}
                  />

                  <Divider />
                  <Skeleton
                    variant={"rounded"}
                    sx={{ width: "100%", height: "100%", flexGrow: 1 }}
                  />
                </Stack>
              </Box>
            </Paper>
          )}
        </main>
      </section>
    </article>
  );
};

export default Beer;
