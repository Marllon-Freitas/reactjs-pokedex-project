import React from "react";
import { Link } from "react-router-dom";

// Estilos
import { Wrapper } from "./styled";

function NotFound() {
  return (
    <Wrapper>
      <h3>Something went wrong</h3>
      <h4>The page you search probably does not exist</h4>
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9d875363-9c5f-4092-8ace-1b33d1ee8982/de6fbdu-c28c5ade-c706-46c0-8ad3-77f503a2afe7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlkODc1MzYzLTljNWYtNDA5Mi04YWNlLTFiMzNkMWVlODk4MlwvZGU2ZmJkdS1jMjhjNWFkZS1jNzA2LTQ2YzAtOGFkMy03N2Y1MDNhMmFmZTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.P7P-Gss6pAOIasTLbjd3AFl0gfdPawOTFcJa53zOym0"
        alt=""
      />
      <Link to="/">
        <button className="loadMoreButton">
          <div className="loadMoreButton-pokeball">
            <svg
              width="59"
              height="49"
              viewBox="0 0 59 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M58.9851 26.3302C58.9851 29.5819 58.4545 32.7785 57.4417 35.803C56.0034 40.098 53.2455 41.7347 50 44.9999C43.5 48.9999 35.8219 47.8874 28 47.8874C20.4524 47.8874 17.5 47.9999 9.22728 47.8874C9.02853 47.6983 8.83214 47.5061 8.63816 47.311C3.10724 41.7465 1.18355e-06 34.1995 0 26.3302L16.1767 26.3302C16.1767 29.8832 17.5796 33.2907 20.0768 35.803C22.574 38.3153 25.961 39.7267 29.4925 39.7267C33.0241 39.7267 36.411 38.3153 38.9082 35.803C41.4054 33.2907 42.8083 29.8832 42.8083 26.3302L58.9851 26.3302Z"
                fill="white"
                fill-opacity="0.25"
              />
              <path
                d="M58.9851 21.6992C58.9851 18.4475 58.4545 15.2509 57.4417 12.2264C56.0034 7.9314 53.2455 6.29468 50 3.02951C43.5 -0.97049 35.8219 0.142008 28 0.142007C20.4524 0.142007 17.5 0.0295105 9.22728 0.142007C9.02853 0.331125 8.83214 0.523272 8.63816 0.718417C3.10724 6.28285 1.18104e-06 13.8299 0 21.6992L16.1767 21.6992C16.1767 18.1462 17.5796 14.7387 20.0768 12.2264C22.574 9.71407 25.961 8.30265 29.4925 8.30266C33.0241 8.30266 36.411 9.71407 38.9082 12.2264C41.4054 14.7387 42.8083 18.1462 42.8083 21.6992L58.9851 21.6992Z"
                fill="white"
                fill-opacity="0.25"
              />
              <path
                d="M39.4859 23.6329C39.4859 29.1855 35.0117 33.6867 29.4925 33.6867C23.9734 33.6867 19.4992 29.1855 19.4992 23.6329C19.4992 18.0802 23.9734 13.579 29.4925 13.579C35.0117 13.579 39.4859 18.0802 39.4859 23.6329Z"
                fill="white"
                fill-opacity="0.25"
              />
            </svg>
          </div>
          Back To Home
        </button>
      </Link>
    </Wrapper>
  );
}

export default NotFound;
