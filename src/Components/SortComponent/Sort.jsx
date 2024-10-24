import {React} from 'react';
import { useFilterContext } from '../../Context/FilterContext';
import { Grid, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Sort = () => {
    const { filter_products, sorting } = useFilterContext();

    return (
        <Grid container justifyContent="space-between" alignItems="center" style={{ padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <Grid item xs={12} md={6}>
                <Typography variant="h7" align="center" item sx={{ml: 12}}>
                    {`${filter_products.length} Products Available`}
                </Typography>
            </Grid>
            <Grid item xs={12} md={6} container justifyContent="flex-end">
                <FormControl variant="outlined" style={{ minWidth: 250 }}>
                    <InputLabel id="sort-label">Sort By</InputLabel>
                    <Select
                        labelId="sort-label"
                        id="sort"
                        onChange={sorting}
                        defaultValue="lowest"
                        label="Sort By"
                    >
                        {/* <MenuItem value="none">None</MenuItem> */}
                        <MenuItem value="lowest">Price (Lowest)</MenuItem>
                        <MenuItem value="highest">Price (Highest)</MenuItem>
                        <MenuItem value="a-z">Title (A-Z)</MenuItem>
                        <MenuItem value="z-a">Title (Z-A)</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default Sort;
