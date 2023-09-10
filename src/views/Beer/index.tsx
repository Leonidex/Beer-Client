import { useEffect, useState } from "react";
import { Beer as IBeer } from "../../types";
import { fetchData } from "./utils";
import { useParams } from "react-router-dom";
import FavoriteStarButton from "../../components/FavoriteStar";
import {
  Box,
  Divider,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import styles from "./Beer.module.css";
import { BreweryLogos } from "../../components/BreweryLogo";

const Beer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<IBeer>();

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeer, id), [id]);

  return (
    <article>
      <section>
        <main>
          <Paper square sx={{ flexGrow: 1 }}>
            <Box
              className={styles.container}
              sx={{ flex: "0 0 100%", overflowX: "hidden", overflowY: "auto" }}
            >
              <Box className={styles.header}>
                {beer && BreweryLogos.get(beer?.brewery_type)}
                <Typography
                  variant={"h5"}
                  sx={{
                    fontWeight: 600,
                    letterSpacing: 1.5,
                    userSelect: "none",
                  }}
                  color="primary"
                >
                  &nbsp;{beer?.name}
                </Typography>
                <FavoriteStarButton item={beer as IBeer} />
              </Box>
              <Divider />
              <Stack direction={"column"}>
                <Grid container columns={4} xs={12} md={3} lg={2}>
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
                      <Typography>
                        {beer?.address_1 || beer?.address_2 || beer?.address_3}
                      </Typography>
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
                  </Grid>
                </Grid>
                <Box>google maps</Box>
              </Stack>
            </Box>
          </Paper>
        </main>
      </section>
    </article>
  );
};

export default Beer;
