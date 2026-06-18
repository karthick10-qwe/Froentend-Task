import React, { useState } from "react";
import { Paper, Typography, Button } from "@mui/material";
import "./Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <Paper className="counter-container">
      <Typography
        variant="h5"
        className="counter-title"
      >
        Counter Value : {count}
      </Typography>

      <div className="button-group">
        <Button
          variant="contained"
          onClick={increment}
        >
          Increment
        </Button>

        <Button
          variant="contained"
          color="warning"
          onClick={decrement}
        >
          Decrement
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={reset}
        >
          Reset
        </Button>
      </div>
    </Paper>
  );
};

export default Counter;