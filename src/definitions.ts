declare module "@capacitor/core" {
  interface PluginRegistry {
    StartNavigationPlugin: StartNavigationPluginPlugin;
  }
}

export interface StartNavigationPluginPlugin {
  /**
   * Opens the native maps applications with directions started
   * @param options 
   * @returns Promise 
   */
  launchMapsApp(options: { 
    latitude: number,
    longitude: number,
    name?: string
  }): Promise<void>;
}
