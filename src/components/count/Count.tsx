import { FC } from 'react';
import { CountCard } from "./styles";

interface Props {
  noOfPermits: number
}

const Count: FC<Props> = ({ noOfPermits }) => {
  return (
    <>
      <CountCard>
        <h3>Total Number of Permits</h3>
        <span>{noOfPermits}</span>
      </CountCard>
    </>
  );
}

export default Count;
