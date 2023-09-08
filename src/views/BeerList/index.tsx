import { useEffect, useState } from "react";
import { Beer } from "../../types";
import { fetchData } from "./utils";
import ItemList from "../../components/List";

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
          <ItemList items={beerList} />
        </main>
      </section>
    </article>
  );
};

export default BeerList;
