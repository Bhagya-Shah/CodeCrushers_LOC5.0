import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';

const JobListingForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyUrl: '',
    jobCategory: '',
    jobDomain: '',
    jobDescription: '',
    salary: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://api.example.com/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Job listing created successfully!');
      } else {
        alert('Failed to create job listing.');
      }
    } catch (error) {
      alert('Failed to create job listing: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <Grid item>
            <br /><br /><br /><br /><h2>Add a new Job Listing </h2><br /><br /><br />
            </Grid>
      <Grid container spacing={2} direction="column" alignItems="stretch">
        <img src={} alt="" />
        <Grid item>
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            required
            value={formData.companyName}
            onChange={(event) =>
              setFormData({ ...formData, companyName: event.target.value })
            }
          />
        </Grid>
        <Grid item>
          <TextField
            label="Company URL"
            variant="outlined"
            fullWidth
            required
            value={formData.companyUrl}
            onChange={(event) =>
              setFormData({ ...formData, companyUrl: event.target.value })
            }
          />
        </Grid>
        <Grid item>
          <TextField
            label="Job Category"
            variant="outlined"
            fullWidth
            required
            value={formData.jobCategory}
            onChange={(event) =>
              setFormData({ ...formData, jobCategory: event.target.value })
            }
          />
        </Grid>
        <Grid item>
          <TextField
            label="Job Domain"
            variant="outlined"
            fullWidth
            required
            value={formData.jobDomain}
            onChange={(event) =>
              setFormData({ ...formData, jobDomain: event.target.value })
            }
          />
        </Grid>
        <Grid item>
          <TextField
            label="Job Description"
            variant="outlined"
            fullWidth
            required
            value={formData.jobDomain}
            onChange={(event) =>
              setFormData({ ...formData, jobDomain: event.target.value })
            }
          />
        </Grid>
        <Grid item>
          <TextField
            label="Salary"
            variant="outlined"
            fullWidth
            required
            value={formData.salary}
            onChange={(event) =>
              setFormData({ ...formData, salary: event.target.value })
            }
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Create Job Listing
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default JobListingForm;
