import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthContext';
import { expect, it, describe, beforeEach, vi } from 'vitest';

// Helper component to consume context
const TestComponent = () => {
  const { user, login, signup, logout, isAuthenticated } = useAuth();
  return (
    <div>
      <div data-testid="user">{user ? user.email : 'null'}</div>
      <div data-testid="isAuthenticated">{isAuthenticated.toString()}</div>
      <button onClick={() => login('test@example.com')}>Login</button>
      <button onClick={() => signup('signup@example.com')}>Signup</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

describe('AuthProvider', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('provides default unauthenticated state', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(screen.getByTestId('user')).toHaveTextContent('null');
    expect(screen.getByTestId('isAuthenticated')).toHaveTextContent('false');
  });

  it('restores user from localStorage on mount', () => {
    const user = { email: 'stored@example.com', name: 'stored' };
    localStorage.setItem('pantry_user', JSON.stringify(user));

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(screen.getByTestId('user')).toHaveTextContent('stored@example.com');
    expect(screen.getByTestId('isAuthenticated')).toHaveTextContent('true');
  });

  it('updates state and localStorage on login', async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    const loginButton = screen.getByText('Login');
    await act(async () => {
      loginButton.click();
    });

    expect(screen.getByTestId('user')).toHaveTextContent('test@example.com');
    expect(screen.getByTestId('isAuthenticated')).toHaveTextContent('true');

    const storedUser = JSON.parse(localStorage.getItem('pantry_user') || '{}');
    expect(storedUser.email).toBe('test@example.com');
  });

  it('updates state and localStorage on signup', async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    const signupButton = screen.getByText('Signup');
    await act(async () => {
      signupButton.click();
    });

    expect(screen.getByTestId('user')).toHaveTextContent('signup@example.com');
    expect(screen.getByTestId('isAuthenticated')).toHaveTextContent('true');

    const storedUser = JSON.parse(localStorage.getItem('pantry_user') || '{}');
    expect(storedUser.email).toBe('signup@example.com');
  });

  it('clears state and localStorage on logout', async () => {
    const user = { email: 'stored@example.com', name: 'stored' };
    localStorage.setItem('pantry_user', JSON.stringify(user));

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    const logoutButton = screen.getByText('Logout');
    await act(async () => {
      logoutButton.click();
    });

    expect(screen.getByTestId('user')).toHaveTextContent('null');
    expect(screen.getByTestId('isAuthenticated')).toHaveTextContent('false');
    expect(localStorage.getItem('pantry_user')).toBeNull();
  });

  it('throws error when useAuth is used outside of AuthProvider', () => {
    // Suppress console.error for this test as it's expected
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<TestComponent />)).toThrow('useAuth must be used within an AuthProvider');

    consoleSpy.mockRestore();
  });
});
