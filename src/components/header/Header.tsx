import { Typography } from "@mui/material";

const Header = () => {
  return (
    <header>
      <Typography
        component="h1"
        color="textPrimary"
        fontSize="3rem"
        fontStyle="italic"
      >
        Cyrillic-Converter
      </Typography>
    </header>
  );
};

export default Header;
