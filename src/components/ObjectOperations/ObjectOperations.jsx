import React, { useState } from "react";
import { Paper,Typography,TextField,Button } from "@mui/material";
import "./ObjectOperations.scss";

const ObjectOperations = () => {
  const [employee, setEmployee] = useState({
    id: 101,
    name: "John",
    department: "IT",
    salary: 50000,
  });

  const [propertyName, setPropertyName] =
    useState("");
  const [propertyValue, setPropertyValue] =
    useState("");

  // Add New Property
  const addProperty = () => {
    if (
      !propertyName.trim() ||
      !propertyValue.trim()
    ) {
      return;
    }

    setEmployee({
      ...employee,
      [propertyName]: isNaN(propertyValue)
        ? propertyValue
        : Number(propertyValue),
    });

    setPropertyName("");
    setPropertyValue("");
  };

  // Update Existing Property
  const updateProperty = () => {
    if (
      !propertyName.trim() ||
      !propertyValue.trim()
    ) {
      return;
    }

    if (!(propertyName in employee)) {
      alert("Property does not exist!");
      return;
    }

    setEmployee({
      ...employee,
      [propertyName]: isNaN(propertyValue)
        ? propertyValue
        : Number(propertyValue),
    });

    setPropertyName("");
    setPropertyValue("");
  };

  // Delete Property
  const deleteProperty = () => {
    if (!propertyName.trim()) {
      return;
    }

    if (!(propertyName in employee)) {
      alert("Property does not exist!");
      return;
    }

    const updatedEmployee = {
      ...employee,
    };

    delete updatedEmployee[propertyName];

    setEmployee(updatedEmployee);

    setPropertyName("");
    setPropertyValue("");
  };

  return (
    <Paper className="object-container">
      <Typography
        variant="h5"
        className="section-title"
      >
        Object Operations
      </Typography>

      {/* Object Details */}
      <div className="details-section">
        <Typography>
          <strong>Object Details:</strong>
        </Typography>

        <pre className="json-box">
          {JSON.stringify(
            employee,
            null,
            2
          )}
        </pre>
      </div>

      {/* Object Keys */}
      <Typography className="info-text">
        <strong>Object Keys:</strong>{" "}
        {Object.keys(employee).join(", ")}
      </Typography>

      {/* Object Values */}
      <Typography className="info-text">
        <strong>Object Values:</strong>{" "}
        {Object.values(employee).join(", ")}
      </Typography>

      {/* Property Inputs */}
      <div className="input-section">
        <TextField
          label="Property Name"
          value={propertyName}
          onChange={(e) =>
            setPropertyName(
              e.target.value
            )
          }
        />

        <TextField
          label="Property Value"
          value={propertyValue}
          onChange={(e) =>
            setPropertyValue(
              e.target.value
            )
          }
        />
      </div>

      {/* Buttons */}
      <div className="button-section">
        <Button
          variant="contained"
          onClick={addProperty}
        >
          Add Property
        </Button>

        <Button
          variant="outlined"
          onClick={updateProperty}
        >
          Update Property
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={deleteProperty}
        >
          Delete Property
        </Button>
      </div>
    </Paper>
  );
};

export default ObjectOperations;