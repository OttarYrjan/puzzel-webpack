import HelloWorldButton from './components/hello-world-button/hello-world-button.js';

import PuzzelStartUp from './components/puzzel/puzzel-startup';


const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

const puzzel = new PuzzelStartUp();
puzzel.main();