import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { Box, Typography, Paper, Divider, Button, styled, Toolbar, Chip } from "@mui/material";
import { Place as PlaceIcon, People as PeopleIcon, BusinessRounded as BusinessRoundedIcon } from "@mui/icons-material";

import { momentFormat, EDateFormat } from "utils";

import { RouterButton } from "components";

const Header = styled("div")(({ theme }) => ({
  padding: "1rem 0",
  [theme.breakpoints.up("md")]: {
    "& > div": {
      display: "flex",
      alignItems: "center",
    },
  },
}));

const Chips = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    "& > .MuiChip-root": {
      marginRight: "2rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",

    "& > .MuiChip-root": {
      marginBottom: ".5rem",
    },
  },
  "& > *": {
    backgroundColor: "#fff",
  },
}));

import { IApplicationState } from "store";

import { Main } from "components";

export const JobDetail: React.FC = () => {
  const { id: jobId } = useParams<{ id: string }>();
  const jobs = useSelector((state: IApplicationState) => state.jobs.data);
  const job = jobs.find((job) => job.id === jobId);

  return (
    <>
      <Toolbar />
      <Box>
        <Main noMenu>
          <Box width="100%" display="flex" justifyContent="center" p={5}>
            <Paper elevation={5}>
              <Box py={5} px={2}>
                <Typography variant="h5">{job?.title}</Typography>
                <Divider />
                <Header>
                  <Chips>
                    <Chip icon={<PlaceIcon />} label={job?.region?.title} />
                    <Chip icon={<PeopleIcon />} label={job?.jobType?.title} />
                    <Chip icon={<BusinessRoundedIcon />} label={job?.company?.title} />
                  </Chips>
                  <div></div>
                </Header>
                <Divider />
                <Box pt={1}>
                  <Typography>Objavljeno: {momentFormat(job?.startDate, EDateFormat["DD.MM.YYYY"])}</Typography>
                  <br />
                  <Typography>Ističe: {momentFormat(job?.endDate, EDateFormat["DD.MM.YYYY"])}</Typography>
                  <br />
                  <Box display="flex" justifyContent="space-between">
                    <Box>
                      <RouterButton variant="contained" color="primary" id={job?.id} link={`job/${job?.id}`}>
                        Opširnije
                      </RouterButton>
                    </Box>
                    <Box>
                      <Button href={job?.externalUrl} variant="outlined" color="primary" sx={{ mr: 2 }}>
                        Link (izvorni oglas)
                      </Button>
                      <Button href={job?.internalUrl} variant="outlined" color="primary">
                        Link (arhivirani oglas)
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Main>
      </Box>
    </>
  );
};
