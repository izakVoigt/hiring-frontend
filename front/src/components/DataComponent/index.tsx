import { Container, SvgContainer, Title, Value, PercentageGreen, PercentageRed, Desc } from "./styles";

export const DataComponent = ({
  svg,
  color,
  title,
  value,
  percentage,
  desc,
}: {
  svg: JSX.Element;
  color: string;
  title: string;
  value: number;
  percentage: number;
  desc: string;
}) => {
  return (
    <Container>
      <SvgContainer style={{ background: color }}>{svg}</SvgContainer>
      <Title>{title}</Title>
      <Value>{value}</Value>
      <Desc>
        {percentage > 0 ? (
          <>
            <PercentageGreen>+{percentage}% </PercentageGreen>
            {desc}
          </>
        ) : (
          <>
            <PercentageRed>{percentage}% </PercentageRed>
            {desc}
          </>
        )}
      </Desc>
    </Container>
  );
};
