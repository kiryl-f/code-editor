import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSelect from '../LanguageSelect';

test('renders the LanguageSelect component', () => {
  render(<LanguageSelect language="javascript" setLanguage={() => {}} />);
  expect(screen.getByRole('button', { name: /JavaScript/i })).toBeInTheDocument();
});

test('allows selecting a different language', () => {
  const setLanguageMock = vi.fn();

  render(<LanguageSelect language="python" setLanguage={setLanguageMock} />);

  fireEvent.click(screen.getByRole('button', { name: /Python/i }));
  fireEvent.click(screen.getByText('JavaScript'));

  expect(setLanguageMock).toHaveBeenCalledWith('javascript');
});
