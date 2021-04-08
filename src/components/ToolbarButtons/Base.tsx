import styled from 'styled-components'

export const ToolbarBaseButton = styled.button`
  width: auto;
  height: 36px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-sizing: border-box;
  text-decoration: none;
  background-color: transparent;
  border: solid 2px transparent;
  transition: all 0.2s;
  cursor: pointer;
  outline: none;

  &:hover {
    background: var(--hover-color);
  }

  &:focus-visible {
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
    font-family: var(--font-sans);
  }
`
