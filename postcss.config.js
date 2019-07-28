module.exports = {
     plugins: [
         require("postcss-apply"),
         require("postcssCustomMedia")({
            preserve: true,
        }),
         require("postcss-preset-env")({
            autoprefixer: {
                grid: true
                }
                browsers: [
               "last 2 version", // para soporte estandar
                "> 1%",
                "not dead"
                ],
                stage: 3, //usar los ultimos feactures de css
                features: {
                'nesting-rules': true
        })
    ]
}
