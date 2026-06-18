import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import "./NumberArray.scss";

const NumberArray = () => {
  const [number, setNumber] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [originalNumbers, setOriginalNumbers] =
    useState([]);
  const [error, setError] = useState("");

  const addNumber = () => {
    if (!number.trim()) {
      setError("Please enter a number");
      return;
    }

    if (!/^\d+$/.test(number)) {
      setError("Please enter numbers only");
      return;
    }

    const updatedNumbers = [
      ...numbers,
      Number(number),
    ];

    setNumbers(updatedNumbers);
    setOriginalNumbers(updatedNumbers);

    setNumber("");
    setError("");
  };

  const sortAscending = () => {
    setNumbers(
      [...numbers].sort((a, b) => a - b)
    );
  };

  const sortDescending = () => {
    setNumbers(
      [...numbers].sort((a, b) => b - a)
    );
  };

  const reverseArray = () => {
    setNumbers([...numbers].reverse());
  };

  const showOriginal = () => {
    setNumbers([...originalNumbers]);
  };

  return (
    <Paper className="number-array-container">
      <Typography
        variant="h5"
        className="section-title"
      >
        Number Array Operations
      </Typography>

      <div className="input-section">
        <TextField
          label="Enter Number"
          value={number}
          onChange={(e) =>
            setNumber(e.target.value)
          }
          error={!!error}
          helperText={error}
        />

        <Button
          variant="contained"
          onClick={addNumber}
        >
          Add
        </Button>
      </div>

      <Typography className="result-text">
        Array : {numbers.join(", ")}
      </Typography>

      <div className="button-section">
        <Button
          variant="outlined"
          onClick={sortAscending}
        >
          Ascending
        </Button>

        <Button
          variant="outlined"
          onClick={sortDescending}
        >
          Descending
        </Button>

        <Button
          variant="outlined"
          onClick={reverseArray}
        >
          Reverse
        </Button>

        <Button
          variant="outlined"
          onClick={showOriginal}
        >
          Original
        </Button>
      </div>

      <div className="result-section">
        <Typography>
          Maximum :{" "}
          {originalNumbers.length
            ? Math.max(
                ...originalNumbers
              )
            : "-"}
        </Typography>

        <Typography>
          Minimum :{" "}
          {originalNumbers.length
            ? Math.min(
                ...originalNumbers
              )
            : "-"}
        </Typography>
      </div>
    </Paper>
  );
};

export default NumberArray;