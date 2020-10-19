module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [

  ],
  theme: {
    extend: {
      colors: {
        'black-icon':'#040404',
        'black-arrows':'#b0b0b0',
        'white-nav':'#f5f5f5',
        'gray-bg':'#f2f2f2',
        'gray-light':'#e2e2e2',
        'gray-darker':'#b3b3b3',
        'grayer-gray':'#eff0f0',
        'category-gray':'#e9e9e9',
        'category-links':'rgb(102,102,102)',
        'gearIcon-gray':'#b7b7b7',
        'footer-gray':'#dfe1e2',
        'footer-text':'#333333',
        'footer-social_links':"#999999",
        'footer-copyright-text':'rgb(153,153,153)',
        'testimonials-gray-bg':'#dddddd',
        'video-bg': 'rgba(25,25,25,0.7)',
        'btn-orange':'#f58221',
        'bg-orange-lighter':'#fea305',
        'bg-orange-darker': '#f99213',
        'gearIcon-orange':'#e5791f',
        'darkgreen-bg':'#1fa56b',
        'much-darker-green-bg':'#037242',
        'btn-darkgreen':'#067746',
        'contacts-darkgreen':'#15935d',
        'contacts-input-black':'#767676'

      },
      spacing: {
        '1-':'0.125rem',
        '4+':'1.125rem',
        '12-':'2.9rem',
        '22':'5.5rem',
        '29':'7.2rem',
        '54':'54px',
        '56-':'13.5rem',
        '80':'20rem',
        'veryLarge':'25rem',
        '215':'215px',
        '380':'380px',
        '480':'480px',
        '540':'540px',
      },
      boxShadow: {
        'outline-orange' :'0 0 0 3px rgba(0,0,0,0.5)',
        'card-shadow':'0px 0px 10px 0px rgba(0, 0, 0, 0.15)',
        'card-shadow-hover':'0px 0px 10px 8px rgba(0, 0, 0, 0.15)',
        'certificate-shadow':'2px 3px 7px 0px rgba(0, 0, 0, 0.35)'
      },
      fontSize: {
        'sm+':'0.9125rem',
        'xl-':'1.2rem',
        'xl+':'1.375rem',
        '2xl-':'1.45rem',
        '2xl+':'1.6rem'
      },
      inset: {
        '-6': '-6px',
        '-9':'-9px',
        '-16':'-16px',
        '-30':'-30px',
        '-100':'-100px',
        '-230':'-230px',
        '50':'50px',
        '110':'110px',
        '127':'127px',
        '152':'152px'

      },
      maxHeight: {
        '245':'245px',
        '540':'540px',
        '600':'600px',
        '750':'750px'
      },
      maxWidth: {
        'xxs':'18rem',
        'xs+':'20.1rem'
      },
      opacity:{
        85:'0.85'
      },
      fontFamily: {
        heading: 'granit',
      },
      gap:{
        7:'1.75rem'
      }

    },
  },
  variants: {
    borderWidth: ['responsive','hover','focus'],
    borderColor: ['responsive','hover','focus'],
    borderStyle:['hover','focus'],
    boxShadow:['responsive','hover','focus'],
    height:['responsive','hover'],
    width:['responsive'],
    backgroundColor:['responsive','hover','focus', 'group-hover'],
    backgroundImage:['responsive'],
    textAlign: ['responsive'],
    maxHeight:['responsive'],
    colors:['responsive']
  },
  plugins: [],
};
