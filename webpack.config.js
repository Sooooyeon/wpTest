// import 하는 노드 JS 문법입니다.
const path = require('path');
const webpack = require('webpack');


// 모듈을 밖으로 빼내는 노드 JS문법입니다. 엔트리, 아웃풋 그리고 번들링 모드를 설정할 수 있습니다.
module.exports = {
    mode : 'development',
    entry : {
        main: path.resolve('./src/app.js')
    },
    output: {
        filename: '[name].js',
        // main에 있는 경로가 [name]으로 들어오게됨

        path: path.resolve('./dist')
    },
    module:{
        // 로더를 추가하는 장소입니다.
        rules: [
            // {
            //     test: /\.js$/,
            //     // js포맷인 파일 모두를 의미

            //     use:[
            //         path.resolve('./myLoader.js')
            //     ]
            // }
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type:'asset',
                parser:{
                    dataUrlCondition:{
                        maxSize: 80 * 1024
                        // 1024 => 1KB
                    }
                }
            }
        ]
    },
    plugins :[
        new webpack.BannerPlugin({
            banner:`마지막 빌드 시간은 : ${new Date().toLocaleString()} 입니다.`
        })
    ]
}