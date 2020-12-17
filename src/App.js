import React from 'react'

function Food({name, picture}) {
  return (
    <div>
      <h2>I love {name}</h2>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id:1,
    name: 'Kimchi',
    image: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png'
  },
  {
    id:2,
    name: "Bibimbap",
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Korean_cuisine-Jeonju_bibimbap-01.jpg/440px-Korean_cuisine-Jeonju_bibimbap-01.jpg'
  }
];

function App() {
  return (
      <div>
        { foodILike.map(dish => (
          <Food key={dish.id} name={dish.name} picture={dish.image}/>
        ))}
      </div>
  );
}

export default App;
