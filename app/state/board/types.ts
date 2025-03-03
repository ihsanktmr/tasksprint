export interface BoardState {
  focuses: FocusState[];
  tasks: TaskState[];
}

export interface FocusState {
  span: number; // The span in seconds
  startDate: Date;
  endDate: Date;
  note: string; // A string for any additional note
}

export interface TaskBoardState {
  tasks: TaskState[];
}

export interface TaskState {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}
