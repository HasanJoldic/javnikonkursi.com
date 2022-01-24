import React from "react";
import { useHistory } from "react-router-dom";

import {
  styled,
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Button,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { TableCellProps } from "@mui/material/TableCell";

export interface IColumn {
  id: string;
  label: string;
  render?: (value: any) => string;
  align?: TableCellProps["align"];
  style?: React.CSSProperties;
}

export const Table = styled(MuiTable)(() => ({
  "& .MuiTableRow-hover": {
    cursor: "pointer",
  },
}));

export const AddButton = styled(Button)(({ theme }) => ({
  borderRadius: "50%",
  minWidth: "4rem",
  width: "4rem",
  height: "4rem",
  position: "fixed",
  bottom: "5rem",
  right: "5rem",
}));

interface IProps {
  url: string;
  data: any[];
  columns: IColumn[];
}

export const View: React.FC<IProps> = ({ url, data, columns }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const history = useHistory();

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow hover>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={column.style}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow
                    key={row.id}
                    role="checkbox"
                    tabIndex={-1}
                    onClick={() => history.push(`/cms/${url}/edit/${row.id}`)}
                    hover
                  >
                    {columns.map((column) => {
                      const value = column.render ? column.render(row[column.id]) : row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <AddButton variant="contained" color="primary" size="medium" onClick={() => history.push(`/cms/${url}/add`)}>
        <AddIcon fontSize="large" />
      </AddButton>
    </>
  );
};
