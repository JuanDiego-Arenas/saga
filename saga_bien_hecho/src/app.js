import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import fileUpload from 'express-fileupload'

const app = express()

// TODO >>>>>>>> Use's

app.use(fileUpload())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())


// TODO >>>>>>>> Here all Routes

import authRoutes from './routes/auth.routes.js'
import fileExcelRoutes from './routes/fileExcel.routes.js'

// TODO >>>>>>>> Routes Use's

app.use('/api', authRoutes)
app.use('/api', fileExcelRoutes)

export default app