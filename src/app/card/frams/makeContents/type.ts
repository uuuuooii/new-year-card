export interface PromtProps {
  setPromt: React.Dispatch<
    React.SetStateAction<{
      color: string;
      drawingStyle: string;
      keyword: string;
      letter: string;
    }>
  >;
}
