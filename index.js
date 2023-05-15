import express from 'express';
import cors from 'cors';
import captchaRouter from "./routes/captcha-generator.route.js";


const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/',captchaRouter);
app.get('/', (req, res)=>{
  res.send('Bienvenido ! te invito a "/generate-img"');
})

app.listen(PORT, () => {
  console.log('API running on port', PORT);
});
