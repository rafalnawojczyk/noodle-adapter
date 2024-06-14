import ExpoModulesCore

public class NoodleAdapterModule: Module {
  public func definition() -> ModuleDefinition {
    Name("NoodleAdapter")

    Function("getTheme") { () -> String in
      "system"
    }
  }
}