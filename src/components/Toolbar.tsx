import { h } from 'preact'
import styled from 'styled-components'
import HeaderLabel from './HeaderLabel'
import CopyButton from './ToolbarButtons/Copy'
import EditButton from './ToolbarButtons/Edit'
import FoldButton from './ToolbarButtons/Fold'
import OptionsButton from './ToolbarButtons/Options'
import SaveButton from './ToolbarButtons/Save'
import SourceButton from './ToolbarButtons/Source'

const ToolbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: solid 1px var(--border-color);
  background-color: var(--background-color);
  box-sizing: border-box;
  overflow-x: auto;
`

const Spacer = styled.div`
  flex: 1;
`

const Toolbar = () => {
  return (
    <ToolbarContainer>
      <HeaderLabel />
      <SourceButton />
      <CopyButton />
      <SaveButton />
      <FoldButton />
      <Spacer />
      <EditButton />
      <OptionsButton />
    </ToolbarContainer>
  )
}

export default Toolbar
