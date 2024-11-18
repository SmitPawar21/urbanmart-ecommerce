import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const drawerWidth = '27vw';

export const Sidebar = () => {
  const [category, setCategory] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCategory([...category, value]);
    } else {
      setCategory(category.filter((item) => item !== value));
    }
  };

  const handlePriceRangeChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setPriceRange([...priceRange, value]);
    } else {
      setPriceRange(priceRange.filter((item) => item !== value));
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
            />

            <h2 style={{display:'flex', alignItems:'center'}}>
              <FilterAltIcon sx={{mr:1, my:1}}/>
               Filters 
            </h2>

            <Divider sx={{ my: 2 }} />

            <Box>
              <h3>Category</h3>
              <FormControlLabel
                control={<Checkbox checked={category.includes('men')} onChange={handleCategoryChange} value="men" />}
                label="Men"
              />
              <FormControlLabel
                control={<Checkbox checked={category.includes('women')} onChange={handleCategoryChange} value="women" />}
                label="Women"
              />
              <FormControlLabel
                control={<Checkbox checked={category.includes('kids')} onChange={handleCategoryChange} value="kids" />}
                label="Kids"
              />
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box>
              <h3>Price Range</h3>
              <FormControlLabel
                control={<Checkbox checked={priceRange.includes('0-50')} onChange={handlePriceRangeChange} value="0-50" />}
                label="$0 - $50"
              />
              <FormControlLabel
                control={<Checkbox checked={priceRange.includes('51-100')} onChange={handlePriceRangeChange} value="51-100" />}
                label="$51 - $100"
              />
              <FormControlLabel
                control={<Checkbox checked={priceRange.includes('101-150')} onChange={handlePriceRangeChange} value="101-150" />}
                label="$101 - $150"
              />
            </Box>
          </Box>
        </Drawer>
      </Box>

    </Box>
  );
};