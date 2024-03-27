import { formatDateString } from  '../../app/services/utils';

describe('formatDateString', () => {
  it('correctly formats dates', () => {
    const formatted = formatDateString('2023-01-01T00:00:00Z');
    expect(formatted).toBe('1/1/2023 01:00:00 AM');
  });

  it('returns a default string for invalid dates', () => {
    const formatted = formatDateString('not a real date');
    expect(formatted).toBe('Invalid Date Invalid Date');
  });
});