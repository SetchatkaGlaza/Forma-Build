import {$,$$,folder} from './utils.js';
const B=import.meta.env.BASE_URL;
const D=[['Бетон','architecture-detail','Фактура опалубки остаётся на виду и придаёт фасаду выразительность без лишней отделки.','Фактура бетона и чёрная рама окна'],
['Дерево','project-residence-gallery-2','Тёплый контраст к бетону: фасадные панели и интерьеры. Породу и защиту подбираем под условия участка.','Деревянная облицовка рядом с бетонной консолью'],
['Стекло','project-horizon-gallery-1','Панорамное остекление связывает дом с участком. Размер и тип стекла обсуждаем на этапе проекта.','Гостиная с панорамным остеклением'],
['Сталь','architecture-detail-2','Тонкие рамы, ограждения и лестницы. Графитовый металл подчёркивает геометрию объёма.','Стальное ограждение и консоль балкона']];
const tabs=$('.tabs'),img=$('#matImg');let cur=0;
tabs.innerHTML=D.map((d,i)=>`<button class="tab${i?'':' on'}" role="tab" id="tab${i}" aria-selected="${!i}" tabindex="${i?-1:0}" aria-controls="matPanel">${d[0]}</button>`).join('');
$('#matPanel').setAttribute('aria-labelledby','tab0');
const set=i=>{cur=i;$$('.tab',tabs).forEach((b,j)=>{b.classList.toggle('on',j===i);b.setAttribute('aria-selected',j===i);b.tabIndex=j===i?0:-1});
 $('#matPanel').setAttribute('aria-labelledby','tab'+i);img.classList.add('swap');
 setTimeout(()=>{img.src=`${B}images/${folder(D[i][1])}/${D[i][1]}${innerWidth<768?'-m':''}.webp`;img.alt=D[i][3];$('#matT').textContent=D[i][0];$('#matP').textContent=D[i][2];img.classList.remove('swap')},220)};
tabs.onclick=e=>{const b=e.target.closest('.tab');if(b)set([...tabs.children].indexOf(b))};
tabs.onkeydown=e=>{const k={ArrowRight:1,ArrowLeft:-1}[e.key];if(!k)return;e.preventDefault();const n=(cur+k+D.length)%D.length;set(n);tabs.children[n].focus()};
