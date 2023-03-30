import {company} from './configuration.js'
import {year} from './configuration.js'

// let message = '© " + company + " (" + year + "")';


const message = ` ${'©'} ${company} ${year}`;



document.querySelector('footer').innerHTML = message;

