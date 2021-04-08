import styled from 'styled-components'

export const ToolbarButton = styled.button`
  width: auto;
  height: 36px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: solid 2px transparent;
  box-sizing: border-box;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: var(--hover-color);
  }

  &:focus {
    background: linear-gradient(
        var(--background-color),
        var(--background-color)
      ),
      var(--theme-color);
    background-origin: border-box;
    background-clip: padding-box, border-box;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: var(--svg-color);
  }

  span {
    margin: 0 0 0 12px;
    color: var(--font-color);
    font-size: 0.75rem;
    white-space: nowrap;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
  }
`
