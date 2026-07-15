/* =========================================================
   Base de referência de pagadoras de dividendos (B3)
   ATENÇÃO: valores ilustrativos para preencher o simulador
   rapidamente. Não são cotações em tempo real — sempre
   confira o preço e o DY atuais antes de decidir algo.
   ========================================================= */
const ATIVOS_REFERENCIA = [
  { ticker:"TAEE11", nome:"Taesa",              preco:36.80, dy:9.8,  setor:"Energia" },
  { ticker:"TRPL4",  nome:"ISA CTEEP",          preco:10.40, dy:8.6,  setor:"Energia" },
  { ticker:"CMIG4",  nome:"Cemig",              preco:11.60, dy:8.1,  setor:"Energia" },
  { ticker:"EGIE3",  nome:"Engie Brasil",       preco:42.30, dy:7.4,  setor:"Energia" },
  { ticker:"ITSA4",  nome:"Itaúsa",             preco:10.90, dy:6.8,  setor:"Financeiro" },
  { ticker:"BBAS3",  nome:"Banco do Brasil",    preco:26.50, dy:9.2,  setor:"Financeiro" },
  { ticker:"BBSE3",  nome:"BB Seguridade",      preco:34.10, dy:8.9,  setor:"Financeiro" },
  { ticker:"SANB11", nome:"Santander Brasil",   preco:29.40, dy:7.0,  setor:"Financeiro" },
  { ticker:"PETR4",  nome:"Petrobras",          preco:37.20, dy:12.5, setor:"Petróleo" },
  { ticker:"VALE3",  nome:"Vale",               preco:61.50, dy:8.3,  setor:"Mineração" },
  { ticker:"KLBN11", nome:"Klabin",             preco:21.30, dy:5.9,  setor:"Papel e Celulose" },
  { ticker:"WIZC3",  nome:"Wiz Co",             preco:7.80,  dy:8.4,  setor:"Seguros" },
  { ticker:"CXSE3",  nome:"Caixa Seguridade",   preco:15.60, dy:8.7,  setor:"Seguros" },
  { ticker:"VIVT3",  nome:"Telefônica Vivo",    preco:47.90, dy:7.6,  setor:"Telecom" },
  { ticker:"HGLG11", nome:"CSHG Logística FII", preco:167.00,dy:8.9,  setor:"FII - Logística" },
  { ticker:"MXRF11", nome:"Maxi Renda FII",     preco:10.20, dy:11.3, setor:"FII - Papel" },
];
