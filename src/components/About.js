import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="about--title font-weight-bolder">
        <h3>About YBMS</h3>
      </div>
      <p>
        To know a person's favorite movies is to find a thread that We can follow to understand what touches they. So, browsing on YBMS you will know a little more about me and that's something you <strong>can't</strong> find on IMDB <span>;)</span>
      </p>
      <div className="about--title font-weight-bolder">
        <h3>About Me</h3>
      </div>
        <p>
        My name is <span className="Body-primary font-weight-bolder">Joaquim Medeiros</span>, I was born in Curitiba, in the state of Paraná (Brazil) at 1983. I started coding when I was a kid. I can't rebember why but, for a while, someone let this 8-bit MSX computer at our home. I was learning to read and had much fun copying the BASIC code instructions and seeing the results on the screen.
        </p>
        <div className="about--title font-weight-bolder">
        <h3>Me as a frontend developer</h3>
      </div>
      <p>
      I'm a <strong>junior frontend developer</strong>. I first started developing for the frontend in middle 2018, using Angular to build a modern interface for a legacy system written in Delphi (which I also helped develop for some time).
      </p>
      <p>
      In 2019 I got an offer to come to Blumenau work as a frontend developer using ReactJS and (again) Angular. But, unfortunately, I almost didn't touch ReactJS code and was given almost only Angular tasks to solve. So I still don't have much experience with ReacJS.
      </p>
      <p>
      Now I'm looking for an opportunity to advance in my career in a new place. I used an old MVC of mine as boilerplate to this project and I'm enjoying very much this challenge proposed by Philips <span>:)</span>
      </p>
      <p>
      I must admit that, because a certain lack of experience, I was worried about the challenge. But then I got the rhythm. And now I worried but with a rhythm!
      </p>
    </div>
  );
}

export default About;
