const MENU=[
 {id:"itik",name:"Itik",note:"house specialty",hl:true,items:[["Fried Itik",295],["Spicy Adobo",380],["Sisig Itik",380],["Dinakdakang Itik",380],["Itik Estofado",380],["Itiksilog",149]]},
 {id:"pork",name:"Pork",items:[["Crispy Ulo",700],["Crispy Pata",650],["Pork Sinigang",230,1],["Pork Sisig",209],["Pork Dinakdakan",209],["Chicharon Bulaklak",209],["Mongolian Pork",209],["Lechon Kawali",190]]},
 {id:"seafoods",name:"Seafoods",items:[["Seafoods Sinigang",289,1],["Mixed Seafoods",259],["Kinilaw na Tuna",249],["Salmon Sinigang",230,1],["Shrimp Sinigang",209,1],["Crispy Hito",149],["Crispy Salmon Skin",130]]},
 {id:"beef",name:"Beef",items:[["Beef Bulalo",209,1],["Beef Tapa",209],["Beef & Mushroom",209],["Beef Pigar-Pigar",209],["Beef Ampalaya",209],["Beef Sinigang",209,1],["Beef Papaitan",209,1]]},
 {id:"vegetables",name:"Vegetables",items:[["Chopsuey",189],["Pinakbet",189],["Stir Fried Tofu",189],["Binagoongang Talong",179]]},
 {id:"chicken",name:"Chicken",items:[["Buffalo Wings",209],["Chicken Parmesan",209],["Salted Egg Chicken",209]]}
];
const esc=s=>s.replace(/&/g,"&amp;");
document.getElementById("cats").innerHTML=MENU.map(c=>`<section class="cat${c.hl?" hl":""}" data-c="${c.id}"><h3>${c.name}<small>${c.note||c.items.length+" dishes"}</small></h3><ul>${c.items.map(([n,p,s])=>`<li class="it"><span class="n">${esc(n)}${s?' <span class="soup">soup</span>':""}</span><span class="p">₱${p}</span></li>`).join("")}</ul></section>`).join("");
const chips=[...document.querySelectorAll(".chip")];
chips.forEach(b=>b.addEventListener("click",()=>{
  const f=b.dataset.f;
  chips.forEach(x=>x.setAttribute("aria-pressed",String(x===b)));
  document.querySelectorAll(".cat").forEach(c=>{c.hidden=!(f==="all"||c.dataset.c===f)});
  document.getElementById("cats").style.columns=f==="all"?"":"1";
}));
const msg=document.getElementById("msg");
document.getElementById("copy").addEventListener("click",()=>{
  const t="09310116799";
  const fallback=()=>{const r=document.createRange();r.selectNodeContents(document.getElementById("num"));const s=getSelection();s.removeAllRanges();s.addRange(r);msg.textContent="Number selected. Press copy on your keyboard or phone.";};
  try{navigator.clipboard.writeText(t).then(()=>{msg.textContent="Copied 0931-011-6799.";},fallback);}catch(e){fallback();}
});
