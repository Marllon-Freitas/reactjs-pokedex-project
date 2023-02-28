export const calculateCaptureRate = (captureRateInfo) => {
  let captureRate;

  if (captureRateInfo > 204) {
    captureRate = "Very easy";
  } else if (captureRateInfo > 153 && captureRateInfo < 204) {
    captureRate = "Easy";
  } else if (captureRateInfo > 102 && captureRateInfo < 153) {
    captureRate = "Medium";
  } else if (captureRateInfo > 51 && captureRateInfo < 102) {
    captureRate = "Hard";
  } else if (captureRateInfo > 0 && captureRateInfo < 51) {
    captureRate = "Very hard";
  }
  return captureRate;
};
