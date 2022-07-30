import { Box, TextField } from '@mui/material';
import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            {/* <TextField
              id="standard-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              id="standard-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              variant="standard"
            />
            <TextField
              id="standard-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
              variant="standard"
            /> */}
        </Box>
        </div>
    );
};

export default AboutMe;