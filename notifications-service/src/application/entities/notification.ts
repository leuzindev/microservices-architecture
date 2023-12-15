import { Replace } from 'src/helpers/replace';
import { Content } from './content';

export interface NotificationsProps {
  recipientId: string;
  content: Content;
  category: string;
  readyAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationsProps;

  constructor(props: Replace<NotificationsProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }
  public get recipientId() {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }
  public get content() {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }
  public get category() {
    return this.props.category;
  }

  public set readyAt(readyAt: Date | null | undefined) {
    this.props.readyAt = readyAt;
  }
  public get readyAt(): Date | null | undefined {
    return this.props.readyAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
