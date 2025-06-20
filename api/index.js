const express = require('express')
const cors = require('cors')
const router = require('./router.js')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.listen(3001, () => {
  console.log('Backend running on port 3001');
});