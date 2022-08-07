import React from 'react';

function Links() {
  return (
    <div style={{paddingTop: '4rem'}} className='card-container'>
        <div className='about-form card-form card' style={{width: '18rem', backgroundColor: 'aqua', marginTop: '2px'}}>
            <h2>Project 1:</h2>
                <a style={{textDecoration: 'none'}} href='#'>My portfolio</a>
        </div>
        <div className='about-form card-form card' style={{width: '18rem', backgroundColor: 'aqua', marginTop: '2px'}}>
            <h2>Project 2:</h2>
                <a style={{textDecoration: 'none'}} href='https://njukig.github.io/random-joke-generator/'>Random Jokes Generator</a>
        </div>
        <p>Above are links to my Portfolio and my Random Jokes Generator App project</p>
    </div>
  )
}

export default Links;