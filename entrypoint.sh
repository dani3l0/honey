#!/bin/sh
cp -rnv /app/public/config/* /app/dist/config
npm run preview
exit $?
