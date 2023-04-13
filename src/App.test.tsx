import React from 'react';
import App from './App';
import { getAllByText, render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Forms } from './pages/Forms/Forms';
import { store } from './store/store';
import { About } from './pages/About/About';

describe('App and Home component testing', () => {
  it('render store', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  });

  it('checking error page', () => {
    render(
      <MemoryRouter initialEntries={['/fizafazatron']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Страница недоступна')).toBeInTheDocument();
  });

  it('checking layout page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.queryByText('Home2')).not.toBeInTheDocument();
  });

  it('checking home page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText('Дом, милый дом!')).toBeInTheDocument();
  });
});

describe('About component testing', () => {
  it('search author', () => {
    render(<About />);
    expect(screen.getByText('Али Адыгезалли')).toBeInTheDocument();
  });
});

describe('Forms component testing', () => {
  it('search author', () => {
    render(
      <Provider store={store}>
        <Forms />
      </Provider>
    );

    expect(screen.getByText('Кнопелла')).toBeInTheDocument();
  });
});
