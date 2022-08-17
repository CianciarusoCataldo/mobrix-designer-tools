import PKG from "../../package.json";

import createMoBrixDesignerPluginTests from "../test-suites/createMoBrixDesignerPlugin";

describe(`\n        ## ${PKG.name} v${PKG.version} - unit tests ##        \n`, () => {
  createMoBrixDesignerPluginTests();
});
