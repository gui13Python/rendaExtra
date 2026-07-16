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

  burger.addEventListener('click', (ev)=>{
    ev.stopPropagation();
    links.classList.toggle('open');
  });
  // fecha ao clicar em um link do menu
  links.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> links.classList.remove('open'));
  });
  // fecha ao clicar fora do menu
  document.addEventListener('click', (ev)=>{
    if(!links.contains(ev.target) && ev.target !== burger){
      links.classList.remove('open');
    }
  });
}

// ---------- ano rodapé ----------
function montarAno(){
  const el = document.getElementById('anoAtual');
  if(el) el.textContent = new Date().getFullYear();
}

// ---------- PWA: botão "Instalar app" (Android/Chrome/Edge/desktop) ----------
let promptDeInstalacao = null;

function montarInstalacao(){
  const navEl = document.querySelector('header.site .nav');
  if(!navEl) return;

  const btn = document.createElement('button');
  btn.id = 'btnInstalarApp';
  btn.className = 'btn btn-gold btn-sm';
  btn.textContent = 'Instalar app';
  btn.style.display = 'none';
  navEl.insertBefore(btn, navEl.querySelector('.burger'));

  window.addEventListener('beforeinstallprompt', (ev)=>{
    ev.preventDefault();
    promptDeInstalacao = ev;
    btn.style.display = 'inline-flex';
  });

  btn.addEventListener('click', async ()=>{
    if(!promptDeInstalacao) return;
    btn.style.display = 'none';
    promptDeInstalacao.prompt();
    await promptDeInstalacao.userChoice;
    promptDeInstalacao = null;
  });

  window.addEventListener('appinstalled', ()=>{
    btn.style.display = 'none';
  });

  // iOS Safari não dispara beforeinstallprompt — mostra dica manual uma vez
  const iOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const emStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
  if(iOS && !emStandalone && !sessionStorage.getItem('dicaIosFechada')){
    const dica = document.createElement('div');
    dica.id = 'dicaIos';
    dica.innerHTML = `
      <span>Instale este app: toque em <strong>Compartilhar</strong> (□↑) e depois em <strong>"Adicionar à Tela de Início"</strong>.</span>
      <button aria-label="Fechar">×</button>`;
    document.body.appendChild(dica);
    dica.querySelector('button').addEventListener('click', ()=>{
      dica.remove();
      sessionStorage.setItem('dicaIosFechada','1');
    });
  }
}

// ---------- PWA: registra o service worker (necessário pra opção "Instalar") ----------
function registrarServiceWorker(){
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').catch((e)=>{
      console.warn('Service worker não registrado:', e);
    });
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  montarTickerTape();
  montarMenuMobile();
  montarAno();
  montarInstalacao();
  registrarServiceWorker();
});
