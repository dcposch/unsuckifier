#!/usr/bin/env bash
#
# This script assumes a linux environment

echo "*** Unsuckifier.chromium: Creating web store package"
echo "*** Unsuckifier.chromium: Copying files"

DES=dist/build/Unsuckifier.chromium
rm -rf $DES
mkdir -p $DES

./tools/make-assets.sh $DES

cp -R src/css               $DES/
cp -R src/img               $DES/
cp -R src/js                $DES/
cp -R src/lib               $DES/
cp -R src/_locales          $DES/
cp -R $DES/_locales/nb      $DES/_locales/no
cp src/*.html               $DES/
cp platform/chromium/*.js   $DES/js/
cp -R platform/chromium/img $DES/
cp platform/chromium/*.html $DES/
cp platform/chromium/*.json $DES/
cp LICENSE.txt              $DES/

if [ "$1" = all ]; then
    echo "*** Unsuckifier.chromium: Creating package..."
    pushd $(dirname $DES/) > /dev/null
    zip Unsuckifier.chromium.zip -qr $(basename $DES/)/*
    popd > /dev/null
fi

echo "*** Unsuckifier.chromium: Package done."
