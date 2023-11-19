import { useState } from "react";

import { ToggleContainer, Switch, Slider, Input } from "./styled";

type ToggleProps = {
  toggleFunc: () => void;
  isToggle: boolean;
};

export default function Toggle({ toggleFunc, isToggle }: ToggleProps) {
  const [isToggled, setIsToggled] = useState(isToggle);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleFunc();
  };

  return (
    <ToggleContainer>
      <Switch>
        <Input type="checkbox" checked={isToggled} onChange={onToggle} />
        <Slider />
      </Switch>
    </ToggleContainer>
  );
}
