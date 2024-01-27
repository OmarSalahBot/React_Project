import { Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@emotion/react";

const Links = () => {
  const Theme = useTheme();
  return (
    <div style={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          margin: "0px 5px",
          cursor: "pointer",
          // @ts-ignore
          ":hover": { bgcolor: Theme.palette.MyColor.main },
          padding: "10px",
          borderRadius:"6px"
        }}
      >
        <Typography variant="body1">Home</Typography>
        <ExpandMoreIcon />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          margin: "0px 5px",
          cursor: "pointer",
          // @ts-ignore
          ":hover": { bgcolor: Theme.palette.MyColor.main },
          padding: "10px",
          borderRadius:"6px"
        }}
      >
        <Typography variant="body1">Mega Menu</Typography>
        <ExpandMoreIcon />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          margin: "0px 5px",
          cursor: "pointer",
          // @ts-ignore
          ":hover": { bgcolor: Theme.palette.MyColor.main },
          padding: "10px",
          borderRadius:"6px"
        }}
      >
        <Typography variant="body1">Full Screen Menu</Typography>
        <ExpandMoreIcon />
      </Box>
      <Box
        sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        margin: "0px 5px",
        padding: "10px",
        cursor: "pointer",
          // @ts-ignore
          ":hover": { bgcolor: Theme.palette.MyColor.main },
          borderRadius:"6px"
        }}
      >
        <Typography variant="body1">Pages</Typography>
        <ExpandMoreIcon />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          margin: "0px 5px",
          cursor: "pointer",
          // @ts-ignore
          ":hover": { bgcolor: Theme.palette.MyColor.main },
          padding: "10px",
          borderRadius:"6px"
        }}
      >
        <Typography variant="body1">User Account</Typography>
        <ExpandMoreIcon />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          margin: "0px 5px",
          cursor: "pointer",
          // @ts-ignore
          ":hover": { bgcolor: Theme.palette.MyColor.main },
          padding: "10px",
          borderRadius:"6px"
        }}
      >
        <Typography variant="body1">Vendor Acount</Typography>
        <ExpandMoreIcon />
      </Box>
    </div>
  );
};

export default Links;
