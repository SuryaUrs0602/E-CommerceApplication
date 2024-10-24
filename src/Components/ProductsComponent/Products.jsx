import React from 'react';
import { Grid } from '@mui/material';
import FilterSection from '../FilterComponent/FilterSection';
import Sort from '../SortComponent/Sort';
import ProductList from '../ProductListComponent/ProductList';
import { useFilterContext } from '../../Context/FilterContext';
import PieChart from '../ChartComponent/PieChart';

const Products = () => {
    // const { filter_products } = useFilterContext();

    return (
        <section>
            <Grid container spacing={2}>
                {/* First Column for FilterSection - 40% width with right margin */}
                <Grid item xs={12} sm={4} md={3} sx={{ pr: 2 }}> {/* Add right margin */}
                    <FilterSection />   
                    <PieChart />
                </Grid>

                {/* Second Column for Sort and ProductList - 60% width with right margin */}
                <Grid item xs={12} sm={8} md={9} sx={{ pr: 2, mt: 3 }}> {/* Add right margin */}
                    <Grid container spacing={2} direction="column">
                        {/* Row for Sort */}
                        <Grid item>
                            <Sort />
                        </Grid>
                        
                        {/* Row for ProductList with extra gap */}
                        <Grid item sx={{ mt: 2 }}> {/* Add top margin for extra gap */}
                            <ProductList />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
};

export default Products;

