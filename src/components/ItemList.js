import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid2 } from '@mui/material';
import axios from 'axios';

const ItemList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const result = await axios.get('http://localhost:5000/users');
            setUsers(result.data);
        };
        fetchUsers();
    }, []);

    return (
        <Grid2 container spacing={12} mt={2}>
            {users.map(user => (
                <Grid2 item xs={12} sm={6} md={4} key={user.id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">{user.name}</Typography>
                            <Typography variant="body2">{user.email}</Typography>
                            <Link to={`/item/${user.id}`}>View Details</Link>
                        </CardContent>
                    </Card>
                </Grid2>
            ))}
        </Grid2>
    );
};

export default ItemList;
