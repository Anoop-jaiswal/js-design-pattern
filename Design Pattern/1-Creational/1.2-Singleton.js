const ConfigManager = (function () {
  let instance;

  function createInstance() {
    return {
      appName: "MyApp",
      version: "1.0.0",
      getConfig: function () {
        return `App: ${this.appName}, Version: ${this.version}`;
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Usage
const config1 = ConfigManager.getInstance();

console.log(config1.getConfig()); // "App: MyApp, Version: 1.0.0"

// The Singleton pattern is a design pattern that restricts the instantiation
//  of a class to a single instance. It ensures there is only one
// instance of the class and provides a global access point to that instance.
//  This pattern is commonly used to manage shared resources, such as a
//  database connection or a configuration manager.
