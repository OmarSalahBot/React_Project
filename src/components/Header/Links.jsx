import { Box, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Links = () => {
    return (
        <div style={{display:"flex"}}>
            <Box sx={{display:"flex",alignItems:"center",flexDirection:"row",margin:"0px 25px"}}>
                <Typography variant="body1">
                    Home
                </Typography>
                <ExpandMoreIcon />
            </Box>
            <Box sx={{display:"flex",alignItems:"center",flexDirection:"row",margin:"0px 25px"}}>
                <Typography variant="body1">
                    Home
                </Typography>
                <ExpandMoreIcon />
            </Box>
            <Box sx={{display:"flex",alignItems:"center",flexDirection:"row",margin:"0px 25px"}}>
                <Typography variant="body1">
                    Home
                </Typography>
                <ExpandMoreIcon />
            </Box>
            <Box sx={{display:"flex",alignItems:"center",flexDirection:"row",margin:"0px 25px"}}>
                <Typography variant="body1">
                    Home
                </Typography>
                <ExpandMoreIcon />
            </Box>
        </div>
    );
}

export default Links;
