// =========================================================
// CONFIGURAÇÃO CENTRAL DO SITE — edite só aqui.
// =========================================================
const CONFIG = {
  // Link de afiliado da Shopee — ÚNICO lugar do site onde ele fica.
  // Todo elemento com o atributo data-shopee-link puxa daqui automaticamente.
  linkAfiliadoShopee: 'https://s.shopee.com.br/6pzCA3Y7Wv',

  // Domínio definitivo do site (troque pelo seu domínio real assim que tiver).
  dominioSite: 'https://rendaextradividendos.com.br',
};

// Preenche automaticamente todo link/botão marcado com data-shopee-link
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('[data-shopee-link]').forEach((el)=>{
    el.href = CONFIG.linkAfiliadoShopee;
    el.target = '_blank';
    el.rel = 'sponsored noopener noreferrer';
  });
});
