export interface Config {
  apiUrl: string;
}

export const defaultConfig: Config = {
  apiUrl: "http://localhost:5194/api",
};

class GlobalConfig {
  config: Config = defaultConfig;
}

export const globalConfig = new GlobalConfig();

export const globalConfigUrl = "config.json";
