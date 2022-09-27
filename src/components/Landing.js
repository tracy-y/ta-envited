import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Container, Stack } from "@mui/system";
import LandingPage from "../static/LandingPage.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <Box
      sx={{
        background: "linear-gradient(0deg, #F6F2FF, #F6F2FF)",
        backgrounColor: "#FBFAFF",
      }}
    >
      <Container>
        <Stack direction="row" spacing={8} mt={8}>
          <Box item flex={2}>
            <Box
              sx={{
                position: "absolute",
                height: "440px",
                width: "775.69px",
                left: "calc(50% - 440px/2 - 366px)",
                top: " 100px",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundImage: `url(${LandingPage})`,
                  backgroundRepeat: "no-repeat",
                  // backgroundSize: "Cover",
                  backgroundPosition: " center ",
                  filter: "drop-shadow(0px 0px 46.8696px rgba(0, 0, 0, 0.05))",
                  borderRadius: " 35.1522px",
                }}
              ></Box>
            </Box>
          </Box>
          <Box
            item
            flex={3}
            color="#240D57"
            sx={{
              position: "absolute",
              width: " 573.91px",
              height: " 192px",
              left: "0px",
              top: "0px",
            }}
          >
            <Typography
              align="right"
              sx={{
                fontFamily: "'Helvetica'",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "64px",
                lineHeight: "64px",
              }}
            >
              Imagine if
              <b
                sx={{
                  position: "absolute",
                  width: "295px",
                  height: "74px",
                  left: " 279px",
                  top: " 59px",

                  fontFamily: "'Helvetica'",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "64px",
                  lineHeight: "74px",
                  /* identical to box height */

                  textAlign: "right",

                  background:
                    "linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)",
                  // -webkit-background-clip: "text",
                  // -webkit-text-fill-color: "transparent",
                  // backgroundClip: "text",
                  // text-fill-color: "transparent",
                }}
              >
                {" "}
                Snapchat{" "}
              </b>
              had events.
            </Typography>

            <Typography
              align="right"
              color="#4F4F4F"
              sx={{
                width: "521px",
                height: "56px",

                fonFamily: "'Helvetica'",
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: "24px",
                lineHeight: "28px",

                /* Inside auto layout */

                flex: "none",
                order: "1",
                flexGrow: "0",
              }}
            >
              Easily host and share events with your friends across any social
              media.
            </Typography>
            <Link to="/create" sx={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                align="center"
                sx={{
                  color: "#FFFFFF",
                  background:
                    "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
                  borderRadius: "10px",
                }}
              >
                Create my event
              </Button>
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
