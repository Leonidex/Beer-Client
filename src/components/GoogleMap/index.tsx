import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { memo, useState } from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { Beer } from "../../types";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";

interface Props {
  center: {
    lat: number;
    lng: number;
  };
  item: Beer;
}

function GoogleMapComponent(props: Props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  });
  const [selected, setSelected] = useState<Props["center"] | null>(
    props.center,
  );

  return isLoaded ? (
    <Box sx={{ height: "100%", padding: 2 }}>
      <GoogleMap
        mapContainerStyle={{ height: "100%" }}
        center={props.center}
        zoom={10}
      >
        <Marker
          position={props.center}
          onClick={() => setSelected(props.center)}
        />
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
                {props.item?.address_1 ||
                  props.item?.address_2 ||
                  props.item?.address_3}
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
