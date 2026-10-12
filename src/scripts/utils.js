export const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
export const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
export const folder=n=>({hero:'hero',about:'about',project:'projects',service:'services',quality:'quality',architecture:'details',construction:'process',budget:'budget',faq:'faq'})[n.split('-')[0]];
