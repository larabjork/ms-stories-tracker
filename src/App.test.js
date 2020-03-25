import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './components/App';
import { Switch, Route, withRouter, HashRouter } from 'react-router-dom';


test('renders You are more than your diagnosis', () => {
  const { getByText } = render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  );

  expect(getByText(/you are more/i)).toBeInTheDocument();
});
