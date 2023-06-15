import { formatDate } from '../formatDate';

describe('formatDate', () => {
    it('should test if date exists', () => {
        expect(formatDate(undefined)).toEqual(null);
    });
    it('should return formatted date in "hh:mm" format if valid date string is provided', () => {
        const data = '2023-06-12T12:34:56Z';
        expect(formatDate(data)).toEqual('12.06.2023, 15:34');
    });
});
