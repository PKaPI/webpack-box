module.exports = (config, resolve) => {
  return () => {
    config
      // 入口名称
      .entry('src/app')
      // 入口路径
      .add(resolve('src/main.js'))
      .end()
      .entry('src/app2')
      .add(resolve('src/home.js'))
      .end()
      // 模式 "production" | "development" | "none"
      // .mode(process.env.NODE_ENV) 等价下面
      .set('mode', "development"/* process.env.NODE_ENV */)
      // 出口
      .output
      .path(resolve('dist'))
      .filename('[name].bundle.js')
      .chunkFilename('[name].chunk.js');
  }
}