import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useStoreActions } from 'easy-peasy';

import RcSlider from 'rc-slider';

import 'rc-slider/dist/rc-slider.css';

const Value = styled.div`
  width: 80px;
  text-align: right;
  font-weight: 700;
  color: #1fa593;
  user-select: none;
`;

const Slider = styled(RcSlider)`
  &.rc-slider-disabled {
    background: #fff;
  }

  .rc-slider-handle {
    width: 4px;
    height: 18px;
    margin-top: -6px;
    border-radius: 0;
    background: #555555;
    border: none;
    box-shadow: none;
    outline: none;
  }

  .rc-slider-track {
    background: #bababa;
  }
`;

const ActiveStyles = css`
  background: white;

  .rc-slider-handle {
    width: 8px;
    height: 25px;
    margin-top: -10px;
  }
`;

const ControlContainer = styled.div`
  position: absolute;
  width: 150px;
  background: #fff;
  height: 30px;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 22px 5px 22px 5px;
  border-radius: 0px;
  cursor: pointer;
  pointer-events: ${(p) => (p.isDisabled ? 'none' : 'all')};

  ${(p) => (p.active ? ActiveStyles : '')};
`;

function blurSliders() {
  const handles = document.querySelectorAll('.rc-slider');

  [].forEach.call(handles, (handle) => {
    console.log(handle);
    handle.blur();
  });
}

const EdgeControls = ({ controls, yOffset = 0, xOffset = 0, disabled }) => {
  const updateEdge = useStoreActions(
    (actions) => actions.simulation.updateEdge
  );

  const [activeControl, setActiveControl] = useState(null);

  useEffect(() => {
    if (disabled) {
      blurSliders();
    }
  }, [disabled]);

  return controls.map((control, i) => {
    const fromX = control.from[0];
    const toX = control.to[0];
    const fromY = control.from[1];
    const toY = control.to[1];

    const style = {
      top: `${
        (fromY > toY ? toY + (fromY - toY) / 2 : fromY + (toY - fromY) / 2) +
        yOffset
      }px`,
      left: `${
        (fromX > toX ? toX + (fromX - toX) / 2 : fromX + (toX - fromX) / 2) +
        xOffset
      }px`,
    };

    const onChange = (value) => {
      if (disabled) {
        return false;
      }

      updateEdge({
        layerIndex: control.layer,
        nodeIndex: control.source,
        edgeIndex: control.target,
        value,
      });
    };

    const key = `${control.source}__${control.target}`;
    const isActive = activeControl === i;

    return (
      <ControlContainer
        active={isActive}
        key={key}
        style={style}
        isDisabled={disabled}
        onMouseEnter={() => !disabled && setActiveControl(i)}
        onMouseLeave={() => setActiveControl(null)}
      >
        <Slider
          disabled={disabled}
          min={-1}
          max={1}
          step={0.01}
          value={control.weight}
          onChange={onChange}
        />
        {/* <Value>{control.weight}</Value> */}
      </ControlContainer>
    );
  });
};

export default EdgeControls;
