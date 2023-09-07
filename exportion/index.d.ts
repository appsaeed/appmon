type PDFoptions = {
  width?: number;
  height?: number;
  top?: number;
  left?: number;
};

export declare function exportTopdf(
  name: string,
  content: string,
  options?: PDFoptions
): boolean;

export declare function exportToDocs(name: string, content: string): boolean;
