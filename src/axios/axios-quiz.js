import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-5f640.firebaseio.com/'
})