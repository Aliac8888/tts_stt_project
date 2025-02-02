const sherpa_onnx = require("sherpa-onnx");

function createOfflineTts() {
  let offlineTtsVitsModelConfig = {
    // model: "./vits-persian/vits-piper-fa_IR-amir-medium/fa_IR-amir-medium.onnx",
    // tokens: "./vits-persian/vits-piper-fa_IR-amir-medium/tokens.txt",
    // dataDir: "./vits-persian/vits-piper-fa_IR-amir-medium/espeak-ng-data",

    // model: "./vits-persian/vits-piper-fa-haaniye_low/fa-haaniye_low.onnx",
    // tokens: "./vits-persian/vits-piper-fa-haaniye_low/tokens.txt",
    // dataDir: "./vits-persian/vits-piper-fa-haaniye_low/espeak-ng-data",

    model:
      "./vits-fa-en/vits-piper-fa_en-rezahedayatfar-ibrahimwalk-medium/fa_en-rezahedayatfar-ibrahimwalk-medium.onnx",
    tokens:
      "./vits-fa-en/vits-piper-fa_en-rezahedayatfar-ibrahimwalk-medium/tokens.txt",
    dataDir:
      "./vits-fa-en/vits-piper-fa_en-rezahedayatfar-ibrahimwalk-medium/espeak-ng-data",
      
    // model: "./vits-en/vits-piper-en_US-amy-low/en_US-amy-low.onnx",
    // tokens: "./vits-en/vits-piper-en_US-amy-low/tokens.txt",
    // dataDir: "./vits-en/vits-piper-en_US-amy-low/espeak-ng-data",
    noiseScale: 0.667,
    noiseScaleW: 0.8,
    lengthScale: 1.0,
  };
  let offlineTtsModelConfig = {
    offlineTtsVitsModelConfig: offlineTtsVitsModelConfig,
    numThreads: 1,
    debug: 1,
    provider: "cpu",
  };

  let offlineTtsConfig = {
    offlineTtsModelConfig: offlineTtsModelConfig,
    maxNumSentences: 1,
  };

  return sherpa_onnx.createOfflineTts(offlineTtsConfig);
}

const tts = createOfflineTts();
const speakerId = 0;
const speed = 1.0;
const audio = tts.generate({
  text: "درود بر استاد هامون مهدی زاده! این، صدای تست متن به گفتار است.",
  // text: "hello there im pleased to meet you.",
  sid: speakerId,
  speed: speed,
});

tts.save("./test-vits-en.wav", audio);
console.log("Saved to test-vits-en.wav successfully.");

tts.free();
