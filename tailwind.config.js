/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {   
      colors: theme => ({
        'blue' : 'var(--blue)' ,
        'light-red-work' : 'var(--light-red-work)' ,
        'soft-blue-play' : 'var(--soft-blue-play)' ,
        'light-red-study' : 'var(--light-red-study)' ,
        'lime-green-exercise' : 'var(--lime-green-exercise)' ,
        'violet-social' : 'var(--violet-social)' ,
        'soft-orange-self-care' : 'var(--soft-orange-self-care)' ,
        'very-dark-blue' : 'var(--very-dark-blue)' ,
        'dark-blue' : 'var(--dark-blue)' ,
        'desaturated-blue' : 'var(--desaturated-blue)' ,
        'pale-blue' : 'var(--pale-blue)' ,
      }),
      backgroundColor: theme => ({
        'blue' : 'var(--blue)' ,
        'light-red-work' : 'var(--light-red-work)' ,
        'soft-blue-play' : 'var(--soft-blue-play)' ,
        'light-red-study' : 'var(--light-red-study)' ,
        'lime-green-exercise' : 'var(--lime-green-exercise)' ,
        'violet-social' : 'var(--violet-social)' ,
        'soft-orange-self-care' : 'var(--soft-orange-self-care)' ,
        'very-dark-blue' : 'var(--very-dark-blue)' ,
        'dark-blue' : 'var(--dark-blue)' ,
        'desaturated-blue' : 'var(--desaturated-blue)' ,
        'pale-blue' : 'var(--pale-blue)' ,
      }),
      fontFamily: theme => ({
        'Rubik':['Rubik','sans-serif']
      }),      
    },
  },
  plugins: [],
}
