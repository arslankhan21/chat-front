import React, { useState } from "react";
// import 'dotenv/config'
import CodeSyntax from "./codeSyntax";
// import handleGPTPrompt from "../utils/helpers";
import OpenAI from "openai";
// import { env } from 'process'; 
// you may need to import env like this depending on your setup
import axios from "axios";
export default function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleGPTPrompt = async (promptText) => {
    try {
      // Call OpenAI API to get response
      const open_ai_client = new OpenAI({ apiKey: import.meta.env.VITE_APP_OPENAI_KEY , dangerouslyAllowBrowser: true  });
      const completion = await open_ai_client.chat.completions.create({
        model: "gpt-4o",
        messages: [{ // Explicitly stringify the messages array
          role: "system",
          content: promptText.trim()
        }],
        // response_format: { "type": "json_object" },
      });
       console.log("result: " + JSON.stringify(completion.choices[0].message));
      setResponse(completion.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error: Failed to fetch response');
    }
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    handleGPTPrompt(prompt);

    // axios
    //   .post(`${HTTP}`, { prompt })
    //   .then((res) => {
    //     console.log("res.data: ",res.data.result.response.content);
    //     setResponse(res.data.result.response.content);
    //     console.log(prompt);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    
    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="container container-sm p-1">
      {" "}
      <h1 className="title text-center text-darkGreen">ChatGPT API</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Ask questions</label>
          <input
            className="shadow-sm"
            type="text"
            placeholder="Enter text"
            value={prompt}
            onChange={handlePrompt}
          />
        </div>{" "}
        {/* <button className="btn btn-accept w-100" type="submit">
          Go
        </button> */}
      </form>
      <div >
        {/* <p className="text-light"> */}

          <CodeSyntax codeString={ response ? response : "Ask me anything..." }/>
          {/* {response ? response : "Ask me anything..."} */}
        {/* </p> */}
      </div>
    </div>
  );
}
