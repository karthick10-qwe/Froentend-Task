import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import "./StringArray.scss";

const StringArray = () => {
  const [input, setInput] = useState("");
  const [strings, setStrings] = useState([]);
  const [originalStrings, setOriginalStrings] =
    useState([]);
  const [error, setError] = useState("");

  const addString = () => {
    if (!input.trim()) {
      setError("Please enter a value");
      return;
    }

    if (!/^[A-Za-z]+$/.test(input)) {
      setError(
        "Please enter alphabetic characters only"
      );
      return;
    }

    const updatedStrings = [
      ...strings,
      input,
    ];

    setStrings(updatedStrings);
    setOriginalStrings(updatedStrings);

    setInput("");
    setError("");
  };

  const sortAZ = () => {
    setStrings([...strings].sort());
  };

  const sortZA = () => {
    setStrings([...strings].sort().reverse());
  };

  const reverseArray = () => {
    setStrings([...strings].reverse());
  };

  const showOriginal = () => {
    setStrings([...originalStrings]);
  };

  const sortedArray = [
    ...originalStrings,
  ].sort();

  return (
    <Paper className="string-array-container">
      <Typography
        variant="h5"
        className="section-title"
      >
        String Array Operations
      </Typography>

      <div className="input-section">
        <TextField
          label="Enter String"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          error={!!error}
          helperText={error}
        />

        <Button
          variant="contained"
          onClick={addString}
        >
          Add
        </Button>
      </div>

      <Typography className="result-text">
        Array : {strings.join(", ")}
      </Typography>

      <div className="button-section">
        <Button
          variant="outlined"
          onClick={sortAZ}
        >
          Sort A-Z
        </Button>

        <Button
          variant="outlined"
          onClick={sortZA}
        >
          Sort Z-A
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
          First Item :{" "}
          {sortedArray.length
            ? sortedArray[0]
            : "-"}
        </Typography>

        <Typography>
          Last Item :{" "}
          {sortedArray.length
            ? sortedArray[
                sortedArray.length - 1
              ]
            : "-"}
        </Typography>
      </div>
    </Paper>
  );
};

export default StringArray;