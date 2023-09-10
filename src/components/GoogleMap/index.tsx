import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { memo, useEffect, useState } from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { Beer } from "../../types";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import { getGeocodingCoordinates } from "../../api";
import { getAddress } from "../../utils";

interface Props {
  item: Beer;
}

interface Coordinates {
  lat: number;
  lng: number;
}

const getCoordinates = (item: Beer, setCenter: (center: any) => void) => {
  (async () => {
    if (item?.longitude && item?.latitude) {
      setCenter({
        lat: parseFloat(item.latitude),
        lng: parseFloat(item.longitude),
      });
    } else {
      const address = getAddress(item);
      const res = await getGeocodingCoordinates(address as string);
      setCenter(res?.data?.results?.[0]?.geometry?.location);
    }
  })();
};

function GoogleMapComponent(props: Props) {
  const getGoogleMapsUrl = (center: Coordinates) =>
    `https://www.google.com/maps/?q=${center.lat},${center.lng}`;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  });

  const [center, setCenter] = useState<Coordinates>();

  useEffect(() => {
    if (isLoaded) {
      getCoordinates(props.item, setCenter);
    }
  }, [props.item, isLoaded]);

  const [selected, setSelected] = useState<Coordinates | null>();

  return isLoaded ? (
    <Box sx={{ height: "100%", padding: 2 }}>
      <GoogleMap
        mapContainerStyle={{ height: "100%" }}
        center={center}
        zoom={10}
      >
        {!!center && (
          <Marker position={center} onClick={() => setSelected(center)} />
        )}
        {selected && (
          <InfoWindow
            position={selected}
            onCloseClick={() => setSelected(null)}
          >
            <Stack direction={"column"} gap={1}>
              <Typography color={"black"} variant={"h6"}>
                {props.item?.name}
              </Typography>
              <Typography
                color={"black"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <RoomIcon color={"info"} />
                &nbsp;
                {getAddress(props.item)}
              </Typography>
              <Link
                href={`tel:${props.item?.phone}`}
                underline="hover"
                color="secondary"
              >
                <Typography
                  color={"blue"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PhoneIcon color={"info"} />
                  &nbsp;
                  {props.item?.phone}
                </Typography>
              </Link>
              <Link
                href={getGoogleMapsUrl(center as Coordinates)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography
                  color={"blue"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Open in Google Maps
                </Typography>
              </Link>
            </Stack>
          </InfoWindow>
        )}
      </GoogleMap>
    </Box>
  ) : (
    <></>
  );
}

export default memo(GoogleMapComponent);
