import styles from "./Footer.module.css";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      className={styles.container}
      sx={{
        color: (theme) => theme.palette.text.primary,
        borderTop: `solid gray 1px`,
      }}
    >
      <Container>
        <Typography className={styles.inner}>&#169; 2023 </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
