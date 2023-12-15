import { Content } from './content';
import { Notification } from './notification';

describe('notifications tests', () => {
  it('it should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('teste de content'),
      category: 'social',
      recipientId: 'exemple-id',
    });

    expect(notification).toBeTruthy();
  });
});
