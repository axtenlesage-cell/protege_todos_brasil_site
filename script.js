
document.addEventListener('DOMContentLoaded', () => {
  // Carousel (5 images)
  const imgs = ['assets/img/car1.webp','assets/img/car2.webp','assets/img/car3.webp','assets/img/car4.webp','assets/img/car5.webp'];
  const el = document.getElementById('carousel-image');
  const dots = Array.from(document.querySelectorAll('.control-dot'));
  let idx = 0;
  function show(i){
    idx = (i+imgs.length)%imgs.length;
    el.src = imgs[idx];
    el.setAttribute('alt', `Imagem de veículo ${idx+1}`);
    dots.forEach((d,k)=>d.classList.toggle('active', k===idx));
  }
  dots.forEach((d,k)=> d.addEventListener('click', ()=>show(k)));
  setInterval(()=>show(idx+1), 5000);
  show(0);

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
    });
  });

  // Language toggle
  const dict = {
    pt: { h1: "Proteção veicular clara, sem burocracia — guincho até 800km.",
      intro: "Planos Bronze a Diamante com coberturas completas. Fale agora no WhatsApp.",
      nav_vantagens:"Vantagens", nav_planos:"Planos", nav_depo:"Depoimentos", nav_parceiros:"Parceiros", nav_afiliados:"Afiliados", nav_contato:"Contato",
      badge1:"Assistência 24h", badge2:"Cobertura nacional", badge3:"Sem consulta ao SPC/Serasa",
      vantagens_t:"Por que escolher a Protege Todos Brasil?",
      v1_t:"Atendimento clássico", v1_p:"Sem letras miúdas. Explicamos cada detalhe do seu plano de forma clara.",
      v2_t:"Resolução rápida", v2_p:"Suporte 24h e equipe pronta para te ajudar quando você mais precisa.",
      v3_t:"Custo-benefício", v3_p:"Coberturas essenciais e opcionais sob medida.",
      planos_t:"Planos", bronze:"Bronze", prata:"Prata", ouro:"Ouro", diamante:"Diamante",
      depo_t:"Depoimentos", d1:"Serviço excelente, atendimento rápido.", d2:"Preço justo e cobertura completa.", d3:"Recomendo a todos os motoristas.",
      parceiros_t:"Parceiros e benefícios",
      afiliados_t:"Afiliados", afiliados_note:"💡 Com o nosso programa de afiliados, é possível ganhar cerca de R$ 2.000,00 por mês indicando clientes.", afiliados_btn:"Quero ser afiliado",
      contato_t:"Contato", form_nome:"Nome", form_email:"E-mail", form_msg:"Mensagem", form_enviar:"Enviar",
      cta_whatsapp:"Falar no WhatsApp" },
    fr: { h1: "Protection véhicule claire, sans paperasse — remorquage jusqu’à 800 km.",
      intro: "Plans Bronze à Diamant avec couvertures complètes. Parlez sur WhatsApp dès maintenant.",
      nav_vantagens:"Avantages", nav_planos:"Plans", nav_depo:"Témoignages", nav_parceiros:"Partenaires", nav_afiliados:"Affiliés", nav_contato:"Contact",
      badge1:"Assistance 24h/24", badge2:"Couverture nationale", badge3:"Sans consultation SPC/Serasa",
      vantagens_t:"Pourquoi choisir Protege Todos Brasil ?",
      v1_t:"Service classique", v1_p:"Pas de petites lignes. On explique tout clairement.",
      v2_t:"Résolution rapide", v2_p:"Support 24h et équipe prête à aider.",
      v3_t:"Bon rapport qualité/prix", v3_p:"Couvertures essentielles + options à la carte.",
      planos_t:"Plans", bronze:"Bronze", prata:"Argent", ouro:"Or", diamante:"Diamant",
      depo_t:"Témoignages", d1:"Service excellent, assistance rapide.", d2:"Prix juste et couverture complète.", d3:"Je recommande à tous les conducteurs.",
      parceiros_t:"Partenaires et avantages",
      afiliados_t:"Affiliés", afiliados_note:"💡 Avec notre programme d’affiliés, on peut gagner environ R$ 2.000,00 par mois en indiquant des clients.", afiliados_btn:"Je veux être affilié",
      contato_t:"Contact", form_nome:"Nom", form_email:"E-mail", form_msg:"Message", form_enviar:"Envoyer",
      cta_whatsapp:"Parler sur WhatsApp" }
  };
  function setLang(lang){
    for(const [k,v] of Object.entries(dict[lang])){
      document.querySelectorAll(`[data-i18n="{}${k}"]`).forEach(el => el.textContent = v);
    }
    document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
  }
  document.querySelectorAll('.lang button').forEach(b=> b.addEventListener('click', ()=> setLang(b.dataset.lang)));
  setLang('pt');

  // Contact form: Netlify capture + mailto fallback
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e)=>{
    // If hosted on Netlify, the POST will be handled automatically.
    if(!window.location.host.includes('netlify.app')) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();
      const subject = encodeURIComponent("Contato via site - Protege Todos Brasil");
      const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\nMensagem:\n${msg}`);
      window.location.href = `mailto:MarieAngelica050708@gmail.com?subject=${subject}&body=${body}`;
    }
  });
});
