import * as respond from './respond';
import * as timer from './timer';

export const plugins = { respond, timer };

export function getInitialState() {
  return Object.keys(plugins).reduce((obj, key) => {
    const plugin = plugins[key];
    obj[key] = {
      name: key,
      displayName: plugin.displayName,
      enabled: false,
      hasSettingsPane: !!plugin.SettingsPane,
      settings: plugin.getInitialSettings ? plugin.getInitialSettings() : {}
    };
    return obj;
  }, {});
}

let store;
export function connectStore(_store) {
  store = _store;
}

export function getStore() {
  return store;
}
