// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

//2.Create a generic utility type that extracts the return type of a function

// Example usage:
function exampleFunction(arg1: number, arg2: string): boolean {
  return true;
}

function exampleFunction2(arg1: string, arg2: number): string {
  return "true";
}

type ExtractReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type ReturnTypeOfExampleFunction = ExtractReturnType<typeof exampleFunction>;
// ReturnTypeOfExampleFunction is equivalent to: boolean

type ReturnTypeOfExampleFunction = ExtractReturnType<typeof exampleFunction>; // boolean
type ReturnTypeOfExampleFunction2 = ExtractReturnType<typeof exampleFunction2>; // string

/*
folder_name: "RootFolder",
type: "folder",
isOpen: true,
contents: [
  { file_name: "file1.txt", type: "file", size: "1024KB" },
  { file_name: "file2.jpg", type: "file", size: "2048KB" },
  {
*/
type FileType = {
  file_name: string;
  type: string;
  size: string;
};

type FolderType = {
  folder_name: string;
  type: string;
  isOpen: boolean;
  contents: FileType[];
};
