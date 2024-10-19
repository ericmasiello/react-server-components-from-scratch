import React, { Suspense } from "react";



function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Eric" });
    }, 1000);
  })
    
}


const About = () => {
  // const data = use( getData() );
  return (
    <div>
      <h1>About me</h1>
      {/* Note this doesn't really work yet. It only shows the fallback */}
      <Suspense fallback={<div>Loading...</div>}>
        <div>My name is Eric</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum aspernatur iste explicabo magni neque! Ducimus fuga, voluptatem sint vel consequuntur officia ratione corrupti amet rem, velit placeat sapiente molestias.</p>
      </Suspense>
    </div>
  );
};

export default About;
