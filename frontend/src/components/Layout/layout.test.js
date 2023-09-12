import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Layout from './Layout';

describe('Layout component', () => {
  it('debería renderizar children en el documento', () => {

    const childrenElement = <div data-testid="test-children-content">children content-app</div>

    const { getByTestId } = render(
      <Layout>
        {childrenElement}
      </Layout>
    )

    expect(getByTestId('test-children-content')).toBeInTheDocument()
  })
})
