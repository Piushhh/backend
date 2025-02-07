import app from './app.js';
import cloudinary from 'cloudinary'

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
})
