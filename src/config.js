const dev = {
  appSyncConfig: {
    aws_appsync_graphqlEndpoint: process.env.REACT_APP_AWS_APPSYNC_GRAPHQL_ENDPOINT,
    aws_appsync_region: process.env.REACT_APP_AWS_APPSYNC_REGION,
    aws_appsync_authenticationType: process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATION_TYPE,
    aws_appsync_apiKey: process.env.REACT_APP_AWS_APPSYNC_API_KEY,
  }
};

// const prod = {
// };

const config = dev; // process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  ...config
};