
import { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Checkbox,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  useTheme,
  Paper,
} from "@mui/material";

const CommunicationMethodManagement = () => {
  const [methods, setMethods] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    sequence: "",
    mandatory: false,
  });
  const [editId, setEditId] = useState(null);

  const theme = useTheme();

  const fetchMethods = async () => {
    try {
      const response = await axios.get(
       // `${process.env.REACT_APP_BACKEND_URL}/api/communications`
      //);
        `https://entnt-backend-3.onrender.com/api/communications`
      );
      setMethods(response.data);
    } catch (error) {
      console.error("Failed to fetch communication methods", error);
    }
  };

  useEffect(() => {
    fetchMethods();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (editId) {
        await axios.put(
          `https://entnt-backend-3.onrender.com/api/communications/${editId}`,
          form
        );
        setEditId(null);
      } else {
        await axios.post(`https://entnt-backend-3.onrender.com/api/communications`, form);
      }
      setForm({ name: "", description: "", sequence: "", mandatory: false });
      fetchMethods();
    } catch (error) {
      console.error("Failed to save communication method", error);
    }
  };

  const handleEdit = (method) => {
    setForm(method);
    setEditId(method._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://entnt-backend-3.onrender.com/api/communications/${id}`);
      fetchMethods();
    } catch (error) {
      console.error("Failed to delete communication method", error);
    }
  };

  return (
    <div>
      <hr
        style={{
          border: "0.5px solid black",
          height: "4px",
          background: "linear-gradient(to right, #00bcd4, #2196f3)",
          margin: "10px 0",
        }}
      />

      <div className="text-2xl font-bold my-2 mt-10">
        Communication Method Management
      </div>
      <Paper
        elevation={theme.palette.mode === 'dark' ? 2 : 1}
        sx={{
          p: 3,
          mb: 4,
          bgcolor: 'background.paper',
          borderRadius: 2
        }}
      >
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Description"
            name="description"
            value={form.description}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Sequence"
            name="sequence"
            value={form.sequence}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <Checkbox
            name="mandatory"
            checked={form.mandatory}
            onChange={handleInputChange}
          />
          Mandatory
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" onClick={handleSubmit}>
            {editId ? "Update" : "Add"}
          </Button>
        </Grid>
      </Grid>
      </Paper>

      <Paper
        elevation={theme.palette.mode === 'dark' ? 2 : 1}
        sx={{
          overflow: 'hidden',
          borderRadius: 2
        }}
      >

      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: 'background.default' }}>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Sequence</TableCell>
            <TableCell>Mandatory</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {methods.map((method) => (
            <TableRow
             key={method._id}
             sx={{
              '&:hover': {
                bgcolor: theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.05)'
                  : 'rgba(0, 0, 0, 0.05)'
              }
            }}
            >
              <TableCell>{method.name}</TableCell>
              <TableCell>{method.description}</TableCell>
              <TableCell>{method.sequence}</TableCell>
              <TableCell>{method.mandatory ? "Yes" : "No"}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => handleEdit(method)}
                    >
                      Edit
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      sx={{
                        backgroundColor: "red",
                        "&:hover": { backgroundColor: "darkred" },
                      }}
                      onClick={() => handleDelete(method._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Paper>

      <hr
        style={{
          border: "0.5px solid black",
          height: "4px",
          background: "linear-gradient(to right, #00bcd4, #2196f3)",
          margin: "20px 0",
        }}
      />
      <div className="mb-10 h-10"></div>
    </div>
  );
};

export default CommunicationMethodManagement;