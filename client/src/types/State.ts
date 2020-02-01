import { PageState, NotificationState, ContactState } from ".";

export default interface State {
  page: PageState;
  notifications: NotificationState;
  contact: ContactState;
}
