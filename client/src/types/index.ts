export interface Project {}

export interface ContactState {
  emalFormOpen: boolean;
}

export enum PageState {
  Welcome = "welcome",
  Main = "main"
}

export type NotificationLevel = "warning" | "success" | "error" | "info";

export interface Notification {
  message: string;
  level: NotificationLevel;
  time: Date;
}

export type NotificationState = Notification[];
