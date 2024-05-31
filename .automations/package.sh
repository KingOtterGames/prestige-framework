LIB_VERSION=$(npm pkg get version --workspaces=false | tr -d \")
NAME=$(npm pkg get name --workspaces=false | tr -d \")
FULL="full_v$LIB_VERSION"
DEMO="demo_v$LIB_VERSION"

rimraf ./package
mkdir package

npm run package:clean
npm run package:build:full
npm run package:pack
7z a -tzip ./package/$FULL-STEAM.zip ./dist/win-unpacked/*

npm run package:clean
npm run package:build:demo
npm run package:pack
7z a -tzip ./package/$DEMO-STEAM.zip ./dist/win-unpacked/*

# STEAM RELEASE
mkdir package/"$NAME"_v"$LIB_VERSION"
mv package/$FULL-STEAM.zip package/"$NAME"_v"$LIB_VERSION"
mv package/$DEMO-STEAM.zip package/"$NAME"_v"$LIB_VERSION"