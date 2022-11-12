import React from 'react';

function About() {
  return (
    <div style={{paddingTop: '4rem'}} className='card-container'>   
        <div className='card-form card about-form' style={{width: '50%', backgroundColor: 'aqua', marginTop: '2px'}}>
            <h2>Description:</h2>
                <p> I built this app as a project for my bootcamp using React.</p>
                <p>I definately had some help from my TMs and collegues.</p>
                <p>Definately not taking credit for this but will continue to practice until i get it.</p>
        </div>
        <div className='card-form card about-form' style={{width: '50%', backgroundColor: 'aqua', marginTop: '2px'}}>
            <h2>More Details:</h2>
                <p> In this app, on loading, it will populate already created notes from the json server.</p>
                <p>You will be able to add new notes after filling the form which will also populate on the page.</p>
                <p>You will also be able to delete a note once you've added it.</p>
                <p>I didn't manage to add the edit button on the notes, but will continue to work on it after submissions</p>
        </div>

        <div className='card-form card about-form' style={{width: '50%', backgroundColor: 'aqua', marginTop: '2px'}}>
            <h2>Time of creation:</h2>
                <p> August 2022.</p>
        </div>
    </div>
  )
}

export default About;