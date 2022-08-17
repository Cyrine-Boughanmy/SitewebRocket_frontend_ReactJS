import accimg from '../../images/headerimage.jpg';
import fvimg from '../../images/formezvousimage.jpg';
import prqfaire from '../../images/pourquoiunbootcampimage.jpg';
import pageprog from '../../images/programmeimage.jpg';

export const header = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    headline: ["Devenez Développeur Full Stack ",<br/>," En 2 mois, à distance"],
    description:
      'La seule formation à distance, en accéléré et intensive d’une durée de 10 semaines pour devenir Développeur Full Stack',
    buttonLabel: 'S’inscrire à la prochaine réunion d’information',
    buttonLink:'',
    imgStart: '',
    img: accimg,
    alt: 'accueil'
  };
  
  export const formezvous = {
    lightBg: true,
    lightText: false,
    lightTextDesc:false,
    headline: 'Formez-vous au métier de  Développeur Full Stack Web et Mobile',
    description:
      ' Cette formation à temps plein, intensive d’une durée de dix semaines, vous offre la  possibilté de vous former depuis chez vous au métier de Développeur Full Stack',
    buttonLabel: 'Postuler',
    buttonLink:'#contactform',
    imgStart: 'start',
    img: fvimg,
    alt: 'formez-vous'
  };
  
  export const pourquoifaire = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    headline: 'Pourquoi faire un Bootcamp à distance et en accéléré ?',
    description:
      "Chez Rocket Coding, la pratique tient une place cruciale dans notre programme de formation. Pendant ces dix semaines de formation intensive, nos rocketers réalisent plusieurs projets issus de cas réels, afin de les préparer au mieix à ce qui les attend dans le monde professionnel . Lapprentissage est encré sur la reproduction de sites Web et d applications Mobile réels, afin de présenter tous les concepts importants en programmation.",
    buttonLabel: 'Consulter le programme',
    buttonLink:'#programme',
    imgStart: 'start',
    img: prqfaire,
    alt: 'pourquoi faire le Bootcamp'
  };
  export const pageprogramme = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    headline: 'Un programme dispensé par des experts en programmation',
    description:
      "Notre objecitf numéro un est d’aider nos Rocketers à monter en compétences dans le domaine de la programmation informatique le plus rapidement possible. Nos experts en programmation proposereont des cas pratiques concernant les notions apprises, pour s’assurer de leur bonne compréhension. ",
    buttonLabel: 'Télécharger le programme',
    buttonLink:'#programme',
    imgStart: '',
    img: pageprog,
    alt: 'programme de la formation'
  };
  