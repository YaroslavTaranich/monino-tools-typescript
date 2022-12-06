import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { faClose } from '@fortawesome/free-solid-svg-icons'

import Button from './Button'

describe('testing button', () => {
  test('Simple button without icon', async () => {
    render(<Button>Hello</Button>)

    const button = screen.getByRole('button')
    const icon = screen.queryByRole('img')

    expect(button).toHaveTextContent(/hello/i)
    expect(button).toBeInTheDocument()
    expect(icon).toBeNull()
    expect(button).toMatchSnapshot()
  })

  test('Simple button without icon', async () => {
    render(<Button icon={faClose}>Hello</Button>)

    const button = screen.getByRole('button')
    const icon = document.querySelector('[data-icon="xmark"]')

    expect(button).toHaveTextContent(/hello/i)
    expect(icon).toBeInTheDocument()
    expect(button).toMatchSnapshot()
  })
})
