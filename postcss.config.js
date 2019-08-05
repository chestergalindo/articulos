module.exports = {
     plugins: [
        // require('autoprefixer')({
        //     grid: true,
        // }),
        require('postcss-apply'),
        require('postcss-custom-media')({
            preserve: false,
        }),
        require('postcss-preset-env')({
            preserve: false,
            stage: 1,
            features:{
                autoprefixer: {
                    grid: true,
                    }
                }
            }
        ),
        require('cssnano')
    ]
}
            //     browsers: [
        //  
            //    "last 2 version", // para soporte estandar
            //     "> 1%",
            //     "not dead"
            //     ],
                // stage: 3, //usar los ultimos feactures de css
                // features: {
                // 'nesting-rules': true
