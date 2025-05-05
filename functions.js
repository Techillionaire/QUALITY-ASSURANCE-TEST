module.exports = {
    beforeRequest: (requestParams, context, ee, next) => {
      console.log("Sending request to:", requestParams.url);
      return next();
    },
  };
  