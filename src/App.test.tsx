import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

test("render first page and display 5 input boxes", async () => {
  const store = createStore(reducers);

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const inputs = await screen.findAllByRole("textbox");
  expect(inputs).toHaveLength(5);
});

test("nav to 2nd page and display empty message", () => {
  const store = createStore(reducers);

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  fireEvent.click(screen.getByText("Saved"));
  const EmptyString = screen.getByText(/There's no saved PINs/i);
  expect(EmptyString).toBeInTheDocument();
});

test("nav to 2nd page after save pin and display 6 input boxes", async () => {
  const store = createStore(reducers);

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  fireEvent.click(screen.getByRole("button", { name: "Generate" }));
  fireEvent.click(screen.getByRole("button", { name: "Save" }));
  fireEvent.click(screen.getByText("Saved"));

  const inputs = await screen.findAllByRole("textbox");
  expect(inputs).toHaveLength(6);
});
