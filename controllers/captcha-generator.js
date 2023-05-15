// import { createCanvas, registerFont } from "canvas";
import path from "path";


export const captchaImg = async ( {body}, res = response) => {


res.send(body);


//     const {text, width, height} = body
  
//       // Registrar la fuente descargada
//       const fontPath = path.join(process.cwd(), './assets/fonts/Montserrat-Regular.ttf');
//       registerFont(fontPath, { family: 'Montserrat' });
    
  
//     // Validar que se reciba un texto
//     if (!text) {
//       const errorCanvas = createCanvas(width || 300, height || 150);
//       const ctx = errorCanvas.getContext('2d');
//       ctx.fillStyle = '#f2f2f2';
//       ctx.fillRect(0, 0, errorCanvas.width, errorCanvas.height);
//       ctx.font = '40px Montserrat';
//       ctx.fillStyle = '#333';
//       const textWidth = ctx.measureText('Error').width;
//       const x = (errorCanvas.width - textWidth) / 2;
//       const y = errorCanvas.height / 2;
//       ctx.fillText('Error', x, y);
      
//       // Distorsionar el texto
//       for (let i = 0; i < 40; i++) {
//         ctx.strokeStyle = randomColor(40, 180);
//         ctx.beginPath();
//         ctx.moveTo(randomInt(0, errorCanvas.width), randomInt(0, errorCanvas.height));
//         ctx.lineTo(randomInt(0, errorCanvas.width), randomInt(0, errorCanvas.height));
//         ctx.stroke();
//       }

//       const dataURL = errorCanvas.toDataURL();
  
//       res.json({
//         ok: false,
//         msg: 'No se recibió un texto',
//         data: dataURL
//       });
//       return;
//     }
  
//     // Crear el canvas y establecer sus propiedades
//     const canvas = createCanvas(width || 300, height || 150);
//     const ctx = canvas.getContext('2d');
//     ctx.fillStyle = '#f2f2f2';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
  
//     // Crear el texto del captcha
//     ctx.font = '40px Montserrat';
//     ctx.fillStyle = '#333';
//     const textWidth = ctx.measureText(text).width;
//     const x = (canvas.width - textWidth) / 2;
//     const y = canvas.height / 2;
//     ctx.fillText(text, x, y);
    
  
//     // Distorsionar el texto
//     for (let i = 0; i < 40; i++) {
//       ctx.strokeStyle = randomColor(40, 180);
//       ctx.beginPath();
//       ctx.moveTo(randomInt(0, canvas.width), randomInt(0, canvas.height));
//       ctx.lineTo(randomInt(0, canvas.width), randomInt(0, canvas.height));
//       ctx.stroke();
//     }
  
//     // Obtener la URL de datos de la imagen PNG
//     const dataURL = canvas.toDataURL();
  
//     // Validar que se haya generado una imagen
//     if (!dataURL) {
//       const errorCanvas = createCanvas(width || 300, height || 150);
//       const ctx = errorCanvas.getContext('2d');
//       ctx.fillStyle = '#f2f2f2';
//       ctx.fillRect(0, 0, errorCanvas.width, errorCanvas.height);
//       ctx.font = '40px Montserrat';
//       ctx.fillStyle = '#333';
//       const textWidth = ctx.measureText(text).width;
//       const x = (errorCanvas.width - textWidth) / 2;
//       const y = errorCanvas.height / 2;
//       ctx.fillText(text, x, y);
      
//       const dataURL = errorCanvas.toDataURL();
//       res.json({
//         ok: false,
//         msg: 'No se pudo generar la imagen',
//         data: dataURL,
//       });
//       return;
//     }
  
//     // Enviar la imagen captcha al cliente
//     res.json({
//       ok: true,
//       data: dataURL,
//       msg: 'Imagen captcha generada correctamente',
//     });
  };
  
//   function randomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
  
//   function randomColor(min, max) {
//     const r = randomInt(min, max);
//     const g = randomInt(min, max);
//     const b = randomInt(min, max);
//     return `rgb(${r},${g},${b})`;
//   }