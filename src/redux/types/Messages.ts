import { User } from './User';

export interface Message {
  _id?: string;
  text?: string;
  files?: string[];
  isMedia?: boolean;
  createdAt?: Date;
  user?: User;
}

export interface MessagesByRoomResponse {
  getMessagesByRoom: Message[];
}

export interface CreateMessageResponse {
  roomId: string;
  text: string;
  userId: string | undefined;
  topic: string;
}

export interface NewMessageResponse {
  newMessage: Message;
}

export interface MessageChat extends Message {
  highlighted?: boolean;
}
