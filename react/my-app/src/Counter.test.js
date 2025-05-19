import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import '@testing-library/jest-dom';

describe('Counter button tests', () => {
    test('Initial state check of buttons and count', () => {
        render(<Counter initialCount={0} />);
        expect(screen.getByText("Count: 0")).toBeInTheDocument();
        expect(screen.getByTestId("increment")).toBeInTheDocument();
        expect(screen.getByTestId("decrement")).toBeInTheDocument();
        expect(screen.getByTestId("reset")).toBeInTheDocument();
    });
    test("on increment btn click, count should increase by 1", () => {
        render(<Counter initialCount={0} />)
        const incrBtn = screen.getByTestId("increment");
        fireEvent.click(incrBtn);
        expect(screen.queryByText("Count: 1")).toBeInTheDocument();
        fireEvent.click(incrBtn);
        fireEvent.click(incrBtn);
        expect(screen.queryByText("Count: 3")).toBeInTheDocument();
    });
    test("on decrement btn click, count should decrease by 1", () => {
        render(<Counter initialCount={0} />)
        const incrBtn = screen.getByTestId("increment");
        const decrBtn = screen.getByTestId("decrement");
        fireEvent.click(incrBtn); // 1
        fireEvent.click(incrBtn); // 2
        fireEvent.click(incrBtn); //3
        fireEvent.click(decrBtn); //2
        expect(screen.queryByText("Count: 2")).toBeInTheDocument();
        fireEvent.click(decrBtn); //1
        expect(screen.queryByText("Count: 1")).toBeInTheDocument();
        fireEvent.click(decrBtn); //0
        expect(screen.queryByText("Count: 0")).toBeInTheDocument();
        fireEvent.click(decrBtn); // still remains as 0
        expect(screen.queryByText("Count: 0")).toBeInTheDocument();
    });

    test("on reset btn click, count should become 0", () => {
        render(<Counter initialCount={0} />)
        const incrBtn = screen.getByTestId("increment");
        const reset = screen.getByTestId("reset");
        fireEvent.click(incrBtn);
        fireEvent.click(incrBtn);
        fireEvent.click(incrBtn);
        fireEvent.click(reset);
        expect(screen.queryByText("Count: 0")).toBeInTheDocument();
    })

    test("snapshot for counter", () => {
        const { asFragment } = render(<Counter />);
        expect(asFragment()).toMatchSnapshot()
    })

});
