/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-designer-tools MoBrix-designer-tools} functions
 *
 * @see https://cianciarusocataldo.github.io/mobrix-designer/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import {
  MoBrixDesignerPlugin,
  MoBrixDesignerPluginParameters,
} from "mobrix-designer-types";

/**
 * create a standard {@link https://github.com/CianciarusoCataldo/mobrix-designer MoBrix-designer} plugin
 *
 * @param feature (required) plugin feature name, to let other plugins know when it is enabled
 * @param pluginCallback (optional) a callback function that returns plugin parameters
 *
 * @returns a ready to use {@link https://github.com/CianciarusoCataldo/mobrix-designer MoBrix-designer} plugin
 *
 * @see https://cianciarusocataldo.github.io/mobrix-designer/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const createMoBrixDesignerPlugin = (
  feature: string,
  pluginCallback?: () => MoBrixDesignerPluginParameters
): MoBrixDesignerPlugin => {
  function pluginCreator() {
    const pluginOutput = pluginCallback ? pluginCallback() : {};
    return pluginOutput;
  }

  pluginCreator.toString = function () {
    return "mobrix-designer plugin " + feature;
  };
  pluginCreator.type = "mobrix-designer-plugin";
  pluginCreator.feature = feature;
  pluginCreator.match = function (pluginCreator: MoBrixDesignerPlugin) {
    return pluginCreator.feature === feature;
  };

  return pluginCreator;
};
