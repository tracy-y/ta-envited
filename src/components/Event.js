import React from "react";
import { Link } from "react-router-dom";
import Birthdaycake from "../static/Birthdaycake.png";
import { Box, Typography, Button } from "@mui/material";
import { Container, Stack } from "@mui/system";

const ContactCard = (props) => {
  // const deleteContact = (firebaseKey, contactValue) => {
  //   removeContactHandler(firebaseKey, contactValue);
  // };

  return (
    <Box
      sx={{
        background: "linear-gradient(0deg, #F6F2FF, #F6F2FF)",
        backgrounColor: "#FBFAFF",
      }}
    >
      <Container>
        <Stack direction="row" spacing={8} mt={8}>
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
              Bithday Bash
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
              Hosted by Elysla
            </Typography>
          </Box>
          <Box></Box>
          <Box item flex={2}>
            <Box
              sx={{
                position: "absolute",
                height: "440px",
                width: "775.69px",
                left: "calc(50% - 440px/2 - 366px)",
                top: " 100px",

                backgroundImage: `url(${Birthdaycake})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "Cover",
                backgroundPosition: " center ",
                filter: "drop-shadow(0px 0px 46.8696px rgba(0, 0, 0, 0.05))",
                borderRadius: " 35.1522px",
              }}
            ></Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactCard;
