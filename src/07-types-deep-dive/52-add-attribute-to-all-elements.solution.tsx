declare global {
  namespace React {
    interface HTMLAttributes<T> {
      solutionTestId?: string;
    }
  }
}

<>
  <div solutionTestId="123" />
  <audio solutionTestId="123" />
  <video solutionTestId="123" />
  <a solutionTestId="123" />
  <abbr solutionTestId="123" />
  <address solutionTestId="123" />
</>;
