import axios from 'axios';

const API_URL = '/api/goals/'

//Create new goal
const createGoal = async(goalData, token) => {
  console.log( token)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  }
  console.log(config)

  const response = await axios.post(API_URL, goalData, config)

  return response.data
}

const goalService = {
  createGoal
}

export default goalService