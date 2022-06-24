import { fireEvent, render } from "@testing-library/react";
import App from "./App";
import { asyncRequest } from "./lib/helpers";

jest.mock("./lib/helpers", () => ({
  ...jest.requireActual("./lib/helpers"),
  __esModule: true,
  asyncRequest: jest.fn(),
}));

let asyncRequestMock: any;

describe("General component", () => {
  beforeEach(() => {
    const returnValue = { originalValue: 1, returnValue: 2 };

    asyncRequestMock = asyncRequest as jest.MockedFunction<typeof asyncRequest>;
    asyncRequestMock.mockImplementation(() => Promise.resolve(returnValue));
  });

  test("mocks an async call", async () => {
    const returnValue = { originalValue: 2, returnValue: 3 };
    asyncRequestMock.mockImplementation(() => {
      console.log(returnValue);
      return Promise.resolve(returnValue);
    });
    const { getByTestId } = render(<App />);
    const buttonElement = getByTestId(/async-request-button/i);
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(asyncRequest).toHaveBeenCalledTimes(1);
  });
});
