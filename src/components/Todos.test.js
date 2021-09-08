import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Todos from './Todos';
import axios from 'axios';

test('should render fetched data',  async () => {
  jest.spyOn(axios, 'get').mockImplementation(() => {
    return Promise.resolve({
      data: [
        {
          title: 'some cool title',
          id: 1
        }
      ]
    })
  })
  let todos;
  await act(async () => { 
    todos = render(<Todos />)
  });
  const h2 = todos.container.querySelector('div h2');
  expect(h2.textContent).toBe('some cool title');
})