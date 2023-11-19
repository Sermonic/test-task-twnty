import styled from "styled-components";

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Switch = styled.label`
  position: relative;
  width: 60px;
  height: 34px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.textColors.primary};

  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background: ${({ theme }) => theme.textColors.secondary};
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Input = styled.input`
  &:checked + ${Slider} {
    background: ${({ theme }) => theme.textColors.primary};
  }

  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`;
