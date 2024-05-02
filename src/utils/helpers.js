// const OpenAI = require("openai");
// require('dotenv').config()
// const handleGPTPrompt = async (promptText) => {
//     try {
//       // Call OpenAI API to get response
//       const open_ai_client = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_KEY });
//       const completion = await open_ai_client.chat.completions.creat({
//         model: 'gpt-4-1106-preview',
//         prompt: promptText
//       });
//        console.log("result: " + JSON.stringify(completion.choices[0].text));
//       return completion.choices[0].text ;
//     } catch (error) {
//       console.error('Error:', error);
//       setResponse('Error: Failed to fetch response');
//     }
// };

// export default handleGPTPrompt;