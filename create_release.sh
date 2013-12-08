#!/bin/bash

[ -d releases ] || mkdir releases
git checkout $1 &&
zip  releases/insert-jquery-$1.zip $(git ls-files | grep extension/) &&
echo releases/insert-jquery-$1.zip &&
git checkout -
