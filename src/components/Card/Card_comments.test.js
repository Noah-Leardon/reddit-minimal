import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';
import { Provider, useSelector } from 'react-redux'; // Import Provider from react-redux
import configureStore from 'redux-mock-store'; // Import configureStore from redux-mock-store

// Mock the useDispatch and useSelector hooks
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Create a mock store using redux-mock-store
const mockStore = configureStore([]);

test('renders comment section with comments', () => {
  // Mock the comments data
  const comments = [
    { data: { id: 1, author: 'user1', body: 'comment1', score: 10 } },
    { data: { id: 2, author: 'user2', body: 'comment2', score: 5 } },
  ];

  // Set up useSelector to return mock comments and postId
  useSelector.mockImplementation((selector) => selector({
    comments: {
      postId: 123, // Set postId to match postId used in the component
      comments: comments,
    },
  }));

  // Render the Card component wrapped in a Provider with the mock store
  const { getAllByTestId, getByText } = render(
    <Provider store={mockStore({})}>
      <Card
        title="Test Title"
        votes={15}
        author="Test Author"
        time={Date.now() / 1000} // Use current time
        body="Test Body"
        isVideo={false}
        media={null}
        numOfComments={comments.length}
        preview={null}
        subreddit="TestSubreddit"
        postId={123} // Use postId matching the postId set in useSelector
      />
    </Provider>
  );

  // Check if the comments section is rendered
  const commentSection = getAllByTestId('comment-section')[0];
  expect(commentSection).toBeInTheDocument();

  // Check if each comment is rendered
  comments.forEach((comment) => {
    expect(getAllByTestId('comment')[0]).toBeInTheDocument();
  });
});
