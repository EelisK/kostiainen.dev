import { PageState, NotificationState } from ".";

export default interface State {
  page: PageState;
  notifications: NotificationState;
}
