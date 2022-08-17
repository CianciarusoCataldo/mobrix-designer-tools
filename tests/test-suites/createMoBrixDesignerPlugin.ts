import { createMoBrixDesignerPlugin } from "../../src/helpers/utils";

const createMoBrixDesignerPluginTests = () => {
  describe("\n   createMoBrixDesignerPlugin", () => {
    describe("\n     create a valid MoBrix-designer plugin", () => {
      test("with callback", () => {
        const resultPlugin = createMoBrixDesignerPlugin(
          "test-feature",
          () => ({})
        );
        expect(resultPlugin.feature).toBe("test-feature");
        expect(resultPlugin.toString()).toBe(
          "mobrix-designer plugin test-feature"
        );
        expect(
          resultPlugin.match(createMoBrixDesignerPlugin("test-feature"))
        ).toBe(true);

        expect(resultPlugin()).toStrictEqual({});
      });

      test("without callback", () => {
        const resultPlugin = createMoBrixDesignerPlugin("test-feature");
        expect(resultPlugin.feature).toBe("test-feature");
        expect(resultPlugin.toString()).toBe(
          "mobrix-designer plugin test-feature"
        );
        expect(
          resultPlugin.match(createMoBrixDesignerPlugin("test-feature"))
        ).toBe(true);
        expect(resultPlugin()).toStrictEqual({});
      });
    });
  });
};

export default createMoBrixDesignerPluginTests;
