import { Box, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductDetails = () => {
    return (
        <Box sx={{display:'flex' ,justifyContent:"start"}}>
            <Box sx={{display:"flex",alignItems:"center"}}>
                <img  style={{width:"300px"}} src="src\Images\t-shirts-products\1\final.png" alt="" />
            </Box>
            <Box sx={{display:'flex',flexDirection:"column",justifyContent:"center",marginLeft:"20px"}}>
                <Typography sx={{fontSize:"30px",fontWeight:"bold"}}>Womens Fashion</Typography>
                <Typography sx={{fontSize:"26px",color:"#fd5050",fontWeight:"bold"}} >$12.40</Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque possimus  Lorem ipsum dolor sit amet consectetur vel sapiente</Typography>
                <Box sx={{display:"flex",gap:"10px",marginTop:"10px"}}>
                {[`src/Images/t-shirts-products/more/1 (1).jpg`,
                "src/Images/t-shirts-products/more/1 (2).jpg",
                "src/Images/t-shirts-products/more/1 (3).jpg"].map((item,index)=>{
                    return(
                        <img key={index} src={item} style={{width:"50px"}} alt="" />
                    );
                })}
                </Box>
                <a style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"7px",borderRadius:"4px",cursor:"pointer",backgroundColor:"#145DA0", width:"fit-content",marginTop:"30px",color:"white"}}><AddShoppingCartIcon sx={{fontSize:"20px",marginRight:"3px"}}/>Buy Now </a>
            </Box>
        </Box>
    );
}

export default ProductDetails;
