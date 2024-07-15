import kollefaq from "@/public/kollefaq.jpg";
import klozer from "@/public/kolfaq.jpg";
import mybusinesspassion from "@/public/mybusiness-passion.jpg";

export const faqs = [
  {
    name: "lesfaqskolles",
    image: kollefaq,
    html: `  <div class="accordion">
    


    <div class="accordion-item">
      <button id="accordion-button-3" aria-expanded="true"><span class="accordion-title">1. Est-ce que Kollé SERRÉ compresse le ventre ou est inconfortable ?</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>Non, notre produit est conçu pour être confortable et ne compresse pas le ventre. Il vous offre un maintien léger et efficace, sans vous donner l'impression d'être à l'étroit. Vous pouvez le porter toute la journée sans ressentir d'inconfort.</p>
      </div>
    </div>
    

    <div class="accordion-item">
      <button id="accordion-button-3" aria-expanded="false"><span class="accordion-title">2. Est-ce que Kollé SERRÉ convient à toutes les morphologies ?</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>Oui, Kollé SERRÉ est conçue pour s'adapter à différentes morphologies et tailles. Grâce à ses matériaux extensibles et à sa conception sans couture, il épouse les formes de votre corps sans créer de démarcation visible sous les vêtements.</p>
      </div>
    </div>
    


    


    <div class="accordion-item">
      <button id="accordion-button-3" aria-expanded="false"><span class="accordion-title">3. Puis-je porter ces culottes et shorty sculptantes sous des vêtements moulants ou des tissus délicats ?</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>Absolument ! Kollé SERRÉ est invisible sous les vêtements, y compris sous des robes moulantes ou des tissus délicats comme la soie ou le satin. Vous pouvez le porter en toute confiance lors de mariages, de fêtes, ou au travail.</p>
      </div>
    </div>
    




    <div class="accordion-item">
      <button id="accordion-button-3" aria-expanded="false"><span class="accordion-title">4. Comment puis-je passer commande et bénéficier de votre offre exclusive ?</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>Pour passer commande, cliquez sur le bouton "Je veux la silhouette parfaite"  sur cette page. Vous bénéficierez de notre offre exclusive de -50%. Nous expédions rapidement pour que vous puissiez commencer à vous sentir belle et confiante le plus tôt possible.</p>
      </div>
    </div>
    
    
    
      <div class="accordion-item">
      <button id="accordion-button-3" aria-expanded="false"><span class="accordion-title">5. Quelle est votre politique de remboursement ?</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>Oui, nous acceptons les retours. Les clients doivent faire une demande de retour sur leur commande, que nous validons ensuite. Ils reçoivent un document avec l'adresse de retour et doivent envoyer le produit à nos bureaux à leurs frais. Les retours doivent être effectués dans un délai de 14 jours et le remboursement est immédiat dès réception du retour.</p>
      </div>
    </div>
    
    
      <div class="accordion-item">
      <button id="accordion-button-3" aria-expanded="false"><span class="accordion-title">5. Quels sont vos délais de livraison ?</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>La livraison des commandes ( en France et en Belgique )  se fait dans un délai de 5 jours ouvrables, pour toute autre demande spéciale veuillez contacter le support client.</p>
      </div>
    </div>
    

<!--END-->
  </div>
  `,
    css: `
   /********FAQ********/
  
      .accordion { 
        height: 500px; 
        padding: 0 10px;
        overflow-y: scroll;
        overflow-x: hidden; 
      }
      .accordion *{ 
        font-weight: 400; 
        font-family: "Sora", Sans-serif;
      }
      .accordion button{ 
          padding: 20px !important; 
          margin-bottom: 0; font-weight: 200 !important;
          border: none !important; 
          line-height: 1.4em;
      }
      .accordion p{font-weight: 300 !important;}
      .accordion-content a {color: black !important}

      
      .accordion button {
        position: relative;
        display: block;
        text-align: left;
        width: 100%;
        padding: 1em 0;
        color: black;
        font-size: 16px;
        border: none;
        background-color: transparent;
        outline: none;
        border-radius: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        transition: background-color .3s;
      }
      .accordion button:hover, .accordion button:focus {
        cursor: pointer;
      }
      .accordion button:hover::after, .accordion button:focus::after {
        cursor: pointer;
      }
      .accordion button .accordion-title {
        padding: 1em 1.5em 1em 0;
        font-size: 18px !important;
        font-weight: 600 !important;

      }
      .accordion button .icon {
        display: inline-block;
        position: absolute;
        top: 13px;
        right: 0;
        width: 22px;
        height: 22px;
        color: black;
        background: transparent;
        transform: scale(1.2);
/*          border-radius: 5px;*/
      }
      .accordion button .icon::before {
        display: block;
        position: absolute;
        content: '';
        top: 9px;
        left: 0; right: 0;
        margin: auto;
        width: 10px;
        height: 2px;
        background: currentColor;
      }
      .accordion button .icon::after {
        display: block;
        position: absolute;
        content: '';
        top: 5px;
        left: 0; right: 0;
        margin: auto;
        width: 2px;
        height: 10px;
        background: currentColor;
      }
      .accordion button[aria-expanded='true'] .icon::after {
        width: 0;
      }
      .accordion button[aria-expanded='true']{ 
        color: black !important;
        font-size: 20px;
        font-weight: 700;
        background-color: var(--DS_PR_color_DS);
      }
      .accordion button[aria-expanded='true'] + .accordion-content {
        opacity: 1;
        max-height: 100%;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
        will-change: opacity, max-height;
        width: 100%;
        padding: 20px;
        padding-top: 0px;
        background:  var(--DS_PR_color_DS);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        margin-bottom: 0 !important;
      }
      span.accord {
          font-weight: bold;
      }
      .accordion-item{ margin-bottom: 30px; border-radius: 10px; }
      .accordion .accordion-content {
        opacity: 0;
        max-height: 0;
        overflow: hidden;
        -webkit-transition: opacity 200ms linear, max-height 200ms linear;
        transition: opacity 200ms linear, max-height 200ms linear;
        will-change: opacity, max-height;
      }
      .accordion .accordion-content p {
          color: black;
          font-size: 14px;
/*            font-family: Raleway;*/
          text-align: left;
          padding: 2px 10px;
      }
      .accordion::-webkit-scrollbar{ background: black; width: 3px; border-radius: 100px !important;} 
      .accordion::-webkit-scrollbar-thumb{ background-color: var(--DS_PR_color_DS); !important; border-radius: 100px !important; } 
      .accordion .accordion-content p a{ color: black !important; font-weight: 900 !important; }
      

      @media (min-width: 768px){ 
        .accordion-content {width: 100% !important;}
      }
      @media (max-width: 768px) { 
          .accordion-item{ margin-bottom: 20px !important  }
          body .accordion button .icon { transform: scale(.8); }
          .accordion button { width: 100% !important;}

          .accordion button .accordion-title{ font-size: 16px }
          .accordion .accordion-content p{ font-size: 14px }
      }

`,
    js: `<script src='https://code.jquery.com/jquery-3.2.1.min.js'></script>
<script>
  
  const items = document.querySelectorAll(".accordion button");
  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }
  items.forEach(item => item.addEventListener('click', toggleAccordion));

</script>`,
  },

  {
    name: "lesfaqsklozer",
    image: klozer,
    html: `  <div class="accordion">
    <div class="accordion-item">
      <button id="accordion-button-3" aria-expanded="true"><span class="accordion-title">Quels sont les objectifs de cet événement ?</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>Pour accéder à la Masterclass 100% gratuit "3 secrets du Dr. Sebi : La perte de poids avec le régime alcalin", il vous suffit de remplir le formulaire ci-dessous avec votre nom, prénom et adresse e-mail et cliquer sur le bouton "Voir La Masterclass Maintenant".</p>
      </div>
    </div>
    <div class="accordion-item">
      <button id="accordion-button-4" aria-expanded="false"><span class="accordion-title">Que dois-je prévoir pour la journée ?</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>Non, la Masterclass est entièrement gratuite. Nous croyons en l'accès universel à l'information pour promouvoir la santé et le bien-être de chacun.</p>
      </div>
    </div>
    <div class="accordion-item">
      <button id="accordion-button-5" aria-expanded="false"><span class="accordion-title">Comment se passe l'arrivée sur le lieu ?</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>L'arrivée se fera devant le Parc Des Princes, des consignes seront envoyées à chaque membre une fois leurs inscriptions validées.</p>
      </div>
    </div>
    <div class="accordion-item">
      <button id="accordion-button-5" aria-expanded="false"><span class="accordion-title">Est-ce que je pourrais échanger avec les intervenants ? </span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>Le régime alcalin offre de nombreux avantages, notamment la stimulation du métabolisme, la réduction des fringales, et la promotion d'une perte de poids saine et durable. De plus, il contribue à améliorer la digestion, à réduire l'inflammation et à renforcer le système immunitaire.</p>
      </div>
    </div>
    <div class="accordion-item">
      <button id="accordion-button-5" aria-expanded="false"><span class="accordion-title">Pourquoi déposer une candidature si je veux participer ? </span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>Le régime alcalin offre de nombreux avantages, notamment la stimulation du métabolisme, la réduction des fringales, et la promotion d'une perte de poids saine et durable. De plus, il contribue à améliorer la digestion, à réduire l'inflammation et à renforcer le système immunitaire.</p>
      </div>
    </div>
    <div class="accordion-item">
      <button id="accordion-button-5" aria-expanded="false"><span class="accordion-title">Quelle est la spécialité de Klozer?</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>Klozer redéfinit l'organisation d'événements corporate, séminaire, team building, afterwork grâce à une marketplace de mise en relation tout en un, utilisant l'intelligence artificielle pour personnaliser chaque aspect de votre événement et ses objectifs
<br>
De la sélection du lieu aux services complémentaires, tout est accessible rapidement et simplement
Klozer propose à ses clients des expériences uniques autour de lieux atypiques et activités distinctives, cultivant la cohésion d'équipe
et l'engagement</p>
      </div>
    </div>
    <div class="accordion-item">
      <button id="accordion-button-5" aria-expanded="false"><span class="accordion-title">Quelle est l'activité d'Entrepreneurs.com?</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>Depuis plus de 5 ans, Entrepreneurs.com est le mouvement entrepreneurial numéro 1 en francophonie qui a pour mission de permettre aux entrepreneurs ambitieux de briser leur plafond de verre et de faire décoller leur entreprise grâce au Système qui leur permettra d'atteindre des objectifs qu'ils n'ont jamais atteints.</p>
      </div>
    </div>
<!--END-->
  </div>`,

    css: `/* FAQ */

@media (max-width: 769px) {
  [data-title="GF_Sec_FAQ_GF"] .elHeadline {
    text-align: center !important;
  }
}

.accordion {
  max-height: 456px;
  overflow-y: scroll;
}
.accordion * {
  font-weight: 400 !important;
}
.accordion button {
  padding: 10px !important;
  margin-bottom: 0;
  border-radius: 0 !important;
  font-weight: 200 !important;
}
.accordion button span {
}
.accordion p {
  font-weight: 300 !important;
}
.accordion-content a {
  color: white !important;
}
.accordion button {
  position: relative;
  display: block;
  text-align: left;
  width: 100%;
  padding: 1em 0;
  color: black;
  font-size: 18px;
  border: none;
  background: transparent;
  outline: none;
}
.accordion button:hover,
.accordion button:focus {
  cursor: pointer;
}
.accordion button:hover::after,
.accordion button:focus::after {
  cursor: pointer;
}
.accordion button .accordion-title {
  padding: 1em 1.5em 1em 0;
  font-size: 18px;
  font-weight: bold !important;
}
.accordion button .icon {
  display: inline-block;
  position: absolute;
  top: 11px;
  right: 0;
  width: 22px;
  height: 22px;
  color: white;
  background: black;
  transform: scale(1.2);
  border-radius: 5px;
}
.accordion button .icon::before {
  display: block;
  position: absolute;
  content: "";
  top: 9px;
  left: 0;
  right: 0;
  margin: auto;
  width: 10px;
  height: 2px;
  background: currentColor;
}
.accordion button .icon::after {
  display: block;
  position: absolute;
  content: "";
  top: 5px;
  left: 0;
  right: 0;
  margin: auto;
  width: 2px;
  height: 10px;
  background: currentColor;
}
/*        .accordion button[aria-expanded='true'] { color: var(--DS_PR_color_DS); }*/
.accordion button[aria-expanded="true"] .icon::after {
  width: 0;
}

.accordion button[aria-expanded="true"] {
  /* background: #7879db; */
  border-radius: 20px;
  color: var(--DS_SC_color_DS);
}
.accordion button[aria-expanded="true"] + .accordion-content {
  opacity: 1;
  max-height: 100%;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  will-change: opacity, max-height;
  width: 100%;
  /* padding: 20px; */
  /* background: var(--DS_PR_color_DS); */
  border-radius: 20px;
  margin-bottom: 0 !important;
}
span.accord {
  font-weight: bold;
}
.accordion-item {
  margin-bottom: 30px;
  padding: 15px;
  border-bottom: 1px solid #3a3b41;
}
.accordion .accordion-content {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  -webkit-transition: opacity 200ms linear, max-height 200ms linear;
  transition: opacity 200ms linear, max-height 200ms linear;
  will-change: opacity, max-height;
}
.accordion .accordion-content p {
  color: black;
  font-size: 16px;
  text-align: left;
  padding: 2px 10px;
}
.accordion .accordion-content p::-webkit-scrollbar {
  background: var(--DS_PR_color_DS);
  width: 7px;
  border-radius: 100px !important;
}
.accordion .accordion-content p::-webkit-scrollbar-thumb {
  background-color: white !important;
  border-radius: 100px !important;
}
.accordion .accordion-content p a {
  color: var(--DS_PR_color_DS) !important;
  font-weight: 900 !important;
}

@media (min-width: 768px) {
  .accordion-content {
    width: 100% !important;
  }
}
@media (max-width: 768px) {
  .accordion-item {
    margin-bottom: 20px !important;
  }
  body .accordion button .icon {
    transform: scale(0.8);
  }
  .accordion button {
    width: 100% !important;
  }
  .accordion button .accordion-title {
    font-size: 16px;
  }
  .accordion .accordion-content p {
    font-size: 14px;
  }
}
`,

    js: `<script>
    const items = document.querySelectorAll(".accordion button");
  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }
  items.forEach(item => item.addEventListener('click', toggleAccordion));
</script>`,
  },
  {
    name: "mybusiness-passion",
    image: mybusinesspassion,
    html: `
<div class="DS_FAQ_DS">
<div style="visibility: hidden; position: absolute; width: 0px; height: 0px;">
  <svg xmlns="http://www.w3.org/2000/svg">
    <symbol viewBox="0 0 24 24" id="expand-more">
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path><path d="M0 0h24v24H0z" fill="none"></path>
    </symbol>
    <symbol viewBox="0 0 24 24" id="close">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path>
    </symbol>
  </svg>
</div>
<details>
  <summary>
    À quel moment dois-je rejoindre l'Académie ?
    <svg class="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expand-more" ></use></svg>
    <svg class="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" ></use></svg>
  </summary>
  <p>Il est recommandé de rejoindre l'académie dès que possible. Se former avant de démarrer un projet permet d'éviter des erreurs potentielles qui pourraient freiner son développement. Rejoindre l'académie avant de lancer votre projet vous assure de commencer dans les meilleures conditions. Ne prenez pas de risques inutiles : nous avons un plan d'action étape par étape pour vous accompagner dans le développement de votre projet et de votre nouvelle vie." </p>
</details>
<details>
  <summary>
    Y a-t-il un suivi à la fin des 12 semaines ?
    <svg class="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expand-more" ></use></svg>
    <svg class="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" ></use></svg>
  </summary>
  <p>Oui, il y a un suivi après les 12 semaines. Une fois votre programme terminé, vous aurez accès à un groupe privé premium réservé aux membres de l'académie. Dans ce groupe, vous pourrez partager vos résultats, poser des questions, apporter de l'aide à d'autres membres, et interagir avec la communauté. Ce groupe premium vous offre également deux sessions de questions-réponses groupées par mois avec moi, ainsi que d'autres avantages exclusifs pour vous soutenir dans le développement et la vente de vos produits numériques. Nous sommes là pour vous aider à réussir à chaque étape de votre parcours.</p>
</details>
<details>
  <summary>
    Est-ce accessible aux hommes ?
    <svg class="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expand-more" ></use></svg>
    <svg class="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" ></use></svg>
  </summary>
  <p>Absolument, notre programme est ouvert à tous, sans distinction de genre, d'âge ou de parcours. Nous accueillons avec plaisir toute personne désireuse d'apprendre et de se développer dans le domaine de la vente de formations en ligne et du développement personnel. Notre approche inclusive garantit que chacun, homme ou femme, puisse bénéficier des outils et des ressources nécessaires pour réussir dans cet environnement dynamique et stimulant.</p>
</details>
<details>
  <summary>
    Est-ce que le CPF est disponible ?
    <svg class="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expand-more" ></use></svg>
    <svg class="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" ></use></svg>
  </summary>
  <p>Malheureusement, notre académie n'est pas éligible au CPF. Nous croyons fermement que l'investissement financier personnel encourage souvent une plus grande implication et un engagement plus sérieux dans les programmes de formation. Nous nous efforçons d'offrir une expérience de formation de haute qualité à nos membres et recherchons des personnes déterminées à apporter des changements significatifs dans leur vie, prêtes à investir en elles-mêmes pour y parvenir."</p>
</details>
</div>
`,
    css: `
    .DS_FAQ_DS details {
      width: 98%;
      min-height: 5px;
      max-width: 700px;
      padding: 25px 30px;
      margin: 0 auto;
      position: relative;
      font-size: 18px;
      border: 1px dashed white;
      border-radius: 15px;
      box-sizing: border-box;
      transition: all .3s;
      background-color: transparent;
      text-align: left
    }

    .DS_FAQ_DS details + details {
      margin-top: 20px;
    }

    .DS_FAQ_DS details[open] {
      min-height: 50px;
      background-color: var(--DS_SC_color_DS);
      box-shadow: 2px 2px 20px rgba(0,0,0,.2);
    }

    .DS_FAQ_DS details p {
      font-weight: 300;
      font-size: 18px;
      padding: 20px;
      color: black;
    }

    .DS_FAQ_DS details[open] summary, .DS_FAQ_DS details[open] p{ color: white }
    .DS_FAQ_DS summary {
        /*font-family: Visby Heavy !important;*/
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 700;
      color: white;
      cursor: pointer;
      transition: all 0.5s
    }

    .DS_FAQ_DS summary:focus {
      outline: none;
    }

    .DS_FAQ_DS summary:focus::after {
      content: "";
      height: 100%;
      width: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      box-shadow: 0 0 0 2px var(--DS_SC_color_DS);
      border-radius: 15px;
    }

    .DS_FAQ_DS summary::-webkit-details-marker {
      display: none
    }

    .DS_FAQ_DS .control-icon {
        fill: white;
        transition: .3s ease;
        /*pointer-events: none;*/
        width: 30px !important;
        height: 30px !important;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: 10px;
    }

    .DS_FAQ_DS .control-icon-close {
      display: none;
    }

    .DS_FAQ_DS details[open] .control-icon-close {
      display: initial;
      transition: .3s ease;
    }

    .DS_FAQ_DS details[open] .control-icon-expand {
      display: none;
    }

    @media (max-width: 769px){
      .DS_FAQ_DS summary, .DS_FAQ_DS details p { font-size: 14px !important;}

    }
  `,
  },
];
