import { useEffect, useState } from "react";
import { Config, globalConfig, globalConfigUrl } from "./config";
import GlobalSpinnerFallback from "./shared/GlobalSpinnerFallback";
import ErrorPage from "./shared/ErrorPage";

type ConfigLoaderProps = {
  children: React.ReactNode;
};

const ConfigLoader = ({ children }: ConfigLoaderProps) => {
  const [isConfigLoading, setIsConfigLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchConfig = async () => {
      const request = fetch(globalConfigUrl)
        .then(async (response) => {
          globalConfig.config = (await response.json()) as Config;
          setIsConfigLoading(false);
        })
        .catch((err) => {
          setError(`$Błąd pobierania konfiguracji 😥 ${err.message}`);
          setIsConfigLoading(false);
        });

      await request;
    };

    fetchConfig();
  }, []);

  if (isConfigLoading) {
    return <GlobalSpinnerFallback />;
  } else if (error) {
    return <ErrorPage additionalErrorMessage={error} />;
  } else {
    return children;
  }
};

export default ConfigLoader;
