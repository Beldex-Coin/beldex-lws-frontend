import React, {useState} from "react";
import { Box, Button, Typography, Checkbox,useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UncheckRectIcon from "../../../icons/uncheckRectIcon";
import CheckedCheckBox from "../../../icons/checkedCheckbox"
import theme from "../../../theme";

export default function SignUp() {
  const [checkAgreeTerm, setAgreeTerm] = useState(false);
 const isMobileMode = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

 const agreeTerm = (e: any) => {
  setAgreeTerm(e.target.checked)
 }
  return (
    <Box
      className="SignUp"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#2B2B3C",
          width: "694px",
          height: "100%",
          padding:isMobileMode?'15px': "35px",
          display: "flex",
          justifyContent: "center",
          //   alignItems: "center",
          flexDirection: "column",
          marginTop:isMobileMode?"20px":"50px",
          borderRadius: "20px",
        }}
      >
        <Typography
          textAlign="center"
          sx={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Create New Wallet
        </Typography>

        <Box
          mt={4}
          sx={{
            display: "flex",
          }}
        >
          <Box>
            <Typography
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#19AD1C",
                borderRadius: "20px",
                marginTop: "6px",
                marginRight: "15px",
              }}
            ></Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 700 }}>Creating a Wallet</Typography>
            <Typography sx={{ color: "#AFAFBE", fontWeight: 400 }}>
              Each Beldex wallet gets a unique word-sequence called a mnemonic.
            </Typography>
          </Box>
        </Box>

        <Box
          mt={2}
          sx={{
            display: "flex",
          }}
        >
          <Box>
            <Typography
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#19AD1C",
                borderRadius: "20px",
                marginTop: "6px",
                marginRight: "15px",
              }}
            ></Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 700 }}>
              Write down your mnemonic
            </Typography>
            <Typography sx={{ color: "#AFAFBE", fontWeight: 400 }}>
              It’s the only way to regain access, and it’s never sent to the
              server!
            </Typography>
          </Box>
        </Box>

        <Box
          mt={2}
          sx={{
            display: "flex",
          }}
        >
          <Box>
            <Typography
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#19AD1C",
                borderRadius: "20px",
                marginTop: "6px",
                marginRight: "15px",
              }}
            ></Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 700 }}>
              Keep it secret and safe
            </Typography>
            <Typography sx={{ color: "#AFAFBE", fontWeight: 400 }}>
              If you save it to an insecure location, copy, screenshot, or email
              it, it may be viewable by other apps.
            </Typography>
          </Box>
        </Box>

        <Box
          mt={2}
          sx={{
            display: "flex",
          }}
        >
          <Box>
            <Typography
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#19AD1C",
                borderRadius: "20px",
                marginTop: "6px",
                marginRight: "15px",
              }}
            ></Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 700 }}>
              Use it like an actual wallet
            </Typography>
            <Typography sx={{ color: "#AFAFBE", fontWeight: 400 }}>
              For large amounts and better privacy, make a cold-storage wallet
              or set your own server in Preferences.
            </Typography>
          </Box>
        </Box>

        <Box
          mt={2}
          sx={{
            display: "flex",
          }}
        >
          <Box>
            <Typography
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#19AD1C",
                borderRadius: "20px",
                marginTop: "6px",
                marginRight: "15px",
              }}
            ></Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 700 }}>
              Web browsers are insecure
            </Typography>
            <Typography sx={{ color: "#AFAFBE", fontWeight: 400 }}>
              The convenience of MyBeldex for web comes at a security cost.
            </Typography>
          </Box>
        </Box>
        <Box
          mt={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Checkbox
            sx={{
              borderColor: "red",
              "&.Mui-checked": {
                color: 'pink[600]',
              },
            }}
            inputProps={{
              "aria-label": "I Understand.",
            }}
            icon={<UncheckRectIcon styles={{fontSize:'1.5rem'}}/>}
            checkedIcon={<CheckedCheckBox styles={{fontSize:'1.5rem'}}/>}
            onClick={agreeTerm}
            value={checkAgreeTerm}
          />
          <Typography>Yes, I Understand.</Typography>
        </Box>
        <Box mt={5} 
        width={'100%'}
        display= "flex"
         justifyContent= "center"
         flexDirection={'row'}
         flexWrap={'wrap'}
         alignContent='center'

         >
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/')}
            sx={{
              width: isMobileMode?"70%":'200px',
              borderRadius: isMobileMode ? "40px" : "10px",
              fontWeight: 600,
              height: "50px",
            }}
          >Cancel
             
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={!checkAgreeTerm}
            onClick={() => navigate('/displaySeed')}
            sx={{
              fontWeight: 600,
              // borderRadius: "10px",
              color: "white",
              height: "50px",
              marginLeft:isMobileMode? '0':"10px",
              marginTop:isMobileMode?'10px':'0',
              width: isMobileMode?"70%":'200px',
              borderRadius: isMobileMode ? "40px" : "10px",
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
