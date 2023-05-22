import { render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BattleStart from "../components/BattleStart";

describe('Battle Start', () => {
  it('returns a header', () => {
    render(
      <MemoryRouter>
        <BattleStart />
      </MemoryRouter>
      );
    const header = screen.getByText('Choose Your Pokemon');
    expect(header).toBeInTheDocument();
  });
});
