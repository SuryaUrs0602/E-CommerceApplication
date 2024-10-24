
import React from 'react';
import { useInventoryContext } from '../InventoryContext/InventoryContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FormatPrice from '../../Utils/FormatPrice';
import { useNavigate } from 'react-router-dom';

const InventoryProductList = () => {
    const { products, handleDelete } = useInventoryContext();
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/updateitem/${id}`);
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant="h5" component="span">Name</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="h5" component="span">Category</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="h5" component="span">Company</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="h5" component="span">Stock</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="h5" component="span">Price</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="h5" component="span">Edit</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="h5" component="span">Delete</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>
                                <Typography variant="body1" component="span">{product.name}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body1" component="span">{product.category}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body1" component="span">{product.company}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body1" component="span">{product.stock}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body1" component="span"><FormatPrice price={product.price} /></Typography>
                            </TableCell>
                            <TableCell>
                                <IconButton onClick={() => handleEdit(product.id)} color="primary">
                                    <EditIcon />
                                </IconButton>
                            </TableCell>
                            <TableCell>
                                <IconButton onClick={() => handleDelete(product.id)} color="error">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default InventoryProductList;

