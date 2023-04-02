import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Forms } from './pages/Forms/Forms';

test('Checking whether the App is wrapped in BrowserRouterDom', () => {
  render(<App />, { wrapper: BrowserRouter });
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

test('Checking all inside routes in the App class component', () => {
  render(<App />, { wrapper: BrowserRouter });

  const findWordInLayout: HTMLElement = screen.getByText(/In recognition of codes/i);
  expect(findWordInLayout).toBeInTheDocument();

  const findWordInHome: HTMLElement = screen.getByText(/Дом, милый дом!/i);
  expect(findWordInHome).toBeInTheDocument();
});

test('Checking error page', () => {
  render(
    <MemoryRouter initialEntries={['/fizafazatron']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText('Страница недоступна')).toBeInTheDocument();
});

describe('try to find word in forms', () => {
  it('Submit button disabled by default', () => {
    render(<Forms />);
    const findForm = screen.getByText('Форма');
    expect(findForm).toBeInTheDocument();
  });
});
