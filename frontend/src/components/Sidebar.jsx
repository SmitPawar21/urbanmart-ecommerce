import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Drawer from '@mui/material/Drawer';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useAuth } from './AuthProvider';

const drawerWidth = '27vw';

export const Sidebar = () => {
  const {category} = useAuth();
  const {setCategory} = useAuth();

  const {setSearchTerm} = useAuth();

  const handleSearch = (e)=>{
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCategory([...category, value]);
    } else {
      setCategory(category.filter((item) => item !== value));
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height: '100vh', position:'fixed', top:'12vh', backgroundColor:'#c7b198' },
            backgroundColor:'#c7b198'
          }}
          open
        >
          <Box sx={{ p: 2, backgroundColor:'#c7b198' }}>
            <TextField
              id="search-input"
              label="Search"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={handleSearch}
            />

            <h2 style={{display:'flex', alignItems:'center'}}>
              <FilterAltIcon sx={{mr:1, my:1}}/>
               Filters 
            </h2>

            <Divider sx={{ my: 2 }} />

            <Box>
              <h3>Category</h3>
              <FormControlLabel
                control={<Checkbox checked={category.includes('male')} onChange={handleCategoryChange} value="male" />}
                label="Male"
              />
              <FormControlLabel
                control={<Checkbox checked={category.includes('female')} onChange={handleCategoryChange} value="female" />}
                label="Female"
              />
              <FormControlLabel
                control={<Checkbox checked={category.includes('kids')} onChange={handleCategoryChange} value="kids" />}
                label="Kids"
              />
            </Box>

            <Divider sx={{ my: 2 }} />
          </Box>
        </Drawer>
      </Box>

    </Box>
  );
};