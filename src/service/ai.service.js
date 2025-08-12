const { GoogleGenAI } = require ("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

async function generateCaption(base64ImageFile) {
const contents = [
  {
    inlineData: {
      mimeType: "image/jpeg",
      data: base64ImageFile,
    },
  },
  { text: "Caption this image." },
];

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: contents,
  config:{ //systemInstruction is kind of tumhe kaam kya karwana hai 
    systemInstruction: `you are expert in generating captions images 
    you generate single caption for the image
    your caption should be short and concise 
    you use hashtags and emojis in the caption. 
    generate caption in tapori language
    and use very very dark humour and caption should be in hinglish 
    `
  }
});

return response.text;
}

module.exports = generateCaption;