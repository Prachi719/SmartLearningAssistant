


// src/components/Dashboard.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Dashboard = ({ navigation }) => {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button
        title="Go to Study Plan"
        onPress={() => navigation.navigate('StudyPlan')}
      />
    </View>
  );
};




// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './src/components/Dashboard';
import StudyPlan from './src/components/StudyPlan';
import Resources from './src/components/Resources';
import Progress from './src/components/Progress';
import Community from './src/components/Community';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="StudyPlan" component={StudyPlan} />
        <Stack.Screen name="Resources" component={Resources} />
        <Stack.Screen name="Progress" component={Progress} />
        <Stack.Screen name="Community" component={Community} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/smart-learning', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// routes.js
const express = require('express');


// Define your routes here

// Example route
router.get('/', (req, res) => {
  res.send('Welcome to the Smart Learning Assistant API');
});

module.exports = router;

// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  studyPlan: Array,
});

module.exports = mongoose.model('User', UserSchema);

// controllers/userController.js
const User = require('../models/User');

// Example controller function
exports.createUser = (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  newUser.save((err, user) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send(user);
  });
};

// routes.js
const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

// Define your routes here

// Example route
router.get('/', (req, res) => {
  res.send('Welcome to the Smart Learning Assistant API');
});

router.post('/users', userController.createUser);

module.exports = router;

