import Slideshow from "./Slideshow";
const Project = () => {
  const images = [
    "./projects/project1.jpg",
    "./projects/project2.jpg",
    "./projects/project3.jpg",
  ];
  return <Slideshow images={images}></Slideshow>;
};

export default Project;
