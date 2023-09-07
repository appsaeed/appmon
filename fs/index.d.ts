import { FileOpenInfo } from "../types/files";

export interface FsSystem {
  open: (options: FileOpenInfo, callback: any) => void;
}
