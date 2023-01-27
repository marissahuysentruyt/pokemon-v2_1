import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LandingPage from '../components/LandingPage';

describe('LandingPage', () => {
  it('returns a header', () => {
      render(
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
        );
    const header = screen.getByRole('heading', {level: 1});
    expect(header).toBeInTheDocument();
  });
  it('returns an article', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
      );
    const article = screen.queryByRole('article');
    expect(article).toBeInTheDocument();
  })
  it('returns 3 lists inside of the article', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
      );
    const article = screen.queryByRole('article');
    const rulesList = within(article).queryAllByRole('list');
    expect(rulesList[0]).toBeInTheDocument();
    expect(rulesList[1]).toBeInTheDocument();
    expect(rulesList[2]).toBeInTheDocument();
    expect(rulesList).toHaveLength(3);
  });
  describe('home button', () => {
    it('returns a homepage link', () => {
      render(
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
        );
      const homeButton = screen.getByRole('link', {name: 'Home'});
      expect(homeButton).toBeInTheDocument();
      expect(homeButton).toHaveClass('home-link');
    });
  })
});
