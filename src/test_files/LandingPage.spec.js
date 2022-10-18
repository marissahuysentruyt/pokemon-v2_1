import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LandingPage from "../components/landingPage";

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
  it('returns lists inside of the article', () => {
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
  });
});
