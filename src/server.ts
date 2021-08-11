import {getApp, PORT} from './app'



const server = () => {

   const app =  getApp();
   app.listen(PORT,() => {
       console.log(`App Listening at port ${PORT}`)
   })
}

export default server();