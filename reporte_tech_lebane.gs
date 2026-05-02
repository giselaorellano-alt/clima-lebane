function doGet() {
  return HtmlService.createHtmlOutput(getHtml())
    .setTitle('Encuesta de clima — Tech | Lebane');
}

function getHtml() {
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&display=swap" rel="stylesheet">
<style>
  :root {
    --text-default: #303036;
    --text-lighter: #636271;
    --blue-bg: #eff2ff;
    --blue-dark: #213478;
    --bg-layout: #f5f6f8;
    --white: #ffffff;
    --green: #27ae60;
    --yellow: #f39c12;
    --red: #e74c3c;
    --shadow-4dp: -1px 4px 8px 0px rgba(233,233,244,1);
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Roboto', sans-serif; font-size: 14px; line-height: 1.4; color: var(--text-default); background: var(--bg-layout); }
  .topbar { background: var(--white); border-bottom: 1px solid #e8e8f0; padding: 0 32px; height: 56px; display: flex; align-items: center; gap: 12px; position: sticky; top: 0; z-index: 100; box-shadow: var(--shadow-4dp); }
  .topbar-title { font-size: 18px; font-weight: 600; flex: 1; }
  .badge { background: #eafaf1; color: #1e8449; font-size: 12px; font-weight: 600; padding: 3px 10px; border-radius: 999px; }
  .page { max-width: 1200px; margin: 0 auto; padding: 32px 24px 64px; }
  .area-card { background: var(--white); border-radius: 8px; box-shadow: var(--shadow-4dp); overflow: hidden; }
  .card-header { background: var(--blue-bg); padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #dde3f7; flex-wrap: wrap; gap: 12px; }
  .card-header .area-name { font-size: 22px; font-weight: 600; color: var(--blue-dark); }
  .metrics-row { display: flex; flex-wrap: wrap; }
  .metric-pill { display: flex; flex-direction: column; align-items: center; padding: 8px 20px; border-right: 1px solid #dde3f7; }
  .metric-pill:last-child { border-right: none; }
  .metric-pill .m-label { font-size: 11px; font-weight: 600; color: var(--text-lighter); text-transform: uppercase; letter-spacing: 0.6px; }
  .metric-pill .m-value { font-size: 24px; font-weight: 600; line-height: 1.2; }
  .metric-pill .m-sub { font-size: 11px; color: var(--text-lighter); }
  .card-body { padding: 24px; }
  .enps-section { margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #f0f0f5; }
  .no-data { font-size: 13px; color: var(--text-lighter); font-style: italic; padding: 8px 0; }
  .q-section-label { font-size: 13px; font-weight: 600; margin-bottom: 8px; margin-top: 20px; color: var(--blue-dark); }
  .q-table { width: 100%; border-collapse: collapse; }
  .q-table tr { border-bottom: 1px solid #f0f0f5; }
  .q-table tr:last-child { border-bottom: none; }
  .q-table td { padding: 8px 4px; vertical-align: middle; }
  .q-label { font-size: 13px; width: 55%; padding-right: 16px; }
  .q-bar-cell { width: 35%; }
  .q-bar-bg { height: 8px; background: #eee; border-radius: 999px; overflow: hidden; }
  .q-bar-fill { height: 100%; border-radius: 999px; }
  .q-bar-fill.high { background: var(--green); }
  .q-bar-fill.mid { background: var(--yellow); }
  .q-bar-fill.low { background: var(--red); }
  .q-pct-cell { font-size: 13px; font-weight: 600; width: 10%; text-align: right; padding-left: 8px; }
  .q-pct-cell.high { color: var(--green); }
  .q-pct-cell.mid { color: var(--yellow); }
  .q-pct-cell.low { color: var(--red); }
  .ret-note { background: #fef3c7; border: 1px solid #fcd34d; border-radius: 6px; padding: 8px 12px; font-size: 12px; color: #92400e; margin-bottom: 8px; }
  .comment-bubble { background: #f8f9ff; border-left: 3px solid #6f93eb; border-radius: 0 6px 6px 0; padding: 10px 14px; margin-bottom: 8px; font-size: 13px; line-height: 1.6; }
  .dist-bar { display: flex; height: 12px; border-radius: 999px; overflow: hidden; gap: 2px; margin-top: 8px; }
  .seg-red { background: var(--red); } .seg-yel { background: var(--yellow); } .seg-green { background: var(--green); }
  .dist-legend { display: flex; gap: 16px; margin-top: 8px; flex-wrap: wrap; }
  .dist-legend span { font-size: 12px; color: var(--text-lighter); display: flex; align-items: center; gap: 4px; }
  .dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
  footer { text-align: center; font-size: 12px; color: var(--text-lighter); padding: 32px 0 16px; }
  @media(max-width:700px) { .metrics-row { flex-direction: column; } }
</style>
</head>
<body>
<div class="topbar">
  <div class="topbar-title">Encuesta de clima — Abril 2026</div>
  <span class="badge">Finalizada</span>
</div>
<div class="page">
  <div class="area-card">
    <div class="card-header">
      <span class="area-name">Tech</span>
      <div class="metrics-row">
        <div class="metric-pill"><span class="m-label">Participación</span><span class="m-value" style="color:var(--green)">93%</span><span class="m-sub">14 / 15</span></div>
        <div class="metric-pill"><span class="m-label">Favorabilidad</span><span class="m-value" style="color:var(--red)">28.3%</span><span class="m-sub">puntaje</span></div>
        <div class="metric-pill"><span class="m-label">eNPS</span><span class="m-value" style="color:var(--red);">-29</span><span class="m-sub">Net Promoter Score</span></div>
        <div class="metric-pill"><span class="m-label">Respuestas</span><span class="m-value" style="color:var(--blue-dark)">14</span><span class="m-sub">personas</span></div>
      </div>
    </div>
    <div class="card-body">
      <div class="enps-section">
        <div class="q-section-label">Distribución eNPS</div>
        <div class="dist-bar">
          <div class="seg-red" style="width:43%"></div>
          <div class="seg-yel" style="width:43%"></div>
          <div class="seg-green" style="width:14%"></div>
        </div>
        <div class="dist-legend">
          <span><span class="dot" style="background:var(--red)"></span>Detractores 43%</span>
          <span><span class="dot" style="background:var(--yellow)"></span>Neutros 43%</span>
          <span><span class="dot" style="background:var(--green)"></span>Promotores 14%</span>
        </div>
      </div>
      <div class="q-section-label">Engagement</div>
      <table class="q-table">
        <tr><td class="q-label">Me siento bastante satisfecho con mi rol y las tareas que realizo en Lebane</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill mid" style="width:58.6%"></div></div></td><td class="q-pct-cell mid">58.6</td></tr>
        <tr><td class="q-label">Siento que en Lebane tengo la oportunidad de aprender y crecer profesionalmente</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill mid" style="width:55.7%"></div></div></td><td class="q-pct-cell mid">55.7</td></tr>
        <tr><td class="q-label">Mi trabajo me motiva</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill mid" style="width:57.1%"></div></div></td><td class="q-pct-cell mid">57.1</td></tr>
      </table>
      <div class="q-section-label">Performance enablement</div>
      <table class="q-table">
        <tr><td class="q-label">Tengo claro qué es lo que tengo que lograr o conseguir</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill low" style="width:48.6%"></div></div></td><td class="q-pct-cell low">48.6</td></tr>
        <tr><td class="q-label">Se me brinda confianza</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill mid" style="width:62.9%"></div></div></td><td class="q-pct-cell mid">62.9</td></tr>
        <tr><td class="q-label">Veo el impacto de mi trabajo</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill mid" style="width:62.9%"></div></div></td><td class="q-pct-cell mid">62.9</td></tr>
      </table>
      <div class="q-section-label">Culture</div>
      <table class="q-table">
        <tr><td class="q-label">Hay un interés en mí como persona y por mi desarrollo humano</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill low" style="width:47.7%"></div></div></td><td class="q-pct-cell low">47.7</td></tr>
        <tr><td class="q-label">Normalmente se me pregunta por mi opinión y la misma es escuchada</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill low" style="width:50.0%"></div></div></td><td class="q-pct-cell low">50.0</td></tr>
        <tr><td class="q-label">En Lebane puedo ser yo mismo/a</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill mid" style="width:61.4%"></div></div></td><td class="q-pct-cell mid">61.4</td></tr>
        <tr><td class="q-label">La sinceridad, la buena educación y el respeto son valorados por la empresa y mis com…</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill high" style="width:71.4%"></div></div></td><td class="q-pct-cell high">71.4</td></tr>
      </table>
      <div class="q-section-label">Communication</div>
      <table class="q-table">
        <tr><td class="q-label">Hay claridad en la comunicación</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill low" style="width:42.9%"></div></div></td><td class="q-pct-cell low">42.9</td></tr>
      </table>
      <div class="q-section-label">Retention risk</div>
      <div class="ret-note">En estas preguntas, score alto indica mayor riesgo de agotamiento.</div>
      <table class="q-table">
        <tr><td class="q-label">Al finalizar la jornada laboral suelo necesitar más tiempo que antes para poder relaj…</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill mid" style="width:62.9%"></div></div></td><td class="q-pct-cell mid">62.9</td></tr>
        <tr><td class="q-label">Habitualmente debo hacer mayores esfuerzos del ordinario para llevar a cabo mi trabaj…</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill mid" style="width:57.1%"></div></div></td><td class="q-pct-cell mid">57.1</td></tr>
        <tr><td class="q-label">Con frecuencia me siento tensionado o cansado</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill mid" style="width:61.4%"></div></div></td><td class="q-pct-cell mid">61.4</td></tr>
      </table>
      <div class="q-section-label">Leadership</div>
      <table class="q-table">
        <tr><td class="q-label">Mi líder se preocupa por mí y por el equipo</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill mid" style="width:60.0%"></div></div></td><td class="q-pct-cell mid">60.0</td></tr>
        <tr><td class="q-label">Mi líder ayuda al equipo cuando es necesario</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill mid" style="width:68.6%"></div></div></td><td class="q-pct-cell mid">68.6</td></tr>
        <tr><td class="q-label">Cuando logro cosas importantes o realizo un extra en mis tareas, mi líder directo me …</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill low" style="width:54.3%"></div></div></td><td class="q-pct-cell low">54.3</td></tr>
        <tr><td class="q-label">Cuando me equivoco o no lo hago del todo bien, mi líder me da feedback para mejorar</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill low" style="width:54.3%"></div></div></td><td class="q-pct-cell low">54.3</td></tr>
        <tr><td class="q-label">Si pudiera elegir a mi líder, seguiría eligiendo al que tengo actualmente</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill mid" style="width:68.6%"></div></div></td><td class="q-pct-cell mid">68.6</td></tr>
      </table>

      <div class="q-section-label" style="font-size:15px;margin-top:32px;border-top:1px solid #f0f0f5;padding-top:20px">Comentarios abiertos</div>
      <div class="q-section-label">✨ LO QUE MÁS GUSTA</div>
      <div class="comment-bubble">La sinergia del equipo</div>
      <div class="comment-bubble">La aplicación que estamos desarrollando.</div>
      <div class="comment-bubble">El clima laboral entre mis compañeros de trabjo</div>
      <div class="comment-bubble">El equipo</div>
      <div class="comment-bubble">estar en montevideo</div>
      <div class="comment-bubble">La nueva oficina</div>
      <div class="comment-bubble">Mis compañeros de trabajo</div>
      <div class="comment-bubble">El grupo humano y el compañerismo que existe. Ademas de ser un ambiente que te reta a estar en constante cambio y crecimiento.</div>
      <div class="comment-bubble">Mis compañeros</div>
      <div class="comment-bubble">Los compañeros con los que trabajo</div>
      <div class="comment-bubble">El equipo, trabajo con gente muy copada</div>
      <div class="comment-bubble">Mis compañeros</div>
      <div class="comment-bubble">trabajo en equipo y conpromiso</div>
      <div class="q-section-label">⚠️ LO QUE MENOS GUSTA</div>
      <div class="comment-bubble">El desorden en la comunicacion interna</div>
      <div class="comment-bubble">Hay un poco de desorganización en cuanto a tareas.</div>
      <div class="comment-bubble">Pocas oportunidades de crecimiento</div>
      <div class="comment-bubble">No tener claros mis objetivos</div>
      <div class="comment-bubble">estas encuestas y la falta de cafe en la oficina.

Y esto que hicieron esta ultima vez organizar fechas de vuelta sin preguntar.
la proxima vez que me secuestren de esta manera no voy!</div>
      <div class="comment-bubble">La falta de beneficios y reconocimiento por logros</div>
      <div class="comment-bubble">Objetivos poco claros y falta de reconocimiento por el trabajo</div>
      <div class="comment-bubble">La falta de definición de planes de carrera para poder tener un roadmap mas tangible de como crecer y la no previsibilidad de revisiones de sueldo.</div>
      <div class="comment-bubble">Ir a la oficina
No saber cuando cobrar</div>
      <div class="comment-bubble">no veo nada malo</div>
      <div class="comment-bubble">La falta de claridad en comunicación, objetivos, prioridades. El involucramiento libre de asesores externos</div>
      <div class="comment-bubble">Siento que estoy medio estancado</div>
      <div class="comment-bubble">La comunicación y la falta de claridad en los objetivos</div>
      <div class="comment-bubble">desorden, jerarquia difusa</div>
      <div class="q-section-label">👤 COMENTARIOS SOBRE EL LÍDER</div>
      <div class="comment-bubble">Cumple muy bien con su rol</div>
      <div class="comment-bubble">Me gustaría a futuro poder tener más claro las tareas a realizar.</div>
      <div class="comment-bubble">Gran calidad humana e impulsa a seguir creciendo como equipo</div>
      <div class="comment-bubble">No, estoy conforme</div>
      <div class="q-section-label">💬 POR QUÉ NO UN 10 (eNPS)</div>
      <div class="comment-bubble">Lebane, como toda startup, no es lugar para todo el mundo, hay que estar dispuesto a dar el 110%.
Tambien considero que estamos en una etapa de crecimiento,  formando nuestra propia identidad como equipo, por ende aun estamos en proceso de desbloquear todo nuestro potencial para convertirnos en un 10</div>
      <div class="comment-bubble">Tenemos que mejorar en la comunicación</div>
      <div class="comment-bubble">Creo que es una gran empresa pero estamos en un momento de mucho crecimiento lo que implica mucho cambio y esfuerzo que reconozco no es para todo el mundo.</div>
      <div class="comment-bubble">Mejorar los beneficios</div>
      <div class="comment-bubble">Objetivos poco claros y falta de reconocimiento por el trabajo</div>
      <div class="comment-bubble">Desconozco la pregunta, la anterior no tenia puntaje.</div>
      <div class="comment-bubble">Es un trabajo muy demandante y hay épocas de mucho estrés</div>
      <div class="comment-bubble">Plan de carrera que no sea una tabla, objetivos claros, medición de rendimiento real, por ejemplo</div>
      <div class="comment-bubble">Mejorar la comunicacion con nosotros</div>
      <div class="comment-bubble">Orden y previsibilidad</div>
      <div class="q-section-label">🤝 COMENTARIOS CULTURA</div>
      <div class="comment-bubble">Respondi con 5</div>
      <div class="comment-bubble">Estoy de acuerdo con los valores de la empresa</div>
      <div class="comment-bubble">Hay veces que en reuniones por los conflictos de intereses entre areas se levanta mucho el tono</div>
      <div class="q-section-label">📡 COMENTARIOS COMUNICACIÓN</div>
      <div class="comment-bubble">No esta claro de donde proviene la toma de decisiones y no siempre llegan estas mismas a todos los oidos</div>
      <div class="comment-bubble">Falta más comunicación en las tareas y bajadas de línea.</div>
      <div class="comment-bubble">Faltaria mejor comunicacion</div>
      <div class="comment-bubble">Varias veces me entero de las cosas cuando pasan y no con aviso previo</div>
      <div class="comment-bubble">Los objetivos no estan claros, el criterio de evaluacion de review de rendimiento no esta claro</div>
      <div class="comment-bubble">Los objetivos no son claros</div>
      <div class="comment-bubble">Es normal pisarnos entre verticales</div>
      <div class="comment-bubble">Falta claridad con respecto a los objetivos personales, tambien falta comunicacion cuando hacemos encuentros en CABA, nunca se pregunta con anticipacion, tampoco desde o hasta cuando podemos asistir.</div>
      <div class="comment-bubble">Muchos canales de slack y al miso tiempo mucha gente hablando por privado</div>

    </div>
  </div>
  <footer>Encuesta de clima · Lebane · Abril 2026 &nbsp;·&nbsp; Generado el 29/04/2026</footer>
</div>
</body>
</html>`;
}
