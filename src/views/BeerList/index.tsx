import { useEffect, useState } from "react";
import { Beer } from "../../types";
import { fetchData } from "./utils";
import ItemList from "../../components/List";
import { Box, Fade, Paper } from "@mui/material";

const BeerList = () => {
  const [beerList, setBeerList] = useState<Array<Beer>>([]);

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeerList), []);

  return (
    <article>
      <section>
        <main
          style={{
            justifyContent: "space-between",
          }}
        >
          <Fade in={!!beerList}>
            <Paper square sx={{ flexGrow: 1 }}>
              <ItemList items={beerList} />
            </Paper>
          </Fade>
        </main>
      </section>
    </article>
  );
};

export default BeerList;
