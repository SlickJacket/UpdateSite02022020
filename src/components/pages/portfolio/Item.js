import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.main,
    padding: "20px",
  },
  logoPaper: {
    backgroundColor: "#D8D8D8",
    padding: "10px",
  },
  logo: {
    width: "100%",
  },
  buttonsContainer: {
    marginTop: "10px",
  },
  title: {
    color: theme.palette.common.purple,
    fontFamily: "Bowlby One SC",
  },
  divider: {
    backgroundColor: "white",
    margin: "10px",
  },
  description: {
    color: "white",
    fontFamily: "Roboto Condensed",
    fontSize: "18px",
  },
  circle: {
    fontSize: "16px",
  },
  gif: {
      width: "100%",
      [theme.breakpoints.down("md")]: {
          marginTop: "20px"
      }
  }
}));

export default function Item(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container justify="space-evenly" wrap="wrap">
        <Grid item xs={12} lg={6}>
          <Grid container justify="space-between">
            <Grid item xs={3}>
              <Paper elevation={3} className={classes.logoPaper}>
                <img
                  src={props.item.logo}
                  className={classes.logo}
                  alt="logo"
                />
              </Paper>
              <Grid
                container
                direction="column"
                alignItems="space-around"
                spacing={2}
                className={classes.buttonsContainer}
              >
                {props.item.github.map((git) => (
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="secondary"
                      href={git.link}
                    >
                      {git.name}
                    </Button>
                  </Grid>
                ))}
                }
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <Typography variant="h4" className={classes.title}>
                    {props.item.title}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider className={classes.divider} />
                </Grid>
                <Grid item xs={12}>
                  {props.item.description.map((des) => (
                    <Typography className={classes.description}>
                      <FiberManualRecordIcon
                        color="secondary"
                        className={classes.circle}
                      />{" "}
                      {des}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={5}>
          <img src={props.item.gif} className={classes.gif} alt="gif" />
          <Divider className={classes.divider} />
          <iframe
            frameBorder="0"
            width="400"
            height="200"
            src={props.item.demo}
          ></iframe>
        </Grid>
      </Grid>
    </Paper>
  );
}
