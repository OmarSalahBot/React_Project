import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollTopButton = () => {
    const ScrollButton = document.querySelector(".ScrollButton")
    window.addEventListener('scroll',()=>{
        if(window.scrollY > 70){
            ScrollButton.classList.add("show");
        }
        else{
            ScrollButton.classList.remove("show");
        }
    });
    function handleClick(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <div  className={"ScrollButton"}onClick={handleClick}
      style={{
        position: "fixed",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        right:"-100px",
        bottom:"30px",
        backgroundColor:"#43A6C6",
        borderRadius:"50%",
        transition:"all 0.4s"
      }}
    > <ArrowUpwardIcon/> </div>
  );
};

export default ScrollTopButton;
