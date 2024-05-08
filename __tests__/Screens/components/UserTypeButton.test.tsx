// UserTypeButton.test.tsx

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import UserTypeButton from '../../../app/screens/components/UserTypeButton';
;

describe('UserTypeButton', () => {
  it('renders the correct text', () => {
    const { getByText } = render(<UserTypeButton type={1} text="Admin" userType={null} setUserType={() => {}} />);
    expect(getByText('Admin')).toBeTruthy();
  });

  it('calls setUserType with the correct type when pressed', () => {
    const setUserType = jest.fn();
    const { getByText } = render(<UserTypeButton type={1} text="Admin" userType={null} setUserType={setUserType} />);

    fireEvent.press(getByText('Admin'));
    expect(setUserType).toHaveBeenCalledWith(1);
  });

  it('renders the selected style when userType matches type', () => {
    const { getByText } = render(<UserTypeButton type={1} text="Admin" userType={1} setUserType={() => {}} />);
    expect(getByText('Admin').parent.style).toContainEqual(styles.userTypeSelected);
  });
});