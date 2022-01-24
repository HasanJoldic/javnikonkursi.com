#!/bin/bash

if [ ${ENV} = "development" ];
  then yarn workspace @javnikonkursi/frontend run build:dev;
  else yarn workspace @javnikonkursi/frontend run build;
fi