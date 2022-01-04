
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import transactionRoute from "./routes/transaction.js"
import UserModal from "./models/user.js";
import schedule from 'node-schedule';
import GameRecord from './models/postMessage.js';
import moment from 'moment';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/game', postRoutes);
app.use("/user", userRouter);
app.use('/transaction',transactionRoute);
let date= new Date()
console.log(date)
schedule.scheduleJob('59 23 * * *', async()=>{
  let date= new Date()
  let day = moment(date).format('YYYY-MM-DD')
 try{
  const gameRecord = await GameRecord.find({gamedate:day}).populate('user');
  const sorted =gameRecord.sort((a,b) => {

    return b.level-a.level || a.speed-b.speed})
 
  const slicedArray = sorted.slice(0, sorted.length);
  let reward=2000
  for(let i=0;i<=2;i++){
   
    try{
     
    const user = await UserModal.findOneAndUpdate({_id:slicedArray[i].user._id},{$inc:{balance:reward}},{new:true})

    console.log(user)

    }catch(err){
      console.log(err)
    }
    // reward=reward-100
  }
 
 }catch(err){
   console.log(err)
 }

});

// //mounthly
// schedule.scheduleJob('* 59 23 30 *', async()=>{
//   let date= new Date()
//   console.log(date)
//   let month = moment(date).format('YYYY-MM-DD')
//  try{
//   const gameRecord = await GameRecord.find({gamedate:month}).populate('user');
//   const sorted =gameRecord.sort((a,b) => {

//     return b.level-a.level || a.speed-b.speed})
 
//   const slicedArray = sorted.slice(0, sorted.length);
//   let reward=10000
//   for(let i=0;i<=2;i++){
   
//     try{
     
//     const user = await UserModal.findOneAndUpdate({_id:slicedArray[i].user._id},{$inc:{balance:reward}},{new:true})

//     console.log(user)

//     }catch(err){
//       console.log(err)
//     }
//      reward=reward-2500
//   }
 
//  }catch(err){
//    console.log(err)
//  }

// });


const CONNECTION_URL = "mongodb+srv://youssef:Ys21396909@cluster0.k4rv6.mongodb.net/gidigame";
const PORT = process.env.PORT || 3033;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
 
mongoose.set('useFindAndModify', false);