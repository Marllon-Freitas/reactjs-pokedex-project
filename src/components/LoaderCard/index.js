import React from "react";

// Estilos
import { Wrapper, Content } from "./LoaderCard.style";

function LoaderCard() {
  return (
    <Wrapper>
      <Content>
        <svg
          width="126"
          height="126"
          viewBox="0 0 126 126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M125.5 66.9998C125.5 82.3824 118.815 97.1349 107 108.012C95.1852 118.889 79.7086 126 63 126C46.2914 126 30.8148 118.889 19 108.012C7.18522 97.1349 0.50001 82.3824 0.500008 66.9998L34.5556 66.9999C34.5556 73.945 37.5525 80.6058 42.8868 85.5168C48.2212 90.4278 55.4561 93.1867 63 93.1867C70.5439 93.1867 77.7789 90.4278 83.1132 85.5168C88.4476 80.6058 91.4444 73.945 91.4444 66.9998L125.5 66.9998Z"
            fill="white"
            fill-opacity="0.25"
          />
          <path
            d="M0.5 59C0.5 43.6174 7.18521 28.8649 19 17.9878C30.8148 7.11069 46.2914 4.67802e-06 63 3.51667e-06C79.7086 2.35532e-06 95.1852 7.11069 107 17.9878C118.815 28.8649 125.5 43.6174 125.5 59L91.4444 59C91.4444 52.0548 88.4476 45.3941 83.1132 40.4831C77.7789 35.5721 70.5439 32.8131 63 32.8131C55.4561 32.8131 48.2211 35.5721 42.8868 40.4831C37.5524 45.3941 34.5556 52.0548 34.5556 59L0.5 59Z"
            fill="white"
            fill-opacity="0.25"
          />
          <path
            d="M82.7385 62.5538C82.7385 73.3531 73.8427 82.1077 62.8692 82.1077C51.8958 82.1077 43 73.3531 43 62.5538C43 51.7546 51.8958 43 62.8692 43C73.8427 43 82.7385 51.7546 82.7385 62.5538Z"
            fill="white"
            fill-opacity="0.25"
          />
        </svg>
      </Content>
    </Wrapper>
  );
}

export default LoaderCard;
