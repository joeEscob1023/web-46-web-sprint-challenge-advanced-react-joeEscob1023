import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);

  const button = screen.getByRole("button", { value: /Checkout/i });
  userEvent.click(button);

  userEvent.type(firstName, "Joe");
  userEvent.type(lastName, "Escobedo");
  userEvent.type(address, "123 Sun St");
  userEvent.type(city, "Las Vegas");
  userEvent.type(state, "NV");
  userEvent.type(zip, "89149");

  //I saw in the module project that this is how we would display an error.
  const success = screen.getByTestId("successMessage");

  expect(success).toHaveLength(1);
});
