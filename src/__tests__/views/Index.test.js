import React from 'react'
import { rest } from 'msw'
import { render, fireEvent, screen } from './test-utils'
import Index from '../../views/Index'

export const handlers = [
  rest.get('/api/user', (req, res, ctx) => {
    return res(ctx.json('John Smith'), ctx.delay(150))
  })
]

test('Recibir datos', async () => {
  render(<Index />)

  expect(screen.getByText(/no user/i)).toBeInTheDocument()
  expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()

  // fireEvent.click(screen.getByRole('button', { name: /Fetch user/i }))
  // expect(screen.getByText(/no user/i)).toBeInTheDocument()

  // expect(await screen.findByText(/John Smith/i)).toBeInTheDocument()
  // expect(screen.queryByText(/no user/i)).not.toBeInTheDocument()
  // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()
})