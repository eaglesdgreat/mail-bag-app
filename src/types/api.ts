export type ApiStatus = 'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR';

export type MessageProps = {
  mailbox: string
  id: string
}