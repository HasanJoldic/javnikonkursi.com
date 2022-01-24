import React from "react";

import { Box, Divider, Chip, Typography, Paper, Button, styled } from "@mui/material";
import {
  Place as PlaceIcon,
  People as PeopleIcon,
  BusinessRounded as BusinessRoundedIcon,
  OpenInNew as OpenInNewIcon,
} from "@mui/icons-material";

import { ArrayElement } from "@javnikonkursi/shared";

import { GetJobsQuery } from "generated/types";
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

const Buttons = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    justifyContent: "space-between",
  },
  [theme.breakpoints.down("md")]: {
    display: "grid",
    ".MuiButton-root": {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
  },
}));

interface IProps {
  job: ArrayElement<GetJobsQuery["jobs"]["nodes"]>;
  // occupation: EJobType;
}

export const Job: React.FC<IProps> = (props) => {
  const { job } = props;

  return (
    <Paper id={job.id} sx={{ maxWidth: "50rem", padding: "2rem 1rem", marginBottom: "2rem" }} square={true}>
      <Typography variant="h5">{job.title}</Typography>
      <Divider />
      <Header>
        <Chips>
          <Chip icon={<PlaceIcon />} label={job.region.title} />
          <Chip icon={<PeopleIcon />} label={job.jobType?.title} />
          <Chip icon={<BusinessRoundedIcon />} label={job.company.title} />
        </Chips>
        <div></div>
      </Header>
      <Divider />
      <Box pt={1}>
        <Typography>Objavljeno: {momentFormat(job.startDate, EDateFormat["DD.MM.YYYY"])}</Typography>
        <br />
        <Typography>Ističe: {momentFormat(job.endDate, EDateFormat["DD.MM.YYYY"])}</Typography>
        <br />
        <Buttons>
          <Box>
            <RouterButton variant="contained" color="primary" id={job.id} link={`job/${job.id}`}>
              Opširnije
            </RouterButton>
          </Box>
          <Box>
            <Button
              target="_blank"
              href={job.externalUrl}
              variant="outlined"
              color="primary"
              endIcon={<OpenInNewIcon />}
              sx={{ mr: 2 }}
            >
              Link (izvorni oglas)
            </Button>
            <Button
              target="_blank"
              href="https://www.globalmoneyweek.org/images/flags/bosnia-and-herzegovina-flag-round.png"
              variant="outlined"
              color="primary"
              endIcon={<OpenInNewIcon />}
            >
              Link (arhivirani oglas)
            </Button>
          </Box>
        </Buttons>
      </Box>
    </Paper>
  );
};
