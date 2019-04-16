#!/bin/bash

###############################################################################
#
# RUN THIS TO INSTALL NODE DEPENDENCIES
#
###############################################################################

# check to see if npm is installed.
NPM_LOCATION="$(which npm)"

if [ -z "$NPM_LOCATION" ]
then
    echo "Please install npm and run this script again."
    exit 0
fi

npm install
