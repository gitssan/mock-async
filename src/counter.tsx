import { asyncRequest } from "./lib/helpers";

const Counter = () => {
  return (
    <>
      <button
        data-testid="async-request-button"
        onClick={() => {
          console.log("click");
          asyncRequest(1);
        }}
      >
        +
      </button>
    </>
  );
};

export default Counter;
