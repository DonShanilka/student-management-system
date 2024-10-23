import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
    { id: 's-id', label: 'Student ID', minWidth: 40, align: 'center' },
    { id: 'name', label: 'Name', minWidth: 170, align: 'center' },
    { id: 'age', label: 'Age', minWidth: 100, align: 'center' },
    { id: 'address', label: 'Address', minWidth: 100, align: 'center' },
    { id: 'class', label: 'Class', minWidth: 100, align: 'center' },
    { id: 'action', label: 'Action', minWidth: 170, align: 'center' }
];

function createData(id, name, age, address, studentClass, action) {
    return { id, name, age, address, studentClass, action };
}

// Example rows
const rows = [
    createData('1', 'John Doe', 18, '123 Main St', '12th'),
    createData('2', 'Jane Smith', 17, '456 Oak Ave', '11th'),
    createData('3', 'Mike Brown', 16, '789 Pine Rd', '10th'),
];

function StudentTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleUpdate = (id) => {
        console.log(`Update student with ID: ${id}`);
        // Logic for updating the student
    };

    const handleDelete = (id) => {
        console.log(`Delete student with ID: ${id}`);
        // Logic for deleting the student
    };

    return (
        <Paper sx={{ width: '79%', overflow: 'hidden', position: 'absolute', bottom: '5%' }}>
            <TableContainer sx={{ maxHeight: 350 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            if (column.id === 'action') {
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        <IconButton
                                                            color="primary"
                                                            onClick={() => handleUpdate(row.id)}
                                                        >
                                                            <EditIcon />
                                                        </IconButton>
                                                        <IconButton
                                                            color="error"
                                                            onClick={() => handleDelete(row.id)}
                                                        >
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </TableCell>
                                                );
                                            }
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default StudentTable;
