import React from "react";
import JoinForm from "./JoinForm";
import Header from "./Header";
import "./styles.css";
import Conference from "./Conference";
import { useEffect } from "react";
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore
} from "@100mslive/react-sdk";
import Footer from "./Footer";
import { Grid } from "@mui/material";
import RatingForm from "./RatingForm";

export default function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={9}>
          <Header />
          {isConnected ? (
            <>
              <Conference />
              <Footer />
            </>
          ) : (
            <JoinForm />
          )}
        </Grid>
        <Grid item xs={3}>
          <RatingForm />
        </Grid>
      </Grid>
    </div>
  );
}
