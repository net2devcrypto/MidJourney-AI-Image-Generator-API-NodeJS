const https = require("https");
const fs = require("fs");
const dir = './pics';
const axios = require('axios');

/*
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▀█ ▄▄█▄ ▄█ ▄ █ ▄▀█ ▄▄█▀███▀
█ ██ █ ▄▄██ ███▀▄█ █ █ ▄▄██ ▀ █
█▄██▄█▄▄▄██▄██ ▀▀█▄▄██▄▄▄███▄██
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
MidJourneyV4 Community AI Image Generator

Steps, 

- In your terminal, navigate to project folder then install dependencies: npm i
- Create your Account in Stablediffusion: https://stablediffusionapi.com/
- Create API key then add your key to the const "apiKey" below.
- Add your prompt description.
- Add how many pics you want
- Save and execute in your terminal:

node midjourneynft.js 

The generated art should be available in the "pics" folder.

REPLACE THIS INFO:
*/
const apiKey = 'REPLACE-WITH-YOUR-API-KEY';
const prompt = 'a dog walking on the beach with sunglasses, portrait, ultra realistic, futuristic background , concept art, intricate details, highly detailed';
const numberOfPics = '3'

// CODE BEGIN!

const mid = `
       _   _   _                         
 _____|_|_| | |_|___ _ _ ___ ___ ___ _ _ 
|     | | . | | | . | | |  _|   | -_| | |
|_|_|_|_|___|_| |___|___|_| |_|_|___|_  |
            |___|                   |___|

`
const stable = `
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄█▄ ▄█ ▄▄▀█ ▄▄▀█ ██ ▄▄█ ▄▀██▄██ ▄▄█ ▄▄█ ██ █ ▄▄██▄██▀▄▄▀█ ▄▄▀
█▄▄▀██ ██ ▀▀ █ ▄▄▀█ ██ ▄▄█ █ ██ ▄█ ▄██ ▄██ ██ █▄▄▀██ ▄█ ██ █ ██ 
█▄▄▄██▄██▄██▄█▄▄▄▄█▄▄█▄▄▄█▄▄██▄▄▄█▄███▄████▄▄▄█▄▄▄█▄▄▄██▄▄██▄██▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
`


const bodyInfo = JSON.stringify(
    {
        "key": apiKey,
        "model_id": "midjourney",
        "prompt": prompt ,
        "negative_prompt": "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), ((ugly)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((ugly face)), ((fat)), ((extra legs)), anime",
        "width": "512",
        "height": "512",
        "samples": numberOfPics,
        "num_inference_steps": "30",
        "safety_checker": "no",
        "enhance_prompt": "yes",
        "seed": null,
        "guidance_scale": 7.5,
        "webhook": null,
        "track_id": null
    });
    
const options = {
        headers: {
          "Content-Type": "application/json",
        },
    };

async function generateArt() {
    console.log('')
    console.log(stable);
    console.log(mid);
    console.log('')
    console.log('Generating Images....')
    console.log('');
    const result = await axios.post('https://stablediffusionapi.com/api/v3/dreambooth', bodyInfo, options)
    const picAmount = result.data.output.length
    let i = 0;
    for (i; i < picAmount; i++) {
      let number = i + 1;
      getData(result.data.output[i], number + ".png");
      console.log('Generated Pic ' + number);
    }
  }

async function getData(image, filename) {
    await download(image, filename)
}

async function download(url, filename) {
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    if (fs.existsSync(filename)) {
      return;
    } else {
      let request = https.get(url, function (response) {
        if (response.statusCode === 200) {
          let file = fs.createWriteStream(dir + '/' + filename);
          response.pipe(file);
        }
        request.setTimeout(12000, function () {
          request.abort();
        });
      });
    }
  } catch (err) {
    console.error(err);
  }
}


generateArt();