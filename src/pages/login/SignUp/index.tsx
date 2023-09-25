import React from "react";
import { Box, Button, Typography, Checkbox } from "@mui/material";
import UncheckRectIcon from "../../../icons/uncheckRectIcon";
import CheckedCheckBox from "../../../icons/checkedCheckbox"

export default function SignUp() {
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
          padding: "35px",
          display: "flex",
          justifyContent: "center",
          //   alignItems: "center",
          flexDirection: "column",
          marginTop: "50px",
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
          />
          <Typography>Yes, I Understand.</Typography>
        </Box>
        <Box mt={3} display="flex" justifyContent="center">
        <Button
            variant="contained"
            color="secondary"
            sx={{
              fontWeight: 600,
              borderRadius: "10px",
              height: '55px',
              width: '35%'
          
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontWeight: 600,
              borderRadius: "10px",
              color: "white",
              marginLeft: "10px",
              height: '55px',
              width: '35%'
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
