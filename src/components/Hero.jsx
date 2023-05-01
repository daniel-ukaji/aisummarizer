import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col overflow-x-hidden'>
      <nav className='flex justify-between items-center w-10/12 xl:w-full mb-10 pt-3'>
        {/* <img 
          src={logo} 
          alt='sumz_logo' 
          className='w-28 object-contain' /> */}
          <p className='w-28 text-4xl font-bold'>Sumzo</p>

        <button 
          type='button' 
          onClick={() => window.open('https://github.com/daniel-ukaji')}
          className='black_btn'
          >
            Github
        </button>
      </nav>

      <h1 className='head_text w-10/12 xl:w-full'>Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc w-10/12 xl:w-full'>
        Simplify your reading with Summize, an open-source article
        summarizer that transforms lengthy articles into clear and
        concise summaries
      </h2>
    </header>
  )
}

export default Hero