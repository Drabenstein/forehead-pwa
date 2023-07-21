export interface Config {
  apiUrl: string;
  apiKey: string;
}

export const defaultConfig: Config = {
  apiUrl: "http://localhost:5194/api",
  apiKey: "1234567890",
};

class GlobalConfig {
  config: Config = defaultConfig;
}

export const globalConfig = new GlobalConfig();

export const globalConfigUrl = "config.json";
