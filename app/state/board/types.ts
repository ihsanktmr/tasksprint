export interface BoardState {
  focuses: FocusState[];
}

export interface FocusState {
  span: number; // The span in seconds
  startDate: Date;
  endDate: Date;
  note: string; // A string for any additional note
}