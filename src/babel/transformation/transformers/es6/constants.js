import * as messages from "../../../messages";

/**
 * [Please add a description.]
 */

export var visitor = {

  /**
   * [Please add a description.]
   */

  Scope(node, parent, scope) {
    for (var name in scope.bindings) {
      var binding = scope.bindings[name];

      // not a constant
      if (binding.kind !== "const" && binding.kind !== "module") continue;

      for (var violation of (binding.constantViolations: Array)) {
        throw violation.errorWithNode(messages.get("readOnly", name));
      }
    }
  },

  /**
   * [Please add a description.]
   */

  VariableDeclaration(node) {
    if (node.kind === "const") node.kind = "let";
  }
};
