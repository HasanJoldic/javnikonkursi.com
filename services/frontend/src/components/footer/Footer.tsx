import React from "react";

import { Box, Paper, Typography, Theme, Divider, Link } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { makeStyles, createStyles } from "@mui/styles";

import { ERegion } from "@javnikonkursi/shared";

import { darkTheme } from "theme";

export const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <Box position="relative" zIndex={darkTheme.zIndex.drawer}>
        <Paper square>
          <Divider />

          <footer className={classes.footer}>
            <div className={classes.linksContainer}>
              <Typography variant="subtitle2">Službe za zapošljavanje:</Typography>
              <Link href="http://usk-szz.ba/nova/oglasi.php" target="blank">
                {ERegion.USK}
              </Link>
              <Link
                href="https://www.facebook.com/Slu%C5%BEba-za-zapo%C5%A1ljavanje-USK-a-507371329352460/"
                target="blank"
              >
                {ERegion.USK} | Facebook
              </Link>
              <Link href="http://www.szuzp.ba/nova-stranica-3.aspx" target="blank">
                {ERegion.PK}
              </Link>
              <Link href="https://szztk.ba/category/oglasi/" target="blank">
                {ERegion.TK}
              </Link>
              <Link href="http://zdk-szz.ba/searchadvert" target="blank">
                {ERegion.ZDK}
              </Link>
              <Link href="https://szzbpk.ba/oglasikonkursi.html" target="blank">
                {ERegion.BPK}
              </Link>
              <Link href="http://szzksbsbk.com.ba/oglasi-za-posao/" target="blank">
                {ERegion.SBK}
              </Link>
              <Link href="https://szzhnz-k.ba/natjecaji.php" target="blank">
                {ERegion.HNK}
              </Link>
              <Link href="http://szz-zzh.ba/category/oglasi/" target="blank">
                {ERegion.ZHK}
              </Link>
              <Link href="https://szks.ba/posao/" target="blank">
                {ERegion.KS}
              </Link>
              <Link href="http://zzzu-livno.ba/oglasi/page/1" target="blank">
                {ERegion.K10}
              </Link>
              <Link
                href="http://www.zzzrs.net/index.php/nezaposleni/oglasi_zavoda/search&exact-filijala=1"
                target="blank"
              >
                {ERegion.BANJALUCKA_REGIJA} | Banja Luka
              </Link>
              <Link
                href="http://www.zzzrs.net/index.php/nezaposleni/oglasi_zavoda/search&exact-filijala=5"
                target="blank"
              >
                {ERegion.BANJALUCKA_REGIJA} | Prijedor
              </Link>
              <Link
                href="http://www.zzzrs.net/index.php/nezaposleni/oglasi_zavoda/search&exact-filijala=2"
                target="blank"
              >
                {ERegion.DOBOJSKO_BIJELJINJSKA_REGIJA} | Bijeljina
              </Link>
              <Link
                href="http://www.zzzrs.net/index.php/nezaposleni/oglasi_zavoda/search&exact-filijala=3"
                target="blank"
              >
                {ERegion.DOBOJSKO_BIJELJINJSKA_REGIJA} | Doboj
              </Link>
              <Link
                href="http://www.zzzrs.net/index.php/nezaposleni/oglasi_zavoda/search&exact-filijala=4"
                target="blank"
              >
                {ERegion.SARAJEVSKO_ZVORNICKA_REGIJA} | Istočno Sarajevo
              </Link>
              <Link
                href="http://www.zzzrs.net/index.php/nezaposleni/oglasi_zavoda/search&exact-filijala=7"
                target="blank"
              >
                {ERegion.SARAJEVSKO_ZVORNICKA_REGIJA} | Zvornik
              </Link>
              <Link
                href="http://www.zzzrs.net/index.php/nezaposleni/oglasi_zavoda/search&exact-filijala=6"
                target="blank"
              >
                {ERegion.TREBINJSKO_FOCANSKA_REGIJA}
              </Link>
              <Link href="https://zzzbrcko.org/index.php/konkursi2016" target="blank">
                {ERegion.BRCKO_DISTRIKT}
              </Link>
            </div>

            <div>
              <Typography variant="subtitle2">
                Kontakt: <Typography color="primary">h.joldic@enki.ba</Typography>
              </Typography>
            </div>
          </footer>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      padding: theme.spacing(5),
      display: "flex",
      justifyContent: "space-around",

      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "flex-start",

        "& > div": {
          marginBottom: "5rem",
        },
      },
    },
    linksContainer: {
      display: "flex",
      flexDirection: "column",
      "& > a": {
        lineHeight: 2,
      },
    },
  })
);
