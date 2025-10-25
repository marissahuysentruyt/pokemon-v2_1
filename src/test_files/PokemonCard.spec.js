import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';

// eslint-disable-next-line jest/no-mocks-import
import pokemonListCharacters from './__mocks__/mockPokemon';

describe('PokemonCard', () => {
  it('renders pokemon data', () => {
    render(
      <MemoryRouter>
        <PokemonCard
          pokemon={pokemonListCharacters.pokemon1}
          name="pokemon-choices"
          onSelect={() => {}}
        />
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('first pokemon');

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', pokemonListCharacters.pokemon1.sprites.front_default);
    expect(image).toHaveAttribute('alt', pokemonListCharacters.pokemon1.name);

    const radioInput = screen.getByRole('radio');
    expect(radioInput).toBeInTheDocument();
    expect(radioInput).toHaveAttribute('name', 'pokemon-choices');
    expect(radioInput).toHaveAttribute('value', pokemonListCharacters.pokemon1.name);

    const hp = screen.getByRole('heading', { level: 3 });
    expect(hp).toBeInTheDocument();
    expect(hp).toHaveTextContent('50 HP');
  });

  it('calls the onSelect handler when the radio input is changed', () => {
    const mockSelectHandler = jest.fn();

    render(
      <MemoryRouter>
        <PokemonCard
          pokemon={pokemonListCharacters.pokemon2}
          name="pokemon-choices"
          onSelect={mockSelectHandler}
        />
      </MemoryRouter>
    );

    const radioInput = screen.getByRole('radio');
    userEvent.click(radioInput);

    expect(mockSelectHandler).toHaveBeenCalledTimes(1);
    expect(mockSelectHandler).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: 'second pokemon',
          type: 'radio',
          name: 'pokemon-choices'
        })
      })
    );
  });
});
