import { useEffect, useState } from "react";
import { Beer as IBeer } from "../../types";
import { fetchData } from "./utils";
import { useParams } from "react-router-dom";
import { toggleFavoriteItemAtom } from "../../store/favoritesStore";
import { useSetAtom } from "jotai";

const Beer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<IBeer>();

  const toggleFavorite = useSetAtom(toggleFavoriteItemAtom);

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeer, id), [id]);

  return (
    <article>
      <section>
        <header>
          <h1>{beer?.name}</h1>
        </header>
        <main>
          <span>
            <b>Type: </b> {beer?.brewery_type}
          </span>
          <button onClick={() => toggleFavorite(beer as IBeer)}>
            Favorite
          </button>
        </main>
      </section>
    </article>
  );
};

export default Beer;
