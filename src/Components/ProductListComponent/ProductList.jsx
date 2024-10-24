import React from 'react'
import { useFilterContext } from '../../Context/FilterContext'
import GridView from '../GridViewComponent/GridView'

const ProductList = () => {

    const { filter_products, grid_view } = useFilterContext();

    if (grid_view === true) {
        return <GridView products={filter_products} />
    }

}

export default ProductList
