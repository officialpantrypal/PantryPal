import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CheckoutPage from './CheckoutPage';

describe('CheckoutPage', () => {
  const renderCheckoutPage = () => {
    return render(
      <MemoryRouter>
        <CheckoutPage />
      </MemoryRouter>
    );
  };

  test('renders initial state correctly with Premium Monthly plan', () => {
    renderCheckoutPage();

    // Total should be $5.00 initially
    const totalElement = screen.getByText('$5.00');
    expect(totalElement).toBeInTheDocument();

    // Confirm button should be disabled initially
    const confirmButton = screen.getByRole('button', { name: /Confirm PantryPal Subscription/i });
    expect(confirmButton).toBeDisabled();
  });

  test('updates total when selecting Family (5 Users) plan', () => {
    renderCheckoutPage();

    // Select Family (5 Users)
    const family5Option = screen.getByLabelText(/Family \(5 Users\)/i);
    fireEvent.click(family5Option);

    // Total should be updated to $8.00
    const totalElement = screen.getByText('$8.00');
    expect(totalElement).toBeInTheDocument();
  });

  test('updates total when switching to Yearly billing cycle', () => {
    renderCheckoutPage();

    // Switch to Yearly billing
    const yearlyOption = screen.getByLabelText(/Yearly — Save 20% with annual billing/i);
    fireEvent.click(yearlyOption);

    // Initial Premium base is $5.00. Yearly is 5.00 * 12 * 0.8 = $48.00
    const totalElement = screen.getByText('$48.00');
    expect(totalElement).toBeInTheDocument();
  });

  test('updates total when toggling Beta Program Access add-on', () => {
    renderCheckoutPage();

    // Toggle Beta Program
    const betaCheckbox = screen.getByLabelText(/Beta Program Access/i);
    fireEvent.click(betaCheckbox);

    // Initial is $5.00 + $1.00 for beta = $6.00
    const totalElement = screen.getByText('$6.00');
    expect(totalElement).toBeInTheDocument();
  });

  test('enables confirm button when terms are agreed to', () => {
    renderCheckoutPage();

    const confirmButton = screen.getByRole('button', { name: /Confirm PantryPal Subscription/i });
    expect(confirmButton).toBeDisabled();

    // The Terms label wraps a link, but the input has id="terms"
    // Let's use getByLabelText using the text or just check the role directly
    // The label reads: "By continuing, you agree to our Terms of Service and Privacy Policy."
    const termsCheckbox = screen.getByRole('checkbox', { name: /By continuing, you agree to our/i });
    fireEvent.click(termsCheckbox);

    expect(confirmButton).toBeEnabled();
  });
});
