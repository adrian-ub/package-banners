export interface Banner {
  typeBanner: string;
  fontSize: string;
  images: Image[];
  theme: string;
  md: number;
  text: string;
  packageManager: string;
  showWatermark: number;
  pattern: string;
  packageName: string;
  description: string;
  author: string;
  username: string;
  date: string;
  logo: string;
  fileType: string;
}

interface Image {
  image: string;
  type: string;
  width: string;
  height: string;
}
