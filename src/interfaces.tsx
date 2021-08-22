export interface WorkDayCellProps {
  done: boolean;
  date: string;
}

export interface HabitTitleProps{
  title: string;
}

export interface DayCellProps {
  date: string;
}

export type DataStateType = {
  id: string;
  title: string;
  doneDates: string[];
}[];

export interface ActionType {
  type: string;
  payload: {
    habitId?: string,
    date?: string,
  };
}
