const {gitDescribe, gitDescribeSync} = require('git-describe');
process.env.VUE_APP_GIT_HASH = gitDescribeSync().hash.substring(1);

module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
      disableHostCheck: true
  }
};
