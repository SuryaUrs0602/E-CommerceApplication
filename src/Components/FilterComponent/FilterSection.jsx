import React from 'react';
import { useFilterContext } from '../../Context/FilterContext';
import { TextField, Button, Typography, Box } from '@mui/material';

const FilterSection = () => {
  const { filters: { text }, all_products, updateFiltersValue, clearFilters } = useFilterContext();

  const getUniqueData = (data, prop) => {
    const newVal = data.map((currEle) => currEle[prop]);
    return ["All", ...new Set(newVal)];
  };

  const categoryOnlyData = getUniqueData(all_products, "category");

  return (
    <Box sx={{ padding: 2 }}>
      <form onSubmit={(e) => e.preventDefault()} style={{ marginBottom: '16px' }}>
        <TextField
          name="text"
          placeholder='SEARCH'
          variant="outlined"
          fullWidth
          value={text}
          onChange={updateFiltersValue}
        />
      </form>

      <Typography variant="h6" gutterBottom textAlign="center">
        Category
      </Typography>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" // Center horizontally
        justifyContent="center" // Center vertically (if needed)
        sx={{ width: '100%' }}
      >
        {categoryOnlyData.map((currEle, index) => (
          <Button
            key={index}
            variant="text"
            name='category'
            value={currEle}
            onClick={updateFiltersValue}
            sx={{
              backgroundColor: 'transparent',
              color: 'primary.main',
              textAlign: 'left',
              padding: '10px',
              margin: '4px 0', // Add some margin between buttons
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light hover effect
              },
            }}
          >
            {currEle}
          </Button>
        ))}
      </Box>
      <Box>
        <Button variant="contained" color="primary" onClick={clearFilters}>Clear Filters</Button>
      </Box>
    </Box>
  );
};

export default FilterSection;

