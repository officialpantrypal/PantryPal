import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import SettingsPage from './SettingsPage';

// Mock react-router-dom
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Mock the AuthContext
const mockLogout = vi.fn();
vi.mock('../context/AuthContext', () => ({
  useAuth: () => ({
    user: { email: 'test@example.com' },
    logout: mockLogout,
  }),
}));

describe('SettingsPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    document.documentElement.className = '';
  });

  const renderComponent = () => {
    return render(
      <MemoryRouter>
        <SettingsPage />
      </MemoryRouter>
    );
  };

  it('renders correctly', () => {
    renderComponent();
    expect(screen.getByRole('heading', { name: 'Settings' })).toBeInTheDocument();
    expect(screen.getByText('Account')).toBeInTheDocument();
    expect(screen.getByText('Preferences')).toBeInTheDocument();
    expect(screen.getByText('Legal')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Log Out' })).toBeInTheDocument();
  });

  it('allows toggling Notification Settings', async () => {
    const user = userEvent.setup();
    renderComponent();

    const notificationCheckbox = screen.getByRole('checkbox', { name: /notification settings/i });
    expect(notificationCheckbox).toBeInTheDocument();
    expect(notificationCheckbox).toBeChecked(); // default is true

    await user.click(notificationCheckbox);
    expect(notificationCheckbox).not.toBeChecked();
  });

  it('allows toggling Dark Mode and updates document classes', async () => {
    const user = userEvent.setup();
    renderComponent();

    const darkModeCheckbox = screen.getByRole('checkbox', { name: /dark mode/i });
    expect(darkModeCheckbox).toBeInTheDocument();
    expect(darkModeCheckbox).not.toBeChecked(); // default is false
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    await user.click(darkModeCheckbox);
    expect(darkModeCheckbox).toBeChecked();
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    await user.click(darkModeCheckbox);
    expect(darkModeCheckbox).not.toBeChecked();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('calls logout and navigates to home when Log Out is clicked', async () => {
    const user = userEvent.setup();
    renderComponent();

    const logoutBtn = screen.getByRole('button', { name: 'Log Out' });
    await user.click(logoutBtn);

    expect(mockLogout).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
