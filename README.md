# Node.js Text-to-Speech (TTS) and Speech-to-Text (STT)

This project demonstrates how to use the `sherpa-onnx` package for **Text-to-Speech (TTS)** and the `vosk` library for **Speech-to-Text (STT)** in a Node.js environment. It provides a simple and easy-to-follow example for integrating TTS and STT functionalities into your applications.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

   ```bash
   git clone https://github.com/Aliac8888/tts_stt_project.git
   cd tts_stt_project
   npm install
  ```

## Usage

- ### for using TTS (text to speech) you should follow these steps:
   1. download the tts model that you want to use from here https://github.com/k2-fsa/sherpa-onnx/releases/tag/tts-models
   2. Open `tts/tts.js` and update the `offlineTtsVitsModelConfig` object with the correct path to your downloaded model.
   3.
       ```bash
       cd tts
       node tts.js
        ```
   4. This will generate an audio file (default: `test-vits.wav`) containing the speech for the provided text.

- ### for using STT (speech-to-text) you should follow these steps:
   1. download the stt model that you want to use from here https://alphacephei.com/vosk/models
   2. Open `stt/stt.js` and update the `MODEL_PATH` constant variable with the correct path to your downloaded model.
   3.
       ```bash
       cd stt
       node stt.js
        ```
   4. This will transcribe the provided audio file and log the final result in the console.
 
