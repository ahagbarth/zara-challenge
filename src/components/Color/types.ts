export type TColor = {
  name: string;
  hexCode: string;
  imageUrl: string;
};

export type TColorComponent = {
  color: TColor;
  setActiveColor: (color: TColor) => void;
};
