import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const getHelloMessage = (req, res) => {
  res.send('Hello from Dall-E');
};

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.images.generate({
      model: 'dall-e-3',
      prompt,
      n: 1,
      size: '1024*1024',
      quality: 'standard',
      response_format: 'b64_json',
    });

    const image = aiResponse.data[0].url;

    res.status(200).json({ photo: image });
  } catch (err) {
    console.log(err);
    res.status(500).send(err?.response?.data?.error?.message || 'Internal Server Error');
  }
};
