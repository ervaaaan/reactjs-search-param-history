export interface SingleNewsInterface {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface NumberedSingleNewsInterface extends SingleNewsInterface {
  number: number;
}
