import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './LoginPage';
import { AuthProvider } from '../context/AuthContext';
import * as AuthContextModule from '../context/AuthContext';
import * as RouterDomModule from 'react-router-dom';

// Mock the AuthContext so we can spy on login
vi.mock('../context/AuthContext', async () => {
  const actual = await vi.importActual('../context/AuthContext');
  return {
    ...actual,
    useAuth: vi.fn()
  };
});

// Mock react-router-dom so we can spy on useNavigate and useLocation
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
    useLocation: vi.fn(),
  };
});

describe('LoginPage Integration Tests', () => {
  it('renders the login form', () => {
    vi.mocked(AuthContextModule.useAuth).mockReturnValue({
      login: vi.fn(),
      user: null,
      signup: vi.fn(),
      logout: vi.fn(),
      isAuthenticated: false
    });
    vi.mocked(RouterDomModule.useNavigate).mockReturnValue(vi.fn());
    vi.mocked(RouterDomModule.useLocation).mockReturnValue({
      pathname: '/login',
      search: '',
      hash: '',
      state: null,
      key: 'default'
    });

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', { name: /welcome back/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  it('allows typing into email and password fields', async () => {
    vi.mocked(AuthContextModule.useAuth).mockReturnValue({
      login: vi.fn(),
      user: null,
      signup: vi.fn(),
      logout: vi.fn(),
      isAuthenticated: false
    });
    vi.mocked(RouterDomModule.useNavigate).mockReturnValue(vi.fn());
    vi.mocked(RouterDomModule.useLocation).mockReturnValue({
      pathname: '/login',
      search: '',
      hash: '',
      state: null,
      key: 'default'
    });

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText(/email address/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, 'password123');

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');
  });

  it('calls login context function and navigates home on successful submission', async () => {
    const mockLogin = vi.fn();
    const mockNavigate = vi.fn();

    vi.mocked(AuthContextModule.useAuth).mockReturnValue({
      login: mockLogin,
      user: null,
      signup: vi.fn(),
      logout: vi.fn(),
      isAuthenticated: false
    });
    vi.mocked(RouterDomModule.useNavigate).mockReturnValue(mockNavigate);
    vi.mocked(RouterDomModule.useLocation).mockReturnValue({
      pathname: '/login',
      search: '',
      hash: '',
      state: null,
      key: 'default'
    });

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText(/email address/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    await userEvent.type(emailInput, 'user@domain.com');
    await userEvent.type(passwordInput, 'securepass');
    await userEvent.click(submitButton);

    expect(mockLogin).toHaveBeenCalledWith('user@domain.com');
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('navigates to checkout if plan state is provided', async () => {
    const mockLogin = vi.fn();
    const mockNavigate = vi.fn();

    vi.mocked(AuthContextModule.useAuth).mockReturnValue({
      login: mockLogin,
      user: null,
      signup: vi.fn(),
      logout: vi.fn(),
      isAuthenticated: false
    });
    vi.mocked(RouterDomModule.useNavigate).mockReturnValue(mockNavigate);
    vi.mocked(RouterDomModule.useLocation).mockReturnValue({
      pathname: '/login',
      search: '',
      hash: '',
      state: { plan: 'premium' },
      key: 'default'
    });

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText(/email address/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    await userEvent.type(emailInput, 'user@domain.com');
    await userEvent.type(passwordInput, 'securepass');
    await userEvent.click(submitButton);

    expect(mockLogin).toHaveBeenCalledWith('user@domain.com');
    expect(mockNavigate).toHaveBeenCalledWith('/checkout', { state: { plan: 'premium' } });
  });

  it('navigates to location.state.from if from state is provided', async () => {
    const mockLogin = vi.fn();
    const mockNavigate = vi.fn();

    vi.mocked(AuthContextModule.useAuth).mockReturnValue({
      login: mockLogin,
      user: null,
      signup: vi.fn(),
      logout: vi.fn(),
      isAuthenticated: false
    });
    vi.mocked(RouterDomModule.useNavigate).mockReturnValue(mockNavigate);
    vi.mocked(RouterDomModule.useLocation).mockReturnValue({
      pathname: '/login',
      search: '',
      hash: '',
      state: { from: { pathname: '/dashboard' } },
      key: 'default'
    });

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText(/email address/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    await userEvent.type(emailInput, 'user@domain.com');
    await userEvent.type(passwordInput, 'securepass');
    await userEvent.click(submitButton);

    expect(mockLogin).toHaveBeenCalledWith('user@domain.com');
    expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
  });
});
