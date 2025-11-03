import Typography from "@mui/material/Typography/Typography";
import Stack from "@mui/material/Stack/Stack";

const Footer = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography fontStyle="italic" my="6px">
        Vasin Oleksii
      </Typography>{" "}
      <Typography fontStyle="italic" my="6px">
        {new Date().getFullYear()} ©
      </Typography>{" "}
    </Stack>
  );
};

export default Footer;
