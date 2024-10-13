import { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol, ScreenSpinner, ConfigProvider, AdaptivityProvider } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { Persik, Home, First } from './panels';
import { DEFAULT_VIEW_PANELS } from './routes';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.FIRST } = useActiveVkuiLocation();
  const [fetchedUser, setUser] = useState();
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  return (
//<Home id="home" fetchedUser={fetchedUser} />
    <ConfigProvider>
      <AdaptivityProvider>
        <SplitLayout popout={popout}>
          <SplitCol>
            <View activePanel={activePanel}>
              <First id="first" fetchedUser={fetchedUser}/>
              {/* <Home id='home'/> */}
              <Persik id="persik" />
            </View>
          </SplitCol  >   
        </SplitLayout>
      </AdaptivityProvider>
    </ConfigProvider>

    
  );
};
