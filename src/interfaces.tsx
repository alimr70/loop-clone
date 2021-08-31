export type ColorType = "gray-300"
| "red-400"
| "yellow-400"
| "green-500"
| "blue-400"
| "indigo-500"
| "purple-400"
| "pink-400"
| "gray-50";

export interface WorkDayCellProps {
  habitId: string;
  cellDate: string;
  done: boolean;
  color: ColorType;
}

export interface HabitTitleProps {
  title: string;
  habitId: string;
  color: ColorType;
}

export interface DayCellProps {
  date: string;
}

export interface HabitInterface {
  id: string;
  title: string;
  color: ColorType;
  doneDates: string[];
}

export type DataStateType = {
  habitsData: HabitInterface[];
};

export interface UiStateInterface {
  theme: "dark" | "light";
  showOverlay: {
      show: boolean;
      id: string | null;
      type: "edit" | "color" | null;
  };
  selectedHabitFocus: {
      focus: boolean;
      id: string | null;
      title: string | null;
  };
}

export interface ActionType {
  type: string;
  payload: {
    habitId?: string;
    date?: string;
    show?: boolean;
    overlayType?: "edit" | "color" | null;
    focus?: boolean;
    id?: string|null;
    title?: string;
    color?: ColorType;
  };
}
