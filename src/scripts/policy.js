import {$,$$} from './utils.js';
const d=$('#policy');$$('[data-policy]').forEach(a=>a.onclick=e=>{e.preventDefault();d.showModal()});
$('.pclose',d).onclick=()=>d.close();d.onclick=e=>{if(e.target===d)d.close()};
