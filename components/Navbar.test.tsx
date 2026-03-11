import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { vi } from 'vitest';
import * as AuthContextModule from '../context/AuthContext';

// Mock useAuth
vi.mock('../context/AuthContext', async () => {
  const actual = await vi.importActual('../context/AuthContext');
  return {
    ...actual as any,
    useAuth: vi.fn(),
  };
});

describe('Navbar Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderNavbar = () => {
    return render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  };

  it('renders correctly', () => {
    (AuthContextModule.useAuth as any).mockReturnValue({
      isAuthenticated: false,
      user: null,
      logout: vi.fn(),
    });
    renderNavbar();
    expect(screen.getByText('PantryPal')).toBeInTheDocument();
  });

  it('displays Log In and Sign Up when not authenticated', () => {
    (AuthContextModule.useAuth as any).mockReturnValue({
      isAuthenticated: false,
      user: null,
      logout: vi.fn(),
    });
    renderNavbar();

    // We expect both desktop and mobile versions, so we use getAllByText
    const loginLinks = screen.getAllByText('Log In');
    const signupLinks = screen.getAllByText('Sign Up');

    expect(loginLinks.length).toBeGreaterThan(0);
    expect(signupLinks.length).toBeGreaterThan(0);
  });

  it('displays Profile button when authenticated and toggles dropdown', () => {
    (AuthContextModule.useAuth as any).mockReturnValue({
      isAuthenticated: true,
      user: { email: 'test@example.com' },
      logout: vi.fn(),
    });
    renderNavbar();

    // Initial state: dropdown shouldn't be visible
    expect(screen.queryByText('test@example.com')).not.toBeInTheDocument();

    // Find and click the desktop Profile button
    const profileButton = screen.getByRole('button', { name: /person\s*Profile/i });
    fireEvent.click(profileButton);

    // Dropdown should now be visible
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Manage Subscription')).toBeInTheDocument();
  });

  it('toggles mobile menu when menu button is clicked', () => {
    (AuthContextModule.useAuth as any).mockReturnValue({
      isAuthenticated: false,
      user: null,
      logout: vi.fn(),
    });
    renderNavbar();

    // Initially, the mobile-specific container isn't rendered, but we have multiple links
    // We can check the menu button
    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(menuButton).toBeInTheDocument();

    // Let's count how many "Home" links we have (only desktop initially)
    const initialHomeLinksCount = screen.getAllByText('Home').length;

    fireEvent.click(menuButton);

    // After click, button should change to close icon
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();

    // After click, we should have more "Home" links because mobile menu is visible
    expect(screen.getAllByText('Home').length).toBeGreaterThan(initialHomeLinksCount);
  });

  it('calls logout when Log Out button is clicked', () => {
    const mockLogout = vi.fn();
    (AuthContextModule.useAuth as any).mockReturnValue({
      isAuthenticated: true,
      user: { email: 'test@example.com' },
      logout: mockLogout,
    });
    renderNavbar();

    // Open profile dropdown
    const profileButton = screen.getByRole('button', { name: /person\s*Profile/i });
    fireEvent.click(profileButton);

    // Find and click the desktop Log Out button
    // There might be two, desktop and mobile (if mobile menu was open), but mobile menu isn't open here
    const logoutButtons = screen.getAllByText('Log Out');
    fireEvent.click(logoutButtons[0]);

    expect(mockLogout).toHaveBeenCalledTimes(1);
  });
});
