import web from "../src/images/s1.jpg";
import app from "../src/images/app.jpg";
import music from "../src/images/android.jpeg";
import digital from "../src/images/digital.jpeg";
import marketing from "../src/images/marketing.jpg";
import software from "../src/images/software.jpg";

const Sdata = [
  {
    imgsrc: digital,
    title: "Roadmaps",
    move : "/roadmap"
  },
  {
    imgsrc: marketing,
    title: "DataStructure & Algorithm",
    move: "/dsaService",
  },
  {
    imgsrc: web,
    title: "Web Development",
    move: '/webdev',
  },
  {
    imgsrc: music,
    title: "Job Tracking",
    move : "/contact"
  },
  {
    imgsrc: app,
    title: "Core Subjects",
    move : "/subjectService"
  },
  {
    imgsrc: software,
    title: "Music",
    move : "/music"
  },
];

export default Sdata;
