
import {Box, Typography} from "@mui/material";
import { height, margin, padding } from "@mui/system";


function App() {
 

  return (
   <>
  {/* fondo */}
   <Box sx={{
    height:"100vh",
    width:"100vw",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    bgcolor:"#777"
  }}>
     {/* contenedor de consola completa */}
   <Box sx={{
     display:"Flex",
     flexDirection:"column",
     alignItems:"center",
     bgcolor:"#f0f0f0",
     height:"80%",
     width:"30%",
     borderRadius:"15px 15px 60px 15px",
     boxShadow:"5px 5px rgba(0,0,0,0.1)"

    }}>
      {/* contenedor de r1 y l1 */}
    <Box sx={{
      display:"flex",
      justifyContent:"space-between",
      borderBottom:"2px solid gray",
      width:"100%",
      height:"5%"
    }}>
      {/* l1 */}
      <Box sx={{
        height:"100%",
        width:"30px",
        borderRight:"2px solid gray"
      }}></Box>
      {/* r1 */}
      <Box sx={{
        height:"100%",
        width:"30px",
        borderLeft:"2px solid gray"
      }}></Box>
    </Box>
      {/* contenedor de consola */}
    <Box sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      marginTop:"20px",
      width:"100%",
      height:"90%",
    }}>
      {/* pantalla completa */}
      <Box sx={{
      display:"Flex",
      flexDirection:"column",
      alignItems:"center",
      bgcolor:"gray",
      height:"50%",
      width:"80%",
      borderRadius:"15px 15px 60px 15px",
     
      }}>
        {/* marca */}
        <Box sx={{
          width:"100%",
          height:"4%",
          display:"flex",
          alignItems:"center",
          paddingTop:"10px",
          paddingLeft:"15px"

        }}>
          {/* linea iszquierda */}
          <Box sx={{
            width:"30%",
            height:"80%",
            display:"flex",
            flexDirection:"column",
          }}>
            {/* morada */}
            <Box sx={{
              bgcolor:"#913295",
              width:"100%",
              height:"45%",
              marginBottom:"2px"

            }}></Box>
            {/* azul */}
            <Box sx={{
              bgcolor:"#2e3e9b",
              width:"100%",
              height:"45%"
            }}></Box>
          </Box>
          {/* titulo */}
         <Typography variant="body" sx={{
          fontSize:"10px",
          margin:"3px"
         }}>
         DOT MATRIX WHITH STEREO SOUND    
        </Typography>
          {/* linea derecha */}
          <Box sx={{
            width:"10%",
            height:"80%",
            display:"flex",
            flexDirection:"column",
          }}>
            {/* morada */}
            <Box sx={{
              bgcolor:"#913295",
              width:"100%",
              height:"45%",
              marginBottom:"2px"

            }}></Box>
            {/* azul */}
            <Box sx={{
              bgcolor:"#2e3e9b",
              width:"100%",
              height:"45%"
            }}></Box>
          </Box>
        </Box>
        {/* pantalla y bateria */}
        <Box sx={{
          display:"flex",
          width:"100%",
          height:"100%",
          
        }}>
          {/* bateria */}
          <Box sx={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"center",
          height:"100%",
          width:"20%",
         

        }}>
            {/* luz */}
            <Box sx={{
              borderRadius:"50%",
              bgcolor:"#c08d8d",
              width:"8.5px",
              height:"8.5px"
            }}></Box>
            {/* titulo */}
            <Typography variant="body" sx={{
              fontSize:"8px",
              marginTop:"5px"
            }}>BATTERY</Typography>
          </Box>
         {/*  pantallla */}
          <Box sx={{
            width:"65%",
            height:"80%",
            bgcolor:"#c4b668",
            marginLeft:"10px",
            marginTop:"15px"
          }}></Box>
        </Box>
      </Box>
      {/* controles */}
      <Box sx={{
        display:"flex",
        justifyContent:"space-around",
        width:"100%",
        height:"50%",
        

      }}>
        {/* creuseta */}
        <Box>
          {/* cuseta Horizontal */}
          <Box></Box>
          {/* cruzeta vertical */}
          <Box></Box>
          {/* eje central */}
          <Box></Box>
        </Box>
        {/* botones */}
        <Box>
          {/* boton A */}
          <Box></Box>
          {/* Boton B */}
          <Box></Box>
        </Box>
      </Box>
      {/* select start y ventilacion */}
      <Box>
        {/* select */}
        <Box></Box>
        {/* start */}
        <Box></Box>
        {/* ventilacion */}
        <Box>
          {/* ranura 1 */}
          <Box></Box>
          {/* ranura 2 */}
          <Box></Box>
          {/* ranura 3 */}
          <Box></Box>
          {/* ranura 4 */}
          <Box></Box>
         {/* ranura 5 */}
          <Box></Box>
         {/* ranura 6 */}
          <Box></Box>
        </Box>
      </Box>
    </Box>
   </Box>
    </Box>
   </>
  )
}

export default App
