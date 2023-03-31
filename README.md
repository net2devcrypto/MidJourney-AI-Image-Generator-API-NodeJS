# MidJourney-AI-Image-Generator-API-NodeJS
An API to automate image generation using MidJourneyV4 model in Stable Diffusion

##

** THE FILES ATTACHED TO THIS REPO ARE FOR EDUCATIONAL PURPOSES ONLY **

** USE IT AT YOUR OWN RISK** **I'M NOT RESPONSIBLE FOR ANY USE, ISSUES ETC.. **


## Step 1

Download midjourneyapi folder from this repo.

## Step 2

Extract and navigate to project folder then install dependencies: npm i

```shell
cd midjourneyapi
npm i
```
## Step 3

Create your Account in Stablediffusion: https://stablediffusionapi.com/

## Step 4

Create API key then copy it.
Update midjourneyapi.js and add your api key:

```shell
const apiKey = 'REPLACE-WITH-YOUR-API-KEY';
```

## Step 4

Add your prompt description of what you want to generate.

```shell
const prompt = 'a dog walking on the beach with sunglasses, portrait, ultra realistic, futuristic background , concept art, intricate details, highly detailed';
```

## Step 5

Add how many pics you want to generate:

```shell
const numberOfPics = '3'
```

## Step 5
- Save and execute in your terminal:

```shell
node midjourneyapi.js
```

Pictures will be inside the "pics" folder once generated.

Follow me in Youtube @Net2Dev!!
