import { Grid,TextField,Button,Typography } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  employeeId: Yup.string().required(
    "Employee ID is required"
  ),

  employeeName: Yup.string().required(
    "Employee Name is required"
  ),

  department: Yup.string().required(
    "Department is required"
  ),

  designation: Yup.string().required(
    "Designation is required"
  ),

  salary: Yup.number()
    .typeError("Salary must be numeric")
    .required("Salary is required"),
});

const EmployeeForm = ({
  initialValues,
  handleSave,
  editIndex,
}) => {
  return (
    <>
      <Typography
        color="error"
        sx={{ mt: 2, mb: 2 }}
      >
        * All fields are mandatory
      </Typography>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handleSave(values);
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  required
                  label="Employee ID"
                  name="employeeId"
                  value={values.employeeId}
                  onChange={handleChange}
                  error={
                    touched.employeeId &&
                    Boolean(errors.employeeId)
                  }
                  helperText={
                    touched.employeeId &&
                    errors.employeeId
                  }
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  required
                  label="Employee Name"
                  name="employeeName"
                  value={values.employeeName}
                  onChange={handleChange}
                  error={
                    touched.employeeName &&
                    Boolean(errors.employeeName)
                  }
                  helperText={
                    touched.employeeName &&
                    errors.employeeName
                  }
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  required
                  label="Department"
                  name="department"
                  value={values.department}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  required
                  label="Designation"
                  name="designation"
                  value={values.designation}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={12}>
                <TextField
                  fullWidth
                  required
                  type="number"
                  label="Salary"
                  name="salary"
                  value={values.salary}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={12}>
                <Button
                  type="submit"
                  variant="contained"
                >
                  {editIndex !== null
                    ? "Update Employee"
                    : "Add Employee"}
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default EmployeeForm;