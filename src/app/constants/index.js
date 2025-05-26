const navItems = [
    {
      name: "Work",
      path: "/",
      subMenuItems: [
        { id: 1, cName: "submenu-item", name: "Skills", link: "/#skills" },
        { id: 2, cName: "submenu-item", name: "Experience", link: "/#experience" },
        { id: 3, cName: "submenu-item", name: "Projects", link: "/#projects" }
      ]
    },
     {    
      name: "Life",
      path: "/life/photography",
      subMenuItems: [
        { id: 1, cName: "submenu-item", name: "Photography", link: "/life/photography" },
        { id: 2, cName: "submenu-item", name: "Travel", link: "/life/travel" },
        { id: 3, cName: "submenu-item", name: "Sports", link: "/life/sports" }
      ]
    }
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 2, suffix: "+", label: "Years of Experience" },
    { value: 100, suffix: "s", label: "Commits" },
    { value: 5, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/general-dynamics.png",
    },
    {
      imgPath: "/images/logos/jpmc.png",
    }
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  // Key Skills to Add - React, Python, Spring Java/Boot, CI/CD (Kubernetes, Docker, Jenkins), Node.js, AWS
  const techStackIcons = [
    {
      name: "React",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Spring Java",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
  ];
  
  const expCards = [
    {
      review: "",
      imgPath: "/images/jpmc-logo.jpeg",
      logoPath: "/images/chase-logo.png",
      title: "Software Engineer II",
      date: "July 2022 - Present",
      responsibilities: [
       
      ],
    },
    {
      review: "",
      imgPath: "/images/gd.jpg",
      logoPath: "/images/general-dynamics-logo.jpg",
      title: "Embedded Software Engineer Intern",
      date: "June 2019 - August 2021",
      responsibilities: [
       
      ],
    },
    {
      review: "",
      imgPath: "/images/huskies.png",
      logoPath: "/images/uconn-logo.png",
      title: "Student",
      date: "August 2018 - May 2022",
      responsibilities: [
        
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {},
    {},
    {}
  ];
  
  const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
    },
    {
      name: "fb",
      imgPath: "/images/fb.png",
    },
    {
      name: "x",
      imgPath: "/images/x.png",
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navItems
  };