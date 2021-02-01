import { TypeBanner } from './banner.type';
import { FileType } from './file.type';
import { Theme } from './theme.type';

export interface ParsedRequest {
  fileType: FileType;
  text: string;
  theme: Theme;
  showWatermark: boolean;
  packageManager: string;
  packageName: string;
  description: string;
  pattern: string;
  md: boolean;
  fontSize: string;
  images: string[];
  widths: string[];
  heights: string[];
  author: string;
  username: string;
  type: TypeBanner;
  date: string;
  logo: string;
}
