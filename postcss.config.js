module.exports = {
  plugins: [
    require('autoprefixer')(),
    require('cssnano')({
      presets: "default"
    })
  ]
}
