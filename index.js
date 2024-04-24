const express = require('express');
const authRoute = require('./routes/auth');
const roleRoutes = require('./routes/role');
const salesRoute = require('./routes/sales');

// require cors
// require jwt token
// require mongoose

const app = express();

// app use cors
app.use(express.json());

app.use('/api/login', authRoute);
app.use('/api/role',roleRoutes);
app.use('/api/sales', salesRoute);

app.listen(PORT=8080,()=>{
    console.log("server is running on port",PORT);
});