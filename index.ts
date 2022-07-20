// Import stylesheets
import './style.css';
import { foo } from './test';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${foo}</h1>`;
