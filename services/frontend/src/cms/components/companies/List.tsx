import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Button,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { TableCellProps } from "@material-ui/core/TableCell";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { IApplicationState } from "store";

interface Column {
  id: string;
  label: string;
  align?: TableCellProps["align"];
  style?: React.CSSProperties;
}

const columns: Column[] = [
  { id: "title", label: "Naziv" },
  { id: "url", label: "URL" },
  { id: "_updatedAt", label: "Azurinano" },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  tableRow: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  addButton: {
    borderRadius: "50%",
    minWidth: "4rem",
    width: "4rem",
    height: "4rem",
    position: "fixed",
    bottom: "5rem",
    right: "5rem",
  },
});

const Table = () => {
  const history = useHistory();

  const companies = useSelector(
    (state: IApplicationState) => state.companies.data
  );

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <MuiTable stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={column.style}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {companies
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      key={row.id}
                      className={classes.tableRow}
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      onClick={() =>
                        history.push(`/cms/javne-ustanove-preduzeca/${row.id}`)
                      }
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
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
          </MuiTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={companies.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <Button
        className={classes.addButton}
        variant="contained"
        color="primary"
        size="medium"
        onClick={() => history.push(`/cms/javne-ustanove-preduzeca/add`)}
      >
        <AddIcon fontSize="large" />
      </Button>
    </>
  );
};

export default Table;