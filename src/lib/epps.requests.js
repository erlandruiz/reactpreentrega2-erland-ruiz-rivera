const EPPS = [
    {
      id: 1,
      title: "Orejera Para Casco Peltor H9P3E 3M",
      category: "Auditiva",
      price: 95,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      img: "https://res.cloudinary.com/erlandruiz/image/upload/v1690361750/dzauhbcbn3fwtratacvi.jpg",
     

      
      stock: 15,
      oferta: "false",
    },
    {
      id: 2,
      title: "Tapones De Oido Verde Con Cordon Azul Cowram",
      category: "Auditiva",
      price: 2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      
      img: "https://res.cloudinary.com/erlandruiz/image/upload/v1690362057/b5zvxfvgma2yshqd6qm5.jpg",
      
      stock: 5,
      oferta: "true",
    },
    {
      id: 3,
      title: "Protector para oreja EY23-1Y",
      category: "Auditiva",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      
      price: 23,
      img: "https://res.cloudinary.com/erlandruiz/image/upload/v1690362187/ql9aapzyjrglvkl5thvv.jpg",
      stock: 10,
      oferta: "false",
     
     
   
    },
    {
      id: 4,
      title: "Casco Blanco",
      category: "Cabeza",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 45,
      img: "https://res.cloudinary.com/erlandruiz/image/upload/v1690362415/ydxpnvcq0jguzvgg6b5e.jpg",
    
      stock: 11,
      oferta: "true",
    },
    {
      id: 5,
      title: "Casco Amarillo",
      category: "Cabeza",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 48,
      img: "https://res.cloudinary.com/erlandruiz/image/upload/v1690362557/ma2onvjuy0sfpjwmowhm.jpg",
    stock: 16,
    oferta: "false",
    },
    {
      id: 6,
      title: "Casco naranja con protector de sol para cuello",
      category: "Cabeza",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 53,
      img: "https://res.cloudinary.com/erlandruiz/image/upload/v1690362657/g3qecvqeiydlpooren3l.jpg",
   
      stock: 20,
      oferta: "false",
    },
    {
      id: 7,
      title: "Guantes de hilo blanco",
      category: "Manos",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 70,
      img: "https://res.cloudinary.com/erlandruiz/image/upload/v1690362784/woobxvzsx3cellnniykm.jpg",
    
      stock: 40,
      oferta: "false",
    },
    {
      id: 8,
      title: "Guantes para soldador",
      category: "Manos",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 200,
      img: "https://res.cloudinary.com/erlandruiz/image/upload/v1690362937/wax5qmwgjl1wtv2rzohp.jpg",
  
      stock: 10,
      oferta: "true",
    },
    {
      id: 9,
      title: "Guantes recubiertos",
      category: "Manos",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 23,
      img: "https://res.cloudinary.com/erlandruiz/image/upload/v1690363110/austdvveziit4yym9z9n.jpg",
      
     
      stock: 20,
      oferta: "true",
    },
  ];

  export const getEpps = (id) => {
    const _epps = id
      ? EPPS.filter((epp) => epp.category.toLowerCase() === id)
      : EPPS;
  
    return new Promise((res) => {
      setTimeout(() => {
        res(_epps); 
      }, 500);
    });
  };
  
  export const getEpp = (id) => {
    const epp = EPPS.filter((epp) => epp.id === id)[0];
  
    return new Promise((res) => {
      setTimeout(() => {
        res(epp);
      }, 500);
    });
  };
  

  export const getEppsOferta = (id) => {
    const _eppsOferta = id
      ? EPPS.filter((epp) => epp.oferta === id)
      : EPPS;
  
    return new Promise((res) => {
      setTimeout(() => {
        res(_eppsOferta); 
      }, 500);
    });
  };