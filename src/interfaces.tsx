export interface WorkDayCellProps {
  habitId: string;
  cellDate: string;
  done: boolean;
}

export interface HabitTitleProps {
  title: string;
  habitId: string;
}

export interface DayCellProps {
  date: string;
}

export interface HabitInterface {
  id: string;
  title: string;
  doneDates: string[];
}

export type DataStateType = {
  habitsData: {
    id: string;
    title: string;
    doneDates: string[];
  }[];
};

export interface UiStateInterface {
  showAddHabitOverlay: {
      show: boolean;
      id: null | string;
  };
}

export interface ActionType {
  type: string;
  payload: {
    habitId?: string;
    date?: string;
    show?: boolean;
    id?: string|null;
  };
}
