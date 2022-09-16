
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
    bgcolor:"#4D6D92"
  }}>
     {/* contenedor de consola completa */}
   <Box sx={{
     display:"Flex",
     flexDirection:"column",
     alignItems:"center",
     bgcolor:"#f0f0f0",
     height:"90%",
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
      height:"45%",
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
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        height:"30%",
       
        

      }}>
        {/* creuseta */}
        <Box sx={{
          width:"25%",
          height:"65%",
          marginLeft:"60px",
          marginTop:"10px",
          position:"relative",
          
         

        }}>
          {/* cuseta Horizontal */}
          <Box sx={{
              width:"85%",
              height:"30%",
              bgcolor:"#4d4d4d",
              position:"absolute",
              top:"35%",
              left:"9%"
              

          }}></Box>
          {/* cruzeta vertical */}
          <Box sx={{
              width:"30%",
              height:"85%",
              bgcolor:"#4d4d4d",
              position:"absolute",
              top:"9%",
              left:"35%"
              

          }}></Box>
          {/* eje central */}
          <Box sx={{
            position:"absolute",
            left:"35%",
            top:"33%",
            width:"33%",
            height:"34%",
            borderRadius:"50%",
            bgcolor:"#3c3d3c"
          }}></Box>
        </Box>
        {/* botones */}
        <Box sx={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          width:"30%",
          height:"40%",
          marginRight:"40px",
          marginTop:"10px",
          borderRadius:"30px ",
          transform: "rotate(-45deg)",   
          bgcolor:"#e1e1e1",
          
        }}>
          {/* boton B */}
          <Box sx={{
            width:"35%",
            height:"80%",
            borderRadius:"50%",
            bgcolor:"#b0417c",
            margin:"5px"
          }}></Box>
          {/* Boton A */}
          <Box sx={{
            width:"35%",
            height:"80%",
            borderRadius:"50%",
            bgcolor:"#b0417c",
            margin:"5px",
          }}></Box>
        </Box>
      </Box>
      {/* select start y ventilacion */}
      <Box sx={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        height:"25%",
      }}>
        {/* contenedor de select y start  */}
      <Box sx={{
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"center",
        width:"60%",
        height:"70%",
      }}>
        {/* contenedor de select */}
        <Box sx={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          width:"10%",
          height:"80%",
          borderRadius:"30px",
          transform: "rotate(55deg)",   
          bgcolor:"#e1e1e1",
          marginRight:"35px",
        }}>
          {/* select */}
          <Box sx={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          width:"85%",
          height:"85%",
          borderRadius:"30px",  
          bgcolor:"gray",

         
          
        }}></Box>
        </Box>
        {/* contenedor de start */}
        <Box sx={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          width:"10%",
          height:"80%",
          borderRadius:"30px",
          transform: "rotate(55deg)",   
          bgcolor:"#e1e1e1",

          
        }}>
          {/* start */}
          <Box sx={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          width:"85%",
          height:"85%",
          borderRadius:"30px",  
          bgcolor:"gray",
        }}></Box>
        </Box>
        </Box>
        {/* ventilacion */}
        <Box sx={{
          width:"15%",
          height:"75%",
          display:"flex",
          alignItems:"center",
          flexDirection:"column",
          transform: "rotate(48deg)",
          marginRight:"25px",
          marginTop:"30px"
        }}>
          {/* ranura 1 */}
          <Box sx={{
          display:"flex",
          width:"80%",
          height:"10%",
          borderRadius:"30px",
          bgcolor:"#e1e1e1",
          margin:"4px",

        }}></Box>
          {/* ranura 2 */}
          <Box sx={{
          display:"flex",
          width:"80%",
          height:"10%",
          borderRadius:"30px",
          bgcolor:"#e1e1e1",
          margin:"4px",


        }}></Box>
          {/* ranura 3 */}
          <Box sx={{
          display:"flex",
          width:"80%",
          height:"10%",
          borderRadius:"30px",
          bgcolor:"#e1e1e1",
          margin:"4px",


        }}></Box>
          {/* ranura 4 */}
          <Box sx={{
          display:"flex",
          width:"80%",
          height:"10%",
          borderRadius:"30px",
          bgcolor:"#e1e1e1",
          margin:"4px",


        }}></Box>
         {/* ranura 5 */}
          <Box sx={{
          display:"flex",
          width:"80%",
          height:"10%",
          borderRadius:"30px",
          bgcolor:"#e1e1e1",
          margin:"4px",

        }}></Box>
         {/* ranura 6 */}
          <Box sx={{
          display:"flex",
          width:"80%",
          height:"10%",
          borderRadius:"30px",
          bgcolor:"#e1e1e1",
          margin:"4px",

        }}></Box>
        </Box>
      </Box>
    </Box>
   </Box>
    </Box>
   </>
  )
}

export default App
