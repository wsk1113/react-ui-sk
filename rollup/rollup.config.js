/*
 * @Author: 2363430948@qq.com wangshaokang@example.com
 * @Date: 2023-08-09 21:03:16
 * @LastEditors: 2363430948@qq.com wangshaokang@example.com
 * @LastEditTime: 2023-08-10 09:05:17
 * @FilePath: \react-project\rollup\rollup.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* 
引入所有可能需要的rollup插件 
@rollup/plugin-xxx 官方插件
rollup-plugin-xxx 野鸡插件（此处野鸡无贬义）
*/
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import autoExternal from 'rollup-plugin-auto-external';
import copy from 'rollup-plugin-copy';
import svg from 'rollup-plugin-svg';

/* 对外导出打包配置对象 */
export default {

  // 入口文件路径 开始分析依赖
  input: 'src/index.ts',

  /* 输出配置 */
  output: {
    file: 'dist/bundle.es.js', // 输出文件路径（ES格式）
    format: 'es', // 输出模块格式 组件库es就够了
    sourcemap: true, // 生成打包代码反查源代码位置的source-map文件 体积较大 如果对体积敏感可以设为false
  },

  /* 一堆插件 执行顺序按照配置的先后顺序执行 */
  plugins: [

    // 梳理优化同级依赖
    peerDepsExternal(),

    // 自动引入需要的外部依赖
    autoExternal(),

    // 解析node模块路径
    resolve(),

    // 将CommonJS模块转换为ES模块
    commonjs(),

    // 处理TypeScript
    typescript({
      declaration: true, // 输出类型声明文件
      declarationDir: 'dist', // 类型声明文件的输出目录
    }),

    // babel配置
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**', // Babel转换要排除的文件夹
    }),

    // 处理CSS（默认添加浏览器兼容前缀）
    postcss(),

    //处理 SVG 文件
    svg(),

    /* 文件拷贝 */
    copy({
      
      targets: [
        // 拷贝包定义文件到dist
        { src: 'rollup/package.json', dest: 'dist' },

        // 拷贝README到dist 将来会显示在NPM包的主页上
        { src: 'rollup/README.md', dest: 'dist' },

        // 拷贝组件库的类型声明文件到dist
        { src: 'rollup/index.d.ts', dest: 'dist' },

        // 拷贝组件的类型声明文件到dist
        { src: 'rollup/types', dest: 'dist' },
      ],

      // 可选配置:
      // 如果设置为 true，则执行文件覆盖操作
      // 默认为 false，即不覆盖已存在的文件
      copyOnce: true,
    }),

  ],

};