import path from 'path'

const config = {
    webpack: {
        alias: {
            '@modules': path.resolve(__dirname, 'src/modules'),
            '@core': path.resolve(__dirname, 'src/core'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@views': path.resolve(__dirname, 'src/views'),
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
    },
}

export default config
