import { ConfigEnv, defineConfig, loadEnv, UserConfigExport } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfigExport => {
	const root = process.cwd()
	const env = loadEnv(mode, root)
	const { VITE_BASE_URL } = env
	console.log('')

	process.env = { ...process.env, ...loadEnv(mode, root) }

	return defineConfig({
		base: VITE_BASE_URL,
		plugins: [
			react(),
			AutoImport({
				imports: ['react', 'react-router-dom'],
				// dirs: ['src/components/*'],
			}),
		],
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
			},
		},
		server: {
			hmr: { overlay: false }, // 为 false 可以禁用服务器错误遮罩层
			port: 6127,
			open: false,
			host: '0.0.0.0',
		},
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
					additionalData: '@import "@/styles/global.less";',
				},
			},
		},
    build: {
      cssCodeSplit: false, // 整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
      rollupOptions: {
        // 指定生成静态资源的存放路径
        output: {
          chunkFileNames: 'js/[name].[hash].js',
          entryFileNames: 'js/[name].[hash].js',
          assetFileNames: '[ext]/[name].[hash].[ext]',
        },
      },
    },
	})
}
