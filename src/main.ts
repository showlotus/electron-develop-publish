import { createApp } from 'vue'

import App from './App.vue'
import './demos/ipc'
import './style.css'

// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

createApp(App).mount('#app')
