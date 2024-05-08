import React from "react";
import { render, waitFor } from '@testing-library/react-native';
import axios from "axios";
import ListCustomersScreen from "../../app/screens/ListCustomersScreen";

jest.mock('axios', () => ({
    get: jest.fn(),
  }));

describe("ListCustomersScreen", () => {
  test("renders correctly", () => {
    const { getByText, getByPlaceholderText } = render(<ListCustomersScreen />);

    // Check if the screen renders the correct elements
    expect(getByText("User Types")).toBeTruthy();
    expect(getByText("Admin")).toBeTruthy();
    expect(getByText("Manager")).toBeTruthy();
    expect(getByText("Manage Users")).toBeTruthy();
    expect(getByPlaceholderText("Search Users...")).toBeTruthy();
  });

  test('fetches users from API and renders them on refresh', async () => {
    const mockUsers = [
      { id: 1, name: 'User 1', type: 0 },
      { id: 2, name: 'User 2', type: 1 },
    ];

    // Mock the axios.get function
    axios.get.mockResolvedValueOnce({ data: { users: mockUsers } });
    const onRefresh = jest.fn();
    const { getByText } = render(<ListCustomersScreen onRefresh={onRefresh}  />);

    // Simulate a pull-to-refresh event
    onRefresh();

    // Wait for the users to be fetched and rendered
    await waitFor(() => {
        expect(getByText('User 1')).toBeTruthy();
        expect(getByText('User 2')).toBeTruthy();
      })
  });
});
