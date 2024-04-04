import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Todo from '../../src/Todos/Todo.jsx';

describe('Todo', () => {
  it('renders the Todo component', () => {
    render(<Todo todo={{text: 'This todo is done', done: true}} onClickComplete={vi.mock} onClickDelete={vi.mock} />)
    expect(screen.queryAllByText('This todo is done').length).toBeGreaterThan(0)
  })
})