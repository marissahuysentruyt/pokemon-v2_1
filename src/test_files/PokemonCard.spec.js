import { render, screen } from '@testing-library/react';
import PokemonCard from '../components/PokemonCard';

describe('PokemonCard', () => {
  it.skip('returns a heading on the page', () => {
    render(<PokemonCard />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });
});
