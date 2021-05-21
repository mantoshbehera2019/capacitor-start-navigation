npm i https://github.com/mantoshbehera2019/capacitor-start-navigation.git --save

Capacitor plugin that allows your app to start native navigation


## API

| method            | info                                          | platform    |
| ----------------- | --------------------------------------------- | ----------- |
| `launchMapsApp`     | Launches native maps with navigation started.                        | ios/android |


## Usage

```ts
import { Plugins } from "@capacitor/core";
const { StartNavigationPlugin } = Plugins;

//
// with type support
import { StartNavigationPlugin } from "@proteansoftware/capacitor-start-navigation";
const startNavigation = new StartNavigationPlugin();

//
// alternatively - without types
const { StartNavigationPlugin } = Plugins;

//
// launches native maps with directions to Warwick, UK
StartNavigationPlugin.launchMapsApp({
  latitude: 52.28333,
  longitude: -1.58333,
  name: "Example location"
});

```

> on your `MainActivity.java` file add `import com.servicesight.capacitor.startnavigation.StartNavigationPlugin;
` and then inside the init callback `add(StartNavigationPlugin.class);`

Now you should be set to go. Try to run your client using `ionic cap run android --livereload`.

## License

MIT
