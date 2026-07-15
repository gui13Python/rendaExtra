// ---------- utilidades de formatação ----------
function formatarBRL(v){
  return v.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:2});
}
function formatarNum(v,casas=2){
  return v.toLocaleString('pt-BR',{minimumFractionDigits:casas,maximumFractionDigits:casas});
}

// ---------- fita de cotações (topo) ----------
function montarTickerTape(){
  const el = document.getElementById('tickerTrack');
  if(!el) return;
  const itens = ATIVOS_REFERENCIA.map(a=>{
    const alta = a.dy > 8; // apenas para variar visualmente sinais + / -
    const sinal = alta ? '▲' : '▼';
    const classe = alta ? 'up' : 'down';
    return `<span>${a.ticker} <span class="${classe}">${sinal} DY ${formatarNum(a.dy,1)}%</span></span>`;
  }).join('');
  el.innerHTML = itens + itens; // duplica para loop contínuo
}

// ---------- menu mobile ----------
function montarMenuMobile(){
  const burger = document.getElementById('burger');
  const links = document.getElementById('navLinks');
  if(!burger || !links) return;
  burger.addEventListener('click', ()=>{
    const aberto = links.style.display === 'flex';
    links.style.display = aberto ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '64px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = 'var(--paper)';
    links.style.borderBottom = '1px solid var(--line)';
    links.style.padding = '12px 24px 20px';
    links.style.gap = '4px';
  });
}

// ---------- ano rodapé ----------
function montarAno(){
  const el = document.getElementById('anoAtual');
  if(el) el.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', ()=>{
  montarTickerTape();
  montarMenuMobile();
  montarAno();
});
