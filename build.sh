#!/bin/bash

###############################################################################
#
# RUN THIS TO BUILD FOR IOS/ANDROID
#
###############################################################################

EXPECTED_ARGS=2
# make sure the correct number of arguments were passed.
if [ $# -ne $EXPECTED_ARGS ] || [ $1 == "-h" ]
then
    echo "Usage: ./build.sh <release OR debug> <platform>"
    exit 0
fi
# check to see if ionic is installed.
IONIC_LOCATION="$(which ionic)"

if [ -z "$IONIC_LOCATION" ]
then
    echo "Please install ionic and run this script again."
    exit 0
fi

# make sure the build is for one of the supported platforms.
if [ $2 != "ios" ] && [ $2 != "android" ]
then
    echo "Build type MUST be either ios or android."
    exit 0
fi

# make sure the build type is either for release or debugging/testing.
if [ $1 == "release" ]
then
    ionic cordova build $2 --prod --release
elif [ $1 == "debug" ]
then
    ionic cordova build $2
fi
