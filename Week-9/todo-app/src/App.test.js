import { render, screen } from '@testing-library/react';
import App from './App';
import CustomForm from './CustomForm';

test('renders learn react link', () => {
  ;
  const linkElement = render(<CustomForm />);
  const ok = linkElement.findAllByPlaceholderText("Enter Task")
  expect(ok).toBeInDocument()
  
});
