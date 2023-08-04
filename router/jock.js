const express = require('express')
require("dotenv").config()
const jockRouter = express.Router()


const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
    apiKey: `${process.env.API_URL}`,
});

const openai = new OpenAIApi(config);


jockRouter.post('/jock', async (req, res) => {

    const topic = req.body.topic;

    try {
        // You can use the provided 'topic' to create a prompt for the joke generation.
        const prompt = `joke on ${topic}`;

        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 2048,
            temperature: 1,
        });

        const textResponse = response.data.choices[0].text;
        //console.log(textResponse);
        res.send({ "joke": textResponse });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
});


module.exports=jockRouter;