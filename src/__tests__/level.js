import getLevel from '../getLevel';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('fetch response is ok', () => {
  fetchData.mockReturnValue({ status: 'ok', level: '3' });

  const response = getLevel(2);

  expect(response).toEqual('Ваш текущий уровень: 3');
  expect(fetchData).toBeCalledWith('https://server/user/2');
});

test('fetch response is not ok', () => {
  fetchData.mockReturnValue({ status: '', level: '' });

  const response = getLevel(2);

  expect(response).toEqual('Информация об уровне временно недоступна');
  expect(fetchData).toBeCalledWith('https://server/user/2');
});
