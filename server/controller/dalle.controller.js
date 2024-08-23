import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const getHelloMessage = (req, res) => {
  res.send('Hello from Dall-E');
};

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024*1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (err) {
    console.log(err);
    res.status(500).send(err?.response?.data?.error?.message || 'Internal Server Error');
  }
};
