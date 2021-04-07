import { h } from 'preact'
import { useContext } from 'preact/hooks'
import styled from 'styled-components'
import { Context } from './App'

const HeaderLabelContainer = styled.div`
  margin: 0 12px 0 0;
  padding: 0 24px 0 12px;
  border-right: solid 1px var(--border-color-light);
  color: var(--font-color);
  font-size: 0.75rem;
  white-space: nowrap;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const HeaderLabel = () => {
  const context = useContext(Context)

  return (
    <HeaderLabelContainer>{context.options.headerText}</HeaderLabelContainer>
  )
}

export default HeaderLabel
