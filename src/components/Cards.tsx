import React from 'react';
import Users from '../data/data';

function Cards() {
  return (
    <div className='cards-container'>
        <div className='content'>
            {Users.map((user , key): any=>( 
                <div className='card' key={key}>
                    <div className='header'>
                        <div className='img'></div>
                        <div className='title'>
                            <h2>{user.name}</h2>
                            <h3>{user.email}</h3>
                        </div>
                    </div>
                    <h2>I received a j nonestly feel I got every penny's worth. </h2>
                    <p>"I was an EMT for many years before I joined the
                         best - and most grueling - time of my
                        life. Since completing the course, I've
                        successfully switched careers, working as a
                        Software Engineer at a VR startup." 
                    </p>
                </div>
                
            ))}

        </div>
    </div>
  )
}

export default Cards