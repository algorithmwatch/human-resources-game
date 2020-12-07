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
      <TooltipItem>Alter: {d.Age} Jahre</TooltipItem>
      <TooltipItem>Abschluss: {d.Ausbildung_cat}</TooltipItem>
      <TooltipItem>
        Betriebszugehörigkeit: {d.Betriebszugehoerigkeit_jahre} Jahre
      </TooltipItem>
      <TooltipItem>
        Gehaltserhöhung: Vor {d.Letzte_Gehaltserhoehung} Monaten
      </TooltipItem>
      <TooltipItem>
        Beförderung: Vor {d.Letzte_Befoerderung} Monaten
      </TooltipItem>
      <TooltipItem>
        Intranet-Aktivität: {d.Aktivitaetsindex} (maximal 10)
      </TooltipItem>
      <TooltipItem>
        Überstunden: {d.Ueberstunden_zahl} Stunden/Monat
      </TooltipItem>
    </Wrapper>
  );
};

const Tooltip = ({ id = 'DefaultTooltip' }) => {
  return <StyledTooltip type="light" getContent={getContent} id={id} />;
};

export default Tooltip;
