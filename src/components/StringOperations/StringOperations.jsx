import React, { useState } from "react";
import { Paper,Typography,TextField,Button } from "@mui/material";
import "./StringOperations.scss";

const StringOperations = () => {
  const [input, setInput] = useState("");
  const [reversedString, setReversedString] =
    useState("");
  const [charCount, setCharCount] = useState(0);
  const [error, setError] = useState("");

  const handleProcess = () => {
    if (!input.trim()) {
      setError("Please enter a string");
      setReversedString("");
      setCharCount(0);
      return;
    }

    if (!/^[A-Za-z]+$/.test(input)) {
      setError(
        "Please enter alphabetic characters only."
      );
      setReversedString("");
      setCharCount(0);
      return;
    }

    setError("");

    setReversedString(
      input.split("").reverse().join("")
    );

    setCharCount(input.length);
  };

  return (
    <Paper className="string-operations-container">
      <Typography
        variant="h5"
        className="section-title"
      >
        String Operations
      </Typography>

      <div className="input-section">
        <TextField
          fullWidth
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
          onClick={handleProcess}
        >
          Process
        </Button>
      </div>

      {reversedString && (
        <div className="result-section">
          <Typography>
            <strong>Reversed String:</strong>{" "}
            {reversedString}
          </Typography>

          <Typography>
            <strong>Character Count:</strong>{" "}
            {charCount}
          </Typography>
        </div>
      )}
    </Paper>
  );
};

export default StringOperations;