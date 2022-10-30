import { Box } from '@mui/material';
import React from 'react';
import ToDoLits from './components/toDoList/ToDoLits';


function App() {
  return (
    <Box sx={{display:'flex',justifyContent:'center'}}>
      <ToDoLits />
    </Box>
  );
}

export default App;
