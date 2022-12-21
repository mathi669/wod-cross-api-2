const express = require('express');
// const v1Router = require('./v1/routes');
const bodyParser = require('body-parser')
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`API is working on port ${PORT}`)
})