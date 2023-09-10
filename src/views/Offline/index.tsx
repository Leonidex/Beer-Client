import { useEffect, useState } from "react";
import {
  Box,
  LinearProgress,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import SignalWifiBadIcon from "@mui/icons-material/SignalWifiBad";

const Offline = () => {
  const [isOnline, setIsOnline] = useState(true);
  const setOnline = () => setIsOnline(true);
  const setOffline = () => setIsOnline(false);

  useEffect(() => {
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);

    return () => {
      window.addEventListener("online", setOnline);
      window.addEventListener("offline", setOffline);
    };
  }, []);

  return !isOnline ? null : (
    <Paper square>
      <Tooltip title={"Please check your internet connection"}>
        <Box display="flex" flexDirection={"column"} width={"100%"}>
          <Stack direction={"row"} alignItems="center" paddingX={2}>
            <SignalWifiBadIcon />
            <Typography
              style={{ userSelect: "none" }}
              variant={"h6"}
              sx={{ padding: 2 }}
            >
              You are offline
            </Typography>
          </Stack>
          <LinearProgress />
        </Box>
      </Tooltip>
    </Paper>
  );
};

export default Offline;
