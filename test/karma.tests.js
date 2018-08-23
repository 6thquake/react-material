import './utils/performance';
import './utils/init';

const integrationContext = require.context(
  '../packages/react-material/test/integration',
  true,
  /\.test\.js$/,
);
integrationContext.keys().forEach(integrationContext);

const unitContext = require.context('../packages/react-material/src/', true, /\.test\.js$/);
unitContext.keys().forEach(unitContext);
