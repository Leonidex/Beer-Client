import { useEffect, useState } from "react";
import { Beer } from "../../types";
import { fetchData } from "./utils";
import TSItemList from "../../components/List/tanstack-index";

const BeerList = () => {
  const [beerList, setBeerList] = useState<Array<Beer>>([]);

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeerList), []);

  return (
    <article>
      <section>
        <header>
          <h1>BeerList page</h1>
        </header>
        <main>
          <TSItemList items={beerList} />
        </main>
      </section>
    </article>
  );
};

export default BeerList;
