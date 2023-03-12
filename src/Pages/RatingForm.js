import React, { useState } from 'react';
import { Typography, Slider, Button, Grid } from '@mui/material';

const RatingForm = () => {
  const [parameter1, setParameter1] = useState(5);
  const [parameter2, setParameter2] = useState(5);
  const [parameter3, setParameter3] = useState(5);
  const [parameter4, setParameter4] = useState(5);
  const [parameter5, setParameter5] = useState(5);

  const handleSubmit = (event) => {
    event.preventDefault();
    const rating = { parameter1, parameter2, parameter3, parameter4, parameter5 };
    console.log('Submitting rating:', rating);
  };

  return (
    <Grid container spacing={3} direction="column" alignItems="flex-start">
        <Grid item>
            </Grid>
        <Grid item>
            </Grid>
        <Grid item>
            </Grid>
        <Grid item>
            </Grid>
        <Grid item>
            </Grid>
      <Grid item>
        <Typography gutterBottom>About Domain Knowledge</Typography>
        <Slider
          value={parameter1}
          onChange={(event, value) => setParameter1(value)}
          aria-labelledby="parameter-1-slider"
          step={1}
          marks
          min={1}
          max={10}
        />
      </Grid>
      <Grid item>
        <Typography gutterBottom>Body language & Eye Contact</Typography>
        <Slider
          value={parameter2}
          onChange={(event, value) => setParameter2(value)}
          aria-labelledby="parameter-2-slider"
          step={1}
          marks
          min={1}
          max={10}
        />
      </Grid>
      <Grid item>
        <Typography gutterBottom>Attentiveness and Listening</Typography>
        <Slider
          value={parameter3}
          onChange={(event, value) => setParameter3(value)}
          aria-labelledby="parameter-3-slider"
          step={1}
          marks
          min={1}
          max={10}
        />
      </Grid>
      <Grid item>
        <Typography gutterBottom>Confidence Level</Typography>
        <Slider
          value={parameter4}
          onChange={(event, value) => setParameter4(value)}
          aria-labelledby="parameter-4-slider"
          step={1}
          marks
          min={1}
          max={10}
        />
      </Grid>
      <Grid item>
        <Typography gutterBottom>Questions and Answer</Typography>
        <Slider
          value={parameter5}
          onChange={(event, value) => setParameter5(value)}
          aria-labelledby="parameter-5-slider"
          step={1}
          marks
          min={1}
          max={10}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
          Evaluate
        </Button>
      </Grid>
    </Grid>
  );
};

export default RatingForm;