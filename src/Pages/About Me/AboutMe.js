import React from 'react';


const AboutMe = () => {

  const html = { "--value": 85 };
  const css = { "--value": 75 };
  const js = { "--value": 70 };
  const react = { "--value": 80 };
  const node = { "--value": 65 };
  const mongodb = { "--value": 55 };
  const express = { "--value": 65 };
  const others = { "--value": 90 };


  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: "url(https://www.disruptordaily.com/wp-content/uploads/2019/09/Basil-Security-1024x683.jpg)" }}>
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl border-2 border-slate-500 py-2 px-4 bg-opacity-20 bg-black">
            <h1 className="mb-5 text-4xl font-bold text-white mb-0">I'M ABUDLLAH BOSHIR</h1>
            <p className="mb-5 text-primary pb-0 mb-0">Beautiful creative experience in website development.</p>
          </div>
        </div>
      </div>


      <div className='bg-[#03BCBE] h-[600px] h-sreen flex itemx-center justify-center text-white flex-col'>
        <div className='mb-16 flex flex-col justify-center w-sreen'>
          <h1 className='text-4xl font-semibold mt-'>About Me</h1>
          <p className='text-center'>CREATIVE WEB DEVELOPER</p>
        </div>
        <div className='flex justify-between items-center px-28 text-white'>
          <div className='w-[700px] text-start ml-12'>
            <h1 className='text-2xl font-semibold'>ABDULLAH BOSHIR</h1>
            <h2 className='mb-4 text-base font-semibold'>Beautiful creative experience in website development.</h2>
            <p>hello, I'm Abdulla Boshir. as a Web developer from Bangladesh. actually, Web development is my hobby. I really enjoy this job very much. I have creative experience in website development. and I always like trying to learn something new in this sector. that's why I find Confidence in this Sector. I don’t believe in declarations, I just believe in how much I have been able to satisfy you or the company with my skills.</p>

            <div class="collapse mt-6 w-[275px]">
              <input type="checkbox" class="peer" />
              <div class="collapse-title bg-cyan-900 text-white peer-checked:bg-secondary peer-checked:text-secondary-content text-center">
                DOWNLOAD MY RESUME
              </div>
              <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>hello</p>
              </div>
            </div>
          </div>

          <div className="w-[500px] ml-24"><img className='w-60' src="https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png" alt="" /></div>

        </div>
      </div>



      <div className='bg-gray-200 h-[600px] h-sreen flex items-center justify-center text-black flex-col'>

        <div className='mb-16 flex flex-col justify-center w-sreen'>
          <h1 className='text-4xl font-semibold text-secondary'>TECHNICAL SKILLS</h1>
          <p className='text-center'>CREATIVE WEB DEVELOPER</p>
        </div>

        <div className='grid grid-cols-4 gap-4 w-[800px]'>

          <div>
            <div class="radial-progress text-secondary" style={html}>85%</div>
            <h1 className='text-xl font-semibold'>HTML5</h1>
          </div>

          <div>
            <div class="radial-progress text-secondary" style={css}>75%</div>
            <h1 className='text-xl font-semibold'>CSS3</h1>
          </div>
          <div>
            
            <div class="radial-progress text-secondary" style={js}>70%</div>
            <h1 className='text-xl font-semibold'>JAVASRIPT</h1>
          </div>

          <div>
            <div class="radial-progress text-secondary" style={react}>80%</div>
            <h1 className='text-xl font-semibold'>REACT</h1>
          </div>

          <div>
            <div class="radial-progress text-secondary" style={node}>65%</div>
            <h1 className='text-xl font-semibold'>NODE</h1>
          </div>
          <div>

            <div class="radial-progress text-secondary" style={mongodb}>55%</div>
            <h1 className='text-xl font-semibold'>MONGO DB</h1>
          </div>

          <div>
            <div class="radial-progress text-secondary" style={express}>65%</div>
            <h1 className='text-xl font-semibold'>EXPRESS</h1>
          </div>
          <div>

            <div class="radial-progress text-secondary" style={others}>90%</div>
            <h1 className='text-xl font-semibold'>OTHERS</h1>
          </div>


        </div>


      </div>
    </div>
  );
};

export default AboutMe;