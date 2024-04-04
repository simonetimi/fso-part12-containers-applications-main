import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Todo from '../../components/Todos/Todo'

describe('Todo', () => {
  it('renders the Todo component', () => {
    render(<Todo todo={{text: 'This todo is done', done: true}} />)
    expect(screen.getByText('This todo is done')).toBeInTheDocument()
  })
})