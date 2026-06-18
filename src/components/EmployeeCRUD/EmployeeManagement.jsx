import { useState } from "react";
import { Paper,Typography,TextField,Button,Table,TableHead,TableRow,TableCell,TableBody,TableContainer } from "@mui/material";
import EmployeeForm from "./EmployeeForm";
import "./EmployeeManagement.scss";

const EmployeeManagement = () => {
  const initialValues = {
    employeeId: "",
    employeeName: "",
    department: "",
    designation: "",
    salary: "",
  };

  const [employees, setEmployees] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [formValues, setFormValues] =
    useState(initialValues);

  const handleSave = (values) => {
    const duplicate = employees.find(
      (emp, index) =>
        emp.employeeId === values.employeeId &&
        index !== editIndex
    );

    if (duplicate) {
      alert("Employee ID must be unique");
      return;
    }

    if (editIndex !== null) {
      const updatedEmployees = [...employees];
      updatedEmployees[editIndex] = values;

      setEmployees(updatedEmployees);
      setEditIndex(null);
    } else {
      setEmployees([...employees, values]);
    }

    setFormValues(initialValues);
  };

  const handleEdit = (index) => {
    setFormValues(employees[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedEmployees = employees.filter(
      (_, i) => i !== index
    );

    setEmployees(updatedEmployees);
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.employeeName
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <Paper className="employee-container">
      <Typography variant="h5">
        Employee Management System
      </Typography>

      <EmployeeForm
        initialValues={formValues}
        handleSave={handleSave}
        editIndex={editIndex}
      />

      <TextField
        fullWidth
        label="Search Employee"
        sx={{ mt: 3 }}
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <TableContainer sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredEmployees.map(
              (employee, index) => (
                <TableRow
                  key={employee.employeeId}
                >
                  <TableCell>
                    {employee.employeeId}
                  </TableCell>

                  <TableCell>
                    {employee.employeeName}
                  </TableCell>

                  <TableCell>
                    {employee.department}
                  </TableCell>

                  <TableCell>
                    {employee.designation}
                  </TableCell>

                  <TableCell>
                    {employee.salary}
                  </TableCell>

                  <TableCell>
                    <Button
                      onClick={() =>
                        handleEdit(index)
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      color="error"
                      onClick={() =>
                        handleDelete(index)
                      }
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default EmployeeManagement;