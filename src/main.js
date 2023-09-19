import { createApp } from 'vue'
import './reset.css'
import components from "./components/UI";
import App from './App.vue'
import directives from './directives';

const app = createApp(App);

components.forEach(component => {

    app.component(component.name, component);
});

directives.forEach(directive => {
    app.directive(directive.name, directive)
});


app.mount('#app')
