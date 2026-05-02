function doGet() {
  return HtmlService.createHtmlOutput(getHtml())
    .setTitle('Encuesta de clima — Operations | Lebane');
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
      <span class="area-name">Operations</span>
      <div class="metrics-row">
        <div class="metric-pill"><span class="m-label">Participación</span><span class="m-value" style="color:var(--green)">86%</span><span class="m-sub">6 / 7</span></div>
        <div class="metric-pill"><span class="m-label">Favorabilidad</span><span class="m-value" style="color:var(--yellow)">57.3%</span><span class="m-sub">puntaje</span></div>
        <div class="metric-pill"><span class="m-label">eNPS</span><span class="m-value" style="color:var(--yellow);">0</span><span class="m-sub">Net Promoter Score</span></div>
        <div class="metric-pill"><span class="m-label">Respuestas</span><span class="m-value" style="color:var(--blue-dark)">6</span><span class="m-sub">personas</span></div>
      </div>
    </div>
    <div class="card-body">
      <div class="enps-section">
        <div class="q-section-label">Distribución eNPS</div>
        <div class="dist-bar">
          <div class="seg-red" style="width:17%"></div>
          <div class="seg-yel" style="width:67%"></div>
          <div class="seg-green" style="width:17%"></div>
        </div>
        <div class="dist-legend">
          <span><span class="dot" style="background:var(--red)"></span>Detractores 17%</span>
          <span><span class="dot" style="background:var(--yellow)"></span>Neutros 67%</span>
          <span><span class="dot" style="background:var(--green)"></span>Promotores 17%</span>
        </div>
      </div>
      <div class="q-section-label">Engagement</div>
      <table class="q-table">
        <tr><td class="q-label">Me siento bastante satisfecho con mi rol y las tareas que realizo en Lebane</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill mid" style="width:63.3%"></div></div></td><td class="q-pct-cell mid">63.3</td></tr>
        <tr><td class="q-label">Siento que en Lebane tengo la oportunidad de aprender y crecer profesionalmente</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill high" style="width:73.3%"></div></div></td><td class="q-pct-cell high">73.3</td></tr>
        <tr><td class="q-label">Mi trabajo me motiva</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill high" style="width:70.0%"></div></div></td><td class="q-pct-cell high">70.0</td></tr>
      </table>
      <div class="q-section-label">Performance enablement</div>
      <table class="q-table">
        <tr><td class="q-label">Tengo claro qué es lo que tengo que lograr o conseguir</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill mid" style="width:66.7%"></div></div></td><td class="q-pct-cell mid">66.7</td></tr>
        <tr><td class="q-label">Se me brinda confianza</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill high" style="width:73.3%"></div></div></td><td class="q-pct-cell high">73.3</td></tr>
        <tr><td class="q-label">Veo el impacto de mi trabajo</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill high" style="width:70.0%"></div></div></td><td class="q-pct-cell high">70.0</td></tr>
      </table>
      <div class="q-section-label">Culture</div>
      <table class="q-table">
        <tr><td class="q-label">Hay un interés en mí como persona y por mi desarrollo humano</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill mid" style="width:66.7%"></div></div></td><td class="q-pct-cell mid">66.7</td></tr>
        <tr><td class="q-label">Normalmente se me pregunta por mi opinión y la misma es escuchada</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill high" style="width:76.7%"></div></div></td><td class="q-pct-cell high">76.7</td></tr>
        <tr><td class="q-label">En Lebane puedo ser yo mismo/a</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill high" style="width:73.3%"></div></div></td><td class="q-pct-cell high">73.3</td></tr>
        <tr><td class="q-label">La sinceridad, la buena educación y el respeto son valorados por la empresa y mis com…</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill high" style="width:73.3%"></div></div></td><td class="q-pct-cell high">73.3</td></tr>
      </table>
      <div class="q-section-label">Communication</div>
      <table class="q-table">
        <tr><td class="q-label">Hay claridad en la comunicación</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill low" style="width:50.0%"></div></div></td><td class="q-pct-cell low">50.0</td></tr>
      </table>
      <div class="q-section-label">Retention risk</div>
      <div class="ret-note">En estas preguntas, score alto indica mayor riesgo de agotamiento.</div>
      <table class="q-table">
        <tr><td class="q-label">Al finalizar la jornada laboral suelo necesitar más tiempo que antes para poder relaj…</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill high" style="width:70.0%"></div></div></td><td class="q-pct-cell high">70.0</td></tr>
        <tr><td class="q-label">Habitualmente debo hacer mayores esfuerzos del ordinario para llevar a cabo mi trabaj…</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill high" style="width:72.0%"></div></div></td><td class="q-pct-cell high">72.0</td></tr>
        <tr><td class="q-label">Con frecuencia me siento tensionado o cansado</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill high" style="width:70.0%"></div></div></td><td class="q-pct-cell high">70.0</td></tr>
      </table>
      <div class="q-section-label">Leadership</div>
      <table class="q-table">
        <tr><td class="q-label">Mi líder se preocupa por mí y por el equipo</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill high" style="width:76.7%"></div></div></td><td class="q-pct-cell high">76.7</td></tr>
        <tr><td class="q-label">Mi líder ayuda al equipo cuando es necesario</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill high" style="width:80.0%"></div></div></td><td class="q-pct-cell high">80.0</td></tr>
        <tr><td class="q-label">Cuando logro cosas importantes o realizo un extra en mis tareas, mi líder directo me …</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill high" style="width:70.0%"></div></div></td><td class="q-pct-cell high">70.0</td></tr>
        <tr><td class="q-label">Cuando me equivoco o no lo hago del todo bien, mi líder me da feedback para mejorar</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill high" style="width:73.3%"></div></div></td><td class="q-pct-cell high">73.3</td></tr>
        <tr><td class="q-label">Si pudiera elegir a mi líder, seguiría eligiendo al que tengo actualmente</td><td class="q-bar-cell"><div class="q-bar-bg"><div class="q-bar-fill high" style="width:76.7%"></div></div></td><td class="q-pct-cell high">76.7</td></tr>
      </table>

      <div class="q-section-label" style="font-size:15px;margin-top:32px;border-top:1px solid #f0f0f5;padding-top:20px">Comentarios abiertos</div>
      <div class="q-section-label">✨ LO QUE MÁS GUSTA</div>
      <div class="comment-bubble">El ambiente, los estilos de liderazgo.</div>
      <div class="comment-bubble">Las posibilidades de crecimiento, el proyecto y la industria</div>
      <div class="comment-bubble">Las personas y la nueva oficina</div>
      <div class="comment-bubble">El equipo de trabajo</div>
      <div class="comment-bubble">La posibilidad de hacer, de crecer, de proponer cosas y que sucedan.</div>
      <div class="comment-bubble">La gente, el equipo de trabajo.</div>
      <div class="q-section-label">⚠️ LO QUE MENOS GUSTA</div>
      <div class="comment-bubble">Los problemas de comunicación entre equipos.</div>
      <div class="comment-bubble">La falta de comunicación entre áreas</div>
      <div class="comment-bubble">La comunicación, que hay procesos que no están bien definidos y a veces esto perjudica</div>
      <div class="comment-bubble">El equipo de trabajo</div>
      <div class="comment-bubble">La desorganización y descomunicación entre áreas</div>
      <div class="comment-bubble">Durante este primer mes en la nueva posición, sentí que la transición no se dio de acuerdo con lo conversado inicialmente. La incorporación de las nuevas responsabilidades fue muy rápida y, al mismo tiempo, continué sosteniendo gran parte de mis tareas anteriores, lo que generó una carga de trabajo muy alta en un período corto.

Hoy estoy acompañando varios frentes en simultáneo: continuidad de cuentas de onboarding, soporte sobre Losa (una plataforma en la que todavía me encuentro en proceso de aprendizaje y para la cual no tuve aún el espacio suficiente de capacitación), armado de procesos, capacitaciones y la construcción de un área que todavía está en una etapa muy inicial.

Valoro mucho la oportunidad y el desafío de liderar esta etapa, especialmente porque implica ordenar, profesionalizar y dar estructura a un espacio con mucho potencial. También quiero destacar que me siento muy acompañada por mi líder, con apertura, escucha y predisposición constante para ayudarme en este proceso, lo cual hace una diferencia muy positiva en el día a día.

Aun así, siento que el alcance esperado en este momento es muy amplio para el tiempo de transición real que hubo y para el volumen de frentes abiertos en paralelo. La falta de espacios claros para aprender, priorizar y ganar profundidad en algunos temas hace que por momentos la experiencia se vuelva exigente y desgastante.

Creo que contar con una transición más gradual, objetivos por etapas y mayor soporte estructural en los temas más nuevos permitiría hacer este proceso más sostenible y potenciar mejores resultados tanto para el área como para el equipo.

Comparto este feedback con la intención de aportar una mirada constructiva sobre cómo acompañar mejor procesos de cambio y crecimiento, cuidando al mismo tiempo la calidad del trabajo y la experiencia de quienes asumimos nuevos desafíos.</div>
      <div class="q-section-label">👤 COMENTARIOS SOBRE EL LÍDER</div>
      <div class="comment-bubble">No, ya deje todo en la PR</div>
      <div class="comment-bubble">Que siempre está para ayudar</div>
      <div class="comment-bubble">Veo que se está trabajando para ordenar y alinear las cosas.</div>
      <div class="q-section-label">💬 POR QUÉ NO UN 10 (eNPS)</div>
      <div class="comment-bubble">Trabajar en lo mencionado como comunicación y procesos y una mayor adaptabilidad al crecimiento con tiempos mas realistas.</div>
      <div class="comment-bubble">Cambios en comunicación, procesos</div>
      <div class="comment-bubble">No es para todos, ni la presión ni el constante cambio.</div>
      <div class="q-section-label">🤝 COMENTARIOS CULTURA</div>
      <div class="comment-bubble">Es notable en reuniones intergrupales que la comunicación tiene muchas oportunidades de mejora, a veces las reuniones se ponen tensas y no se comunica todo de la forma mas educada.</div>
      <div class="comment-bubble">Creo que en todo siempre hay cosas a mejorar</div>
      <div class="comment-bubble">En cuanto a las tareas del rol la cantidad actualmente sobrepasan la capacidad que tenemos. Aunque se tomaron acciones que seguramente dentro de poco termine impactando.

Si bien puedo ver proyección en Lebane, no se en que punto estoy hoy parado y que es lo que tengo que hacer para subir de nivel.</div>
      <div class="q-section-label">📡 COMENTARIOS COMUNICACIÓN</div>
      <div class="comment-bubble">En cuanto a lo institucional si, en cuanto a lo intergrupal no. Determinar procesos tanto para la operatoria diaria como para cada vez que se modifique algun proceso interno, que este sea notificado a las respectivas areas de interes, podría ser de mucha ayuda.</div>
      <div class="comment-bubble">No siempre es todo claro, o bajado de manera correcta</div>
      <div class="comment-bubble">Existen ocasiones donde hay  informacion dando vuelta entre diferentes areas que no se terminan de coordinar.</div>
      <div class="comment-bubble">Porque creo que gran parte de nuestras falencias como empresa es la falta de comunicación entre áreas.</div>

    </div>
  </div>
  <footer>Encuesta de clima · Lebane · Abril 2026 &nbsp;·&nbsp; Generado el 29/04/2026</footer>
</div>
</body>
</html>`;
}
