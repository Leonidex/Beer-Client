import { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";

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

  return isOnline ? null : (
    <header>
      <Tooltip title={"Please check your internet connection"}>
        <h5 style={{ userSelect: "none" }}>You are offline</h5>
      </Tooltip>
    </header>
  );
};

export default Offline;
