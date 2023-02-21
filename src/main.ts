import {createApp} from 'vue'
import App from './App.vue'

import './styles/normalize.css'
import './styles/main.css';
import './styles/index.scss';
import 'viewerjs/dist/viewer.css';

const app = createApp(App)

app.mount('#app')
