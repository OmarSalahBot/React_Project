import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const IconSection = () => {
  return (
    <Container sx={{marginBottom: "100px" }}>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "5px",
        }}
      >
        <MyBox
          Icon={<ElectricBoltIcon sx={{ fontSize: "40px" }} />}
          head={"Fast Delivery"}
          text={"Start From $10"}
        />
        <MyBox
          Icon={<WorkspacePremiumIcon sx={{ fontSize: "40px" }} />}
          head={"Money Guarantee"}
          text={"7 Days Back"}
        />
        <MyBox
          Icon={<AccessAlarmIcon sx={{ fontSize: "40px" }} />}
          head={"365 Days"}
          text={"For Free return"}
        />
        <MyBox
          Icon={<CreditScoreIcon sx={{ fontSize: "40px" }} />}
          head={"Payment"}
          text={"Secure System"}
        />
      </Stack>
    </Container>
  );
};

export default IconSection;

const MyBox = ({ Icon, head, text }) => {
    const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        minWidth: "250px",
        flexGrow:'1',
        // [theme.breakpoints.down('sm')]: {
        //     backgroundColor: 'blue',
        //   },
        // [theme.breakpoints.between('sm',"md")]: {
        //     backgroundColor: 'red',
        //   },
        // @ts-ignore
        bgcolor: theme.palette.BackGroundColor.main,
        padding:"20px 0px"
      }}
    >
      {Icon}
      <Typography sx={{ marginLeft: "20px" }}>
        <h1 style={{ fontSize: "19px" }}>{head}</h1>
        <p>{text}</p>
      </Typography>
    </Box>
  );
};
