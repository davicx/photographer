import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from './App';

describe('Test Main App', () => {
    it("renders without crashing", () => {
        render(<App />);
    });
})
