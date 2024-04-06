import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import SearchBar from './SearchBar';
import store from '../../store/store';

// Mock the module containing the function making the API call
jest.mock('../../api/api', () => ({
  fetchPosts: jest.fn(), // Mock the fetchPosts function
}));

describe('Posts Component', () => {
  it('displays error message when there is an error', async () => {
    // Import the mocked fetchPosts function
    const { fetchPosts } = require('../../api/api');

    // Mock the error response
    fetchPosts.mockRejectedValue(new Error('API Error'));

    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    // Wait for the component to finish rendering
    await screen.findByText('Error! Reload');

    // Check if the error message is displayed
    expect(screen.getByText('Error! Reload')).toBeInTheDocument();
  });
});
