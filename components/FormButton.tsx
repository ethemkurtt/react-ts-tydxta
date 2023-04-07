import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function FormButton(probs) {
  return (
    <Button variant="outlined" sx={{ width: 145 }}>
      {probs.name}
    </Button>
  );
}
