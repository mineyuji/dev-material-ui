import React from "react";
import Slide from "@material-ui/core/Slide";
import MuiSnackbar from "@material-ui/core/Snackbar";
import ClearIcon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Snackbar />
    </div>
  );
}

function Transition(props) {
  return <Slide {...props} direction="left" />;
}

export function Snackbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleOpen}>
        Register
      </Button>
      <MuiSnackbar
        open={open}
        message="Complete！"
        onClose={handleClose}
        TransitionComponent={Transition}
        transitionDuration={{
          enter: 1000,
          exit: 1000
        }}
        action={<ClearIcon onClick={handleClose} />}
      />
    </React.Fragment>
  );
}
