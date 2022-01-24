import React from "react";
import { useLocation, useHistory } from "react-router-dom";

export const ScrollToTop: React.FC = () => {
  const [dist, setDist] = React.useState(0);

  const hashRef = React.useRef<string>();
  const actionRef = React.useRef<string>();
  const distRef = React.useRef<number>();

  const { pathname, hash } = useLocation();
  const { action } = useHistory();

  hashRef.current = hash;
  actionRef.current = action;

  React.useEffect(() => {
    if (actionRef.current === "PUSH") {
      // const el = document.querySelector(hashRef.current);
      // var elDistanceToTop = window.pageYOffset + (el?.getBoundingClientRect()?.top || 0);
      setDist(window.pageYOffset);
    }
  }, [pathname]);

  React.useEffect(() => {
    if (action === "POP") {
      setDist(distRef.current);
    }
  }, [action]);

  // React.useEffect(() => {
  //   if (hash) {
  //     const el = document.querySelector(hash);
  //     if (el) {
  //       setTimeout(() => el.scrollIntoView(), 1000);
  //     }
  //   }
  // }, [hash]);

  return null;
};
