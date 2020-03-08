const { dest, src, series, parallel } = require('gulp'),
    del = require('del');

// ###########################################################################################

//Cleaning previous gulp tasks from project
const cleanAssetFonts = () => {
    return del(['src/assets/fonts/*']);
};

const copyLibFonts = () => {
    return src(['projects/ea-ui/src/assets/fonts/**/*']).pipe(dest('src/assets/fonts'));
};

//Cleaning previous gulp tasks from project
const cleanAssetImages = () => {
    return del(['src/assets/images/*']);
};

const copyLibImages = () => {
    return src(['projects/ea-ui/src/assets/images/**/*']).pipe(dest('src/assets/images'));
};

//Building demo app
exports.demoPretasks = parallel(series(cleanAssetFonts, copyLibFonts), series(cleanAssetImages, copyLibImages));
