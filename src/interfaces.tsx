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
  theme: "dark" | "light";
  showAddHabitOverlay: {
      show: boolean;
      id: string | null;
  };
  selectedHabitFocus: {
      focus: boolean;
      id: string | null;
  };
}

export interface ActionType {
  type: string;
  payload: {
    habitId?: string;
    date?: string;
    show?: boolean;
    focus?: boolean;
    id?: string|null;
    title?: string;
  };
}
