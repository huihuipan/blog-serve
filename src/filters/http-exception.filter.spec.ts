import { HttpExceptionFilter } from './http-exception.filter';

describe('HttpExecptionFilter', () => {
  it('should be defined', () => {
    expect(new HttpExceptionFilter()).toBeDefined();
  });
});
