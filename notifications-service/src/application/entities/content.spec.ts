import { Content } from './content';

describe('content tests', () => {
  it('it should be able to create notification content', () => {
    const content = new Content('Voce recebeu uma solicitacao de amizade');

    expect(content).toBeTruthy();
  });

  it('it should not be able to create notification content with less than 5 characteres', () => {
    expect(() => new Content('abc')).toThrow();
  });

  it('it should not be able to create notification content with more than 240 characteres', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
