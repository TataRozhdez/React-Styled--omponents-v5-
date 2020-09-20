import React from 'react'
import styled from 'styled-components'

const ToggleWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  margin: auto;
  display: flex;
  background-image: linear-gradient(to bottom, ${p => p.theme.primaryColor}, ${p => p.theme.secondaryColor});
  cursor: pointer;
`

const Notch = styled.div`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  margin-top: 1px;
  border-radius: 50%;
  background: white;
  transition: transform 0.4s linear;
  transform: translate(${p => p.isActive ? '26px' : '1px'});
`

export const Toggle = ({ isActive, onToggle }) => {
  return (
    <ToggleWrapper onClick={onToggle}>
      <Notch isActive={isActive} />
    </ToggleWrapper> 
  )
}
