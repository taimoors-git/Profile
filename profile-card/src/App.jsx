import React from 'react'
import Profile from './components/Profile'

const App = () => {
  const people = [
  {
    name: "Alice Johnson",
    post: "Frontend Developer",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    links: [
      "https://github.com/alice",
      "https://linkedin.com/in/alice",
      "https://twitter.com/alice"
    ]
  },
  {
    name: "Bob Smith",
    post: "Backend Engineer",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    links: [
      "https://github.com/bob",
      "https://linkedin.com/in/bob",
      "https://twitter.com/bob"
    ]
  },
  {
    name: "Charlie Davis",
    post: "UI/UX Designer",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
    links: [
      "https://github.com/charlie",
      "https://linkedin.com/in/charlie",
      "https://twitter.com/charlie"
    ]
  },
  {
    name: "Diana Lee",
    post: "Project Manager",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135773.png",
    links: [
      "https://github.com/diana",
      "https://linkedin.com/in/diana",
      "https://twitter.com/diana"
    ]
  },
  {
    name: "Ethan Brown",
    post: "React Developer",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135764.png",
    links: [
      "https://github.com/ethan",
      "https://linkedin.com/in/ethan",
      "https://twitter.com/ethan"
    ]
  },
  {
    name: "Fiona Green",
    post: "QA Engineer",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135781.png",
    links: [
      "https://github.com/fiona",
      "https://linkedin.com/in/fiona",
      "https://twitter.com/fiona"
    ]
  },
  {
    name: "George White",
    post: "DevOps Specialist",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135779.png",
    links: [
      "https://github.com/george",
      "https://linkedin.com/in/george",
      "https://twitter.com/george"
    ]
  },
  {
    name: "Hannah Black",
    post: "Mobile Developer",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135785.png",
    links: [
      "https://github.com/hannah",
      "https://linkedin.com/in/hannah",
      "https://twitter.com/hannah"
    ]
  },
  {
    name: "Ian Gray",
    post: "Data Scientist",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135791.png",
    links: [
      "https://github.com/ian",
      "https://linkedin.com/in/ian",
      "https://twitter.com/ian"
    ]
  },
  {
    name: "Julia Brown",
    post: "Fullstack Developer",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135795.png",
    links: [
      "https://github.com/julia",
      "https://linkedin.com/in/julia",
      "https://twitter.com/julia"
    ]
  }
];

  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

    {people.map(function(elem){
      return (
        <Profile
        key = {elem.name}
        name = {elem.name}
        post = {elem.post}
        img = {elem.img}
        links ={elem.links}
        />
      )
    })}
    </div>
  )
}

export default App
