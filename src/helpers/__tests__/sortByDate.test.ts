import { sortByDate } from '../sortByDate';

describe('sortByDate', () => {
    it('should compare dates', () => {
        expect(sortByDate({ created: new Date('2023-11-11') } as any, { created: new Date('2024-11-11') } as any)).toEqual(31622400000);
    });
});
