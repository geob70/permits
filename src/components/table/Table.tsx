import { FC } from "react";
import { IPermit } from "../../models/IPermit";
import { TableCard, TData, THead, TRow, Table, TH, TBody } from "./styles";
import { useHistory } from "react-router-dom";

interface Props {
  tableData: IPermit[];
}

const MyTable: FC<Props> = ({ tableData }) => {
  let history = useHistory();

  function handleClick(index: number) {
    history.push(`/next?index=${index}`);
  }
  return (
    <>
      <TableCard>
        <Table>
          <THead>
            <TRow>
              <TH>ID</TH>
              <TH>Permit</TH>
              <TH>Permit type</TH>
              <TH>Review type</TH>
              <TH>Application Start Date</TH>
              <TH>Issue date</TH>
              <TH>Street Name</TH>
            </TRow>
          </THead>
          <TBody>
            {tableData.map((item: IPermit, index: number) => (
              <TRow key={index} onClick={() => handleClick(index)}>
                <TData>{item.id}</TData>
                <TData>{item.permit_}</TData>
                <TData>{item.permit_type}</TData>
                <TData>{item.review_type}</TData>
                <TData>{item.application_start_date}</TData>
                <TData>{item.issue_date}</TData>
                <TData>{item.street_name}</TData>
              </TRow>
            ))}
          </TBody>
        </Table>
      </TableCard>
    </>
  );
};

export default MyTable;
