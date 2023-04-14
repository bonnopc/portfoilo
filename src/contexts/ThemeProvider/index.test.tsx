import { fireEvent, render } from "@testing-library/react";
import ThemeProvider, { useTheme } from ".";
import { ThemeScheme } from "@/types/common";

const TestingComponent = () => {
  const { theme, handleTheme } = useTheme();

  const handleThemeChange = (newTheme: ThemeScheme) => {
    if (!handleTheme) return;

    handleTheme(newTheme);
  };

  return (
    <div>
      <p data-testid="theme-text" className={theme}>
        Text
      </p>
      <button onClick={() => handleThemeChange("dark")} data-testid="dark-button">
        Dark
      </button>
      <button onClick={() => handleThemeChange("light")} data-testid="light-button">
        Light
      </button>
    </div>
  );
};

describe("ThemeProvider", () => {
  it("should render", () => {
    const { container } = render(<ThemeProvider />);
    expect(container).toMatchSnapshot();
  });

  it("should render with children", () => {
    const { container } = render(<ThemeProvider>Test</ThemeProvider>);
    expect(container).toMatchSnapshot();
  });

  it("should render with children and theme", () => {
    const { container } = render(<ThemeProvider theme="dark">Test</ThemeProvider>);
    expect(container).toMatchSnapshot();
  });

  it("should render with children and theme and handleTheme", () => {
    const { container } = render(
      <ThemeProvider theme="dark" handleTheme={() => {}}>
        Test
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render with children and theme and handleTheme and className", () => {
    const { container } = render(
      <ThemeProvider theme="dark" handleTheme={() => {}} className="test">
        Test
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should change the theme state using the handleTheme function and trigger component updates", () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <TestingComponent />
      </ThemeProvider>
    );
    const lightButton = getByTestId("light-button");
    const darkButton = getByTestId("dark-button");
    const themeText = getByTestId("theme-text");

    // theme to be present in the document
    expect(themeText).toBeInTheDocument();
    fireEvent.click(darkButton);
    expect(themeText?.className).toBe("dark");
    fireEvent.click(lightButton);
    expect(themeText?.className).toBe("light");
  });

  test("should add dark class to document.body when theme is dark", () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <TestingComponent />
      </ThemeProvider>
    );
    const darkButton = getByTestId("dark-button");
    const themeText = getByTestId("theme-text");

    // theme to be present in the document
    expect(themeText).toBeInTheDocument();
    fireEvent.click(darkButton);
    expect(document.body.classList.contains("dark")).toBe(true);
  });
});
