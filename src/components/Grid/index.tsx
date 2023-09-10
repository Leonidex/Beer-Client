import React from "react";
import { Button, Grid, Link, Tooltip } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Beer } from "../../types";
import FavoriteStarButton from "../FavoriteStar";
import { BreweryLogos } from "../BreweryLogo";

interface Props {
  items?: Beer[];
}

export default function FavoriteItemsGrid(props: Props) {
  return (
    <Grid
      container
      columns={{ xs: 4, sm: 4, md: 7, lg: 10 }}
      width={{ sm: "100%", md: "90%" }}
      alignSelf={"center"}
      gap={[0, 1]}
    >
      {props?.items?.map((beer, index) => (
        <Grid
          item
          key={`home-random-beer-list[${index}]`}
          xs={4}
          sm={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            borderRadius: "4px",
            border: "1px solid gray",
          }}
        >
          <Link
            component={RouterLink}
            to={`/beer/${beer.id}`}
            sx={{
              width: "100%",
              display: "block",
              overflow: "hidden",
            }}
            variant={"button"}
          >
            <Tooltip title={beer.name} enterDelay={1000} disableInteractive>
              <Button
                sx={{
                  width: "100%",
                  textTransform: "none",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: 1,
                }}
                variant={"outlined"}
                color={"secondary"}
                startIcon={BreweryLogos.get(beer.brewery_type)}
              >
                {beer.name}
              </Button>
            </Tooltip>
          </Link>
          <FavoriteStarButton item={beer} />
        </Grid>
      ))}
    </Grid>
  );
}
