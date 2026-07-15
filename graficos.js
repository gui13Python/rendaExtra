// Desenha um gráfico de barras simples em SVG dentro de `container` (elemento DOM)
// dados: [{label:'Ano 1', valor: 1234}, ...]
function desenharBarras(container, dados, opcoes={}){
  const cor = opcoes.cor || '#1F4D36';
  const corLabel = '#48594E';
  const w = container.clientWidth || 560;
  const h = opcoes.altura || 220;
  const padL = 46, padB = 28, padT = 12, padR = 8;
  const areaW = w - padL - padR;
  const areaH = h - padT - padB;
  const max = Math.max(...dados.map(d=>d.valor), 1);
  const n = dados.length;
  const gap = 8;
  const barW = Math.max((areaW - gap*(n-1)) / n, 4);

  let bars = '';
  let labels = '';
  dados.forEach((d,i)=>{
    const barH = (d.valor/max) * areaH;
    const x = padL + i*(barW+gap);
    const y = padT + (areaH - barH);
    bars += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${barH.toFixed(1)}" fill="${cor}" rx="1.5">
      <title>${d.label}: ${formatarBRL(d.valor)}</title>
    </rect>`;
    if(n <= 16 || i % Math.ceil(n/12) === 0){
      labels += `<text x="${(x+barW/2).toFixed(1)}" y="${h-8}" font-size="10.5" text-anchor="middle" fill="${corLabel}" font-family="IBM Plex Mono, monospace">${d.label}</text>`;
    }
  });

  // linhas guia
  const gridY = [0,.25,.5,.75,1].map(f=>{
    const y = padT + areaH*(1-f);
    const val = max*f;
    return `<line x1="${padL}" x2="${w-padR}" y1="${y.toFixed(1)}" y2="${y.toFixed(1)}" stroke="rgba(24,38,32,0.10)" stroke-width="1"/>
      <text x="${padL-6}" y="${(y+3).toFixed(1)}" font-size="9.5" text-anchor="end" fill="${corLabel}" font-family="IBM Plex Mono, monospace">${formatarCompacto(val)}</text>`;
  }).join('');

  container.innerHTML = `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" role="img" aria-label="gráfico">
    ${gridY}
    ${bars}
    ${labels}
  </svg>`;
}

function formatarCompacto(v){
  if(v>=1000000) return 'R$ '+(v/1000000).toFixed(1)+'M';
  if(v>=1000) return 'R$ '+(v/1000).toFixed(0)+'k';
  return 'R$ '+v.toFixed(0);
}
