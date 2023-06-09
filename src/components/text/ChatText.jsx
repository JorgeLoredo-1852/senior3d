import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SendIcon from '@mui/icons-material/Send';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import useSpeechRecognition from "../../hooks/useSpeechRecognition";

const baseURL = "https://us-central1-srbanorte23.cloudfunctions.net/dialogflowGateway";

const ChatText = ({loadingBanorte, setLoadingBanorte}) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messageRef = useRef(null);
  const {
		text,
		startListening,
		stopListening,
		isListening,
		hasRecognitionSupport
	} = useSpeechRecognition();

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [messages]);

  useEffect(() => {

    
    const sendM = async () => {
    setLoading(true); 
    setLoadingBanorte(true)
    setMessages((current) =>[
      ...current,
      {
        content: text,
        sender: "user",
      },
    ]);
    setUserInput("");

      const response = await axios.post(baseURL, {
        sessionId: "srbanorte23",
        queryInput: {
          text: {
            text: text,
            languageCode: "es",
          },
        },
      });
      const fulfillmentText = response.data.fulfillmentText;

      setMessages((current) => [
        ...current,
        {
          content: fulfillmentText,
          sender: "bot",
        },
      ]);

      setLoading(false);
      setLoadingBanorte(false)
    }

    if(text){
       sendM()
    }
   
  
  }, [text])

  const sendMessage = async () => {
    console.log(userInput)
    if (userInput.trim() !== "") {
      setLoading(true); 
      setLoadingBanorte(true)
      setMessages((current) =>[
        ...current,
        {
          content: userInput,
          sender: "user",
        },
      ]);
      setUserInput("");

      const response = await axios.post(baseURL, {
        sessionId: "srbanorte23",
        queryInput: {
          text: {
            text: userInput,
            languageCode: "es",
          },
        },
      });
      const fulfillmentText = response.data.fulfillmentText;

      setMessages((current) => [
        ...current,
        {
          content: fulfillmentText,
          sender: "bot",
        },
      ]);

      setLoading(false);
      setLoadingBanorte(false)
    }
  };

  console.log(text)

  return (
    <Grid sx = {{padding:"4rem 0.5rem 0 0.5rem",height: '90vh', overflowY:"scroll", zIndex:200, position:'absolute',width:"30rem", top:0, right: "15rem"}}>
      <Grid container direction="column" sx={{display:"flex"}}>
        <Grid
          item
          container
          direction="column"
          padding="1rem 1.4rem 8rem 1.4rem"
          ref={messageRef}
          style={{maxWidth:"90vh", overflow:"scroll", }}
        >
          {messages.length === 0 ? (
            <Grid
              item
              alignSelf="center"
              position="relative"
              justifySelf="end"
            >
              <Grid container direction="column" alignItems="center">
                <Grid item paddingTop="4rem">
                  <Typography
                    fontSize="1.2rem"
                    textAlign="center"
                    fontWeight="300"
                  >
                  </Typography>
                  <Typography
                    fontSize="4rem"
                    textAlign="center"
                    fontWeight="700"
                    color="rgba(186, 1,1, 1)"
                    sx = {{textShadow: "2px 2px 4px black"}}
                  >
                    Sr. Banorte
                  </Typography>
                </Grid>
                <Grid item>
                  <SmartToyIcon
                    sx={{
                      width: "6rem",
                      height: "6rem",
                      color: "rgba(186, 1,1, 1)",
                      textShadow: "1px 1px 2px black"
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          ) : (
            ""
          )}
          {messages.map((message) => {
            return message.sender === "user" ? (
              <Grid
                item
                alignSelf="flex-end"
                sx={{ marginBottom: "1rem", paddingLeft: "3rem" }}
                position="relative"
              >
                <Grid
                  item
                  sx={{
                    backgroundColor: "#BA0101",
                    borderRadius: "1rem",
                    boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                    padding: "0.5rem 1rem 0.5rem 1rem",
                  }}
                  maxWidth="100%"
                >
                  <Typography color="#ffffff" fontWeight="600" textAlign="end">
                    {message.content}
                  </Typography>
                </Grid>
                <Grid
                  item
                  position="absolute"
                  bottom="-1.6rem"
                  right="-1.1rem"
                  sx={{
                    borderRadius: "1rem",
                    boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                    width: "1.8rem",
                    height: "1.8rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#BA0101",
                  }}
                >
                  <AccountCircleIcon
                    sx={{
                      width: "1.5rem",
                      height: "1.5rem",
                      color: "#ffffff",
                    }}
                  />
                </Grid>
              </Grid>
            ) : (
              <Grid
                item
                alignSelf="flex-start"
                sx={{ marginBottom: "1rem", paddingRight: "3rem" }}
                position="relative"
              >
                <Grid
                  item
                  sx={{
                    backgroundColor: "rgba(255,255,255)",
                    borderRadius: "1rem",
                    boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                    padding: "0.5rem 1rem 0.5rem 1rem",
                  }}
                  maxWidth="100%"
                >
                  <Typography sx={{color:"black"}}>{message.content}</Typography>
                  <Grid
                    item
                    position="absolute"
                    bottom="-1.8rem"
                    left="-1.2rem"
                    sx={{
                      borderRadius: "1rem",
                      boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                      width: "1.8rem",
                      height: "1.8rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <SmartToyIcon
                      sx={{
                        width: "1.5rem",
                        height: "1.5rem",
                        color: "#BA0101",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            );
          })}

          {loading ? (
            <Grid item alignSelf="center" position="relative">
              <CircularProgress />
            </Grid>
          ) : (
            ""
          )}
        </Grid>
        <Grid
          item
          container
          sx={{
            position: "fixed",
            bottom: "0",
            padding: "1rem 0 5rem 0",
            zIndex: "100",
            width: "80%",
            display:"flex",
          }}
        >
          <Grid item xs={3}>
            <TextField
              fullWidth
              id="filled-basic"
              variant="filled"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              sx={{lineHeight:1, backgroundColor:"white"}}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              onClick={() => sendMessage()}
              sx={{ height: "100%", borderRadius: "100%" , marginLeft:"1rem", backgroundColor:"rgba(186, 1,1, 1)"}}
            >
              <SendIcon
                    sx={{
                      width: "2rem",
                      height: "2rem",
                      color: "white",
                    }}
                  />
            </Button>
            <Button
              variant="contained"
              onClick={() => {startListening()}}
              sx={{ height: "100%", borderRadius: "100%" , marginLeft:"1rem", backgroundColor:"rgba(186, 1,1, 1)"}}
            >
             <KeyboardVoiceIcon
                    sx={{
                      width: "2rem",
                      height: "2rem",
                      color: "white",
                    }}
                  />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
  );
};

export default ChatText;