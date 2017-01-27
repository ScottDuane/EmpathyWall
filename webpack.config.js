module.exports = {
  entry: "./frontend/empathy_wall.jsx",
  output: {
    path: "app/assets/javascripts",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
    noParse: /node_modules\/quill\/dist/
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["",".js", ".jsx" ]
  }
};
