export type SettingsModel = {
  tooltips: boolean;
  paperdoll: boolean;
  scoreboard: boolean;
  backpack: boolean;
  settings: boolean;
  log: boolean;
};

export const defaultSettings: SettingsModel = {
  tooltips: true,
  paperdoll: true,
  scoreboard: true,
  backpack: true,
  settings: false,
  log: true,
};
