#!/bin/bash

if [ ${ENV} = "development" ];
  then yarn install;
  else yarn install --frozen-lockfile;
fi