import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  Button,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [eventPhoto, setEventPhoto] = useState("");
  const navigate = useNavigate();

  //Event name, Host name, Start and End time/date, Location and Event photo.
  const add = (e) => {
    e.preventDefault();
    if (
      eventName === "" ||
      hostName === "" ||
      startTime === "" ||
      endTime === "" ||
      location === "" ||
      eventPhoto === ""
    ) {
      alert("Please fill in all fields to continue.");
      return;
    }

    // addEventHandler({
    //   eventName,
    //   hostName,
    //   startTime,
    //   endTime,
    //   location,
    //   eventPhoto,
    // });
    setEventName("");
    setHostName("");
    setStartTime("");
    setEndTime("");
    setLocation("");
    setEventPhoto("");
    navigate("/");
    //    console.log(this.props.contact);
  };

  return (
    <Container align="center">
      <Typography variant="h2" color={"#240D57"}>
        Add Event
      </Typography>
      <FormGroup onSubmit={add} sx={{ marginTop: "10px" }}>
        <FormControl htmlFor="my-input">
          <InputLabel>Event Name</InputLabel>
          <Input
            type="text"
            name="eventName"
            placeholder="Event Name"
            aria-describedby="component-error-text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </FormControl>
        <FormControl htmlFor="my-input">
          <InputLabel>Host Name</InputLabel>
          <Input
            type="text"
            name="hostName"
            placeholder="Host Name"
            aria-describedby="component-error-text"
            value={hostName}
            onChange={(e) => setHostName(e.target.value)}
          />
        </FormControl>
        <FormControl htmlFor="my-input">
          <InputLabel>Start Time</InputLabel>
          <Input
            type="text"
            name="startTime"
            placeholder="start Time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </FormControl>
        <FormControl htmlFor="my-input">
          <InputLabel>End Time</InputLabel>
          <Input
            type="text"
            name="endTime"
            placeholder="End Time"
            aria-describedby="component-error-text"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </FormControl>
        <FormControl htmlFor="my-input">
          <InputLabel>Location</InputLabel>
          <Input
            type="text"
            name="location"
            placeholder="Location"
            aria-describedby="component-error-text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormControl>
        <FormControl htmlFor="my-input">
          <InputLabel>Event Photo</InputLabel>
          <Input
            type="text"
            name="eventPhoto"
            placeholder="Event Photo"
            aria-describedby="component-error-text"
            value={eventPhoto}
            onChange={(e) => setEventPhoto(e.target.value)}
          />
        </FormControl>
      </FormGroup>
      <Link to="/event" sx={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          align="center"
          sx={{
            color: "#FFFFFF",
            background: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        >
          Next
        </Button>
      </Link>
    </Container>
  );
};

export default Create;
