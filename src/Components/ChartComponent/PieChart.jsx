import React from 'react'
import { Pie } from 'react-chartjs-2';
import { useProductContext } from '../../Context/ProductContext';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = () => {

    const { products } = useProductContext();
    // console.log('From PieChart Component', products);
    

    // holds the total count for each category
    const categoryStock = {};    

    products.forEach(product => {
        const category = product.category;
        const stock = Number(product.stock);

        if (!isNaN(stock)) {
            if (categoryStock[category]) {
                categoryStock[category] += stock;
            } else {
                categoryStock[category] = stock;
            }
        }
    });
    // console.log('From pie chart', categoryStock);
    

    const labels = Object.keys(categoryStock);
    const data = Object.values(categoryStock);

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Stock by Category',
                data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(244, 182, 120, 0.8)'
                ],
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 2,
            },
        ],
    };

  return (
    <div>
      Product Stock By Category
      <Pie data={chartData} />
    </div>
  )
}

export default PieChart
