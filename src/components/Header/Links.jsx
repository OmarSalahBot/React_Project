import { Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@emotion/react";

const Links = ({title}) => {
  const Theme = useTheme();
  return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          cursor: "pointer",
          // @ts-ignore
          ":hover": { bgcolor: Theme.palette.MyColor.main },
          padding: "10px",
          borderRadius:"6px"
        }}
      >
        <Typography variant="body1">{title}</Typography>
        <ExpandMoreIcon />
      </Box>
  );
};

export default Links;
