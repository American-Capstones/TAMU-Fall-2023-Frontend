/// <reference types="react" />
import * as react from 'react';
import * as _backstage_core_plugin_api from '@backstage/core-plugin-api';

declare const tamuFall2023FrontendPlugin: _backstage_core_plugin_api.BackstagePlugin<{
    root: _backstage_core_plugin_api.RouteRef<undefined>;
}, {}, {}>;
declare const TamuFall2023FrontendPage: () => react.JSX.Element;

export { TamuFall2023FrontendPage, tamuFall2023FrontendPlugin };
