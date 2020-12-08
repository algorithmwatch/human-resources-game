import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

const StyledTooltip = styled(ReactTooltip)`
  padding: 0;
  background: rgba(0, 0, 0, 0) !important;
  z-index: 2000;
`;
const Wrapper = styled.div`
  font-size: 12px;
  background: rgba(255, 255, 255, 0.95);
  padding: 10px;
`;

const TooltipItem = styled.div`
  margin-bottom: 3px;
`;

export const getContent = (data) => {
  if (!data) {
    return null;
  }

  const d = JSON.parse(data);

  return (
    <Wrapper className="react-tooltip">
      <TooltipItem>Name: {d.Name}</TooltipItem>
      <TooltipItem>Age: {d.Age} years</TooltipItem>
      <TooltipItem>Degree: {d.Ausbildung_cat}</TooltipItem>
      <TooltipItem>
        Duration of Employment: {d.Betriebszugehoerigkeit_jahre} years
      </TooltipItem>
      <TooltipItem>
        Last raise: {d.Letzte_Gehaltserhoehung} months ago
      </TooltipItem>
      <TooltipItem>
        Last promotion: {d.Letzte_Befoerderung} months agoo
      </TooltipItem>
      <TooltipItem>
        Intranet activity: {d.Aktivitaetsindex} (max 10)
      </TooltipItem>
      <TooltipItem>
        Overtime: {d.Ueberstunden_zahl} hours/month
      </TooltipItem>
    </Wrapper>
  );
};

const Tooltip = ({ id = 'DefaultTooltip' }) => {
  return <StyledTooltip type="light" getContent={getContent} id={id} />;
};

export default Tooltip;
