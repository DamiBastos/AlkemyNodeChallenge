const { Personajes, Peliculas_Series, Generos } = require('../db');

async function preloadInfo() {
    const p1 = await Personajes.create({imagen: "link1",nombre: "Pinocho",edad: 30,peso: 1,historia: "conciencia de pinocho",
});
    const p2 = await Personajes.create({imagen: "link1",nombre: "Pepe Grillo",edad: 30,peso: 1,historia: "conciencia de pinocho",
});
const p3 = await Personajes.create({imagen: "link1",nombre: "Hada Azul",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p4 = await Personajes.create({imagen: "link1",nombre: "Gepeto",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p5 = await Personajes.create({imagen: "link1",nombre: "Kuzco",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p6 = await Personajes.create({imagen: "link1",nombre: "Kronk",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p7 = await Personajes.create({imagen: "link1",nombre: "Pacha",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p8 = await Personajes.create({imagen: "link1",nombre: "Yzma",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p9 = await Personajes.create({imagen: "link1",nombre: "Dumbo",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p10 = await Personajes.create({imagen: "link1",nombre: "Sra Jumbo",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p11 = await Personajes.create({imagen: "link1",nombre: "Pongo",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p12 = await Personajes.create({imagen: "link1",nombre: "Perdita",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p13 = await Personajes.create({imagen: "link1",nombre: "Cruella",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p14 = await Personajes.create({imagen: "link1",nombre: "Simba",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p15 = await Personajes.create({imagen: "link1",nombre: "Timon",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p16 = await Personajes.create({imagen: "link1",nombre: "Pumba",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p17 = await Personajes.create({imagen: "link1",nombre: "Mufasa",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p18 = await Personajes.create({imagen: "link1",nombre: "Scar",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p19 = await Personajes.create({imagen: "link1",nombre: "Han Solo",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p20 = await Personajes.create({imagen: "link1",nombre: "Leia",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p21 = await Personajes.create({imagen: "link1",nombre: "Luke Skywalker",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p22 = await Personajes.create({imagen: "link1",nombre: "Anakin",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p23 = await Personajes.create({imagen: "link1",nombre: "Darth Vader",edad: 30,peso: 1,historia: "conciencia de pinocho",
})
const p24 = await Personajes.create({
imagen: "link1",
nombre: "Yoda",
edad: 30,
peso: 1,
historia: "conciencia de pinocho",
})
const p25 = await Personajes.create({
imagen: "link1",
nombre: "Ben",
edad: 30,
peso: 1,
historia: "conciencia de pinocho",
})
const p26 = await Personajes.create({
imagen: "link1",
nombre: "Bobba Fet",
edad: 30,
peso: 1,
historia: "conciencia de pinocho",
})
const p27 = await Personajes.create({
imagen: "link1",
nombre: "Spiderman",
edad: 30,
peso: 1,
historia: "conciencia de pinocho",
})
const p28 = await Personajes.create({
imagen: "link1",
nombre: "Venom",
edad: 30,
peso: 1,
historia: "conciencia de pinocho",
})
const p29 = await Personajes.create({
imagen: "link1",
nombre: "Iron Man",
edad: 30,
peso: 1,
historia: "conciencia de pinocho",
})
const p30 = await Personajes.create({
imagen: "link1",
nombre: "Duende Verde",
edad: 30,
peso: 1,
historia: "conciencia de pinocho",
})

    const m1 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Pinocho",
      fecha_creacion: "12/12/1990", 
      calificacion: 5,
    })
    const m2 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Las Locuras del Emperador",
      fecha_creacion: "12/12/1990", 
      calificacion: 4,
})
    const m3 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Las Nuevas Locuras del Emperador",
      fecha_creacion: "12/12/1990", 
      calificacion: 5,
})
    const m4 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Dumbo",
      fecha_creacion: "12/12/1990", 
      calificacion: 2,
})
    const m5 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"101 Dalmatas",
      fecha_creacion: "12/12/1990", 
      calificacion: 2,
})
    const m6 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"101 Dalmatas, La Serie",
      fecha_creacion: "12/12/1990", 
      calificacion: 3,
    })
    const m7 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Cruella",
      fecha_creacion: "12/12/1990", 
      calificacion: 4,
})
    const m8 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"La Bella Durmiente",
      fecha_creacion: "12/12/1990", 
      calificacion: 2,
})
    const m9 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Malefica",
      fecha_creacion: "12/12/1990", 
      calificacion: 5,
})
    const m10 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"El Rey León",
      fecha_creacion: "12/12/1990", 
      calificacion: 3,
})
    const m11 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"El Rey León, Volumen 2",
      fecha_creacion: "12/12/1990", 
      calificacion: 3,
})
    const m12 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"El Rey León, Volumen 3",
      fecha_creacion: "12/12/1990", 
      calificacion: 2,

})
    const m13 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Timon y Pumba, La Serie",
      fecha_creacion: "12/12/1990", 
      calificacion: 3,
})
    const m14 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Star Wars I",
      fecha_creacion: "12/12/1990", 
      calificacion: 4,
})
    const m15 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Star Wars II",
      fecha_creacion: "12/12/1990", 
      calificacion: 4,
}
)
    const m16 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Star Wars III",
      fecha_creacion: "12/12/1990", 
      calificacion: 5,
})
    const m17 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Star Wars IV",
      fecha_creacion: "12/12/1990", 
      calificacion: 5,
})
    const m18 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Star Wars V",
      fecha_creacion: "12/12/1990", 
      calificacion: 4,
})
    const m19 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Star Wars VI",
      fecha_creacion: "12/12/1990", 
      calificacion: 4,
})
    const m20 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Star Wars VII",
      fecha_creacion: "12/12/1990", 
      calificacion: 3,
})
    const m21 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Star Wars VIII",
      fecha_creacion: "12/12/1990", 
      calificacion: 3,
})
    const m22 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Star Wars IX",
      fecha_creacion: "12/12/1990", 
      calificacion: 3,
})
    const m23 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Han Solo, La pelicula",
      fecha_creacion: "12/12/1990", 
      calificacion: 3,
})
    const m24 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Bobba Fet",
      fecha_creacion: "12/12/1990", 
      calificacion: 4,
})
    const m25 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Mandalorian",
      fecha_creacion: "12/12/1990", 
      calificacion: 4,
})
    const m26 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Spider-Man",
      fecha_creacion: "12/12/1990", 
      calificacion: 5,
})
const m27 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Spider-Man 2",
      fecha_creacion: "12/12/1990", 
      calificacion: 4,
})
const m28 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Spider-Man 3",
      fecha_creacion: "12/12/1990", 
      calificacion: 3,
})
const m29 = await Peliculas_Series.create({
      imagen:"asdasdasd", 
      titulo:"Venom",
      fecha_creacion: "12/12/1990", 
      calificacion: 3,
})

const g1 = await Generos.create({
    nombre: "Acción",
    imagen: "asdasdasd",
})
const g2 = await Generos.create({
    nombre: "Comedia",
    imagen: "asdasdasd",
})
const g3 = await Generos.create({
    nombre: "Aventura",
    imagen: "asdasdasd",
})
const g4 = await Generos.create({
    nombre: "Ciencia Ficción",
    imagen: "asdasdasd",
})
const g5 = await Generos.create({
    nombre: "Fantasía",
    imagen: "asdasdasd",
})
const g6 = await Generos.create({
    nombre: "Musical",
    imagen: "asdasdasd",
})
const g7 = await Generos.create({
    nombre: "Infantil",
    imagen: "asdasdasd",
})
  
       await p1.addPeliculas_Series([m1]);
       await p2.addPeliculas_Series([m1]);
       await p3.addPeliculas_Series([m1]);
       await p4.addPeliculas_Series([m1]);
       await p5.addPeliculas_Series([m2, m3]);
       await p6.addPeliculas_Series([m2, m3]);
       await p7.addPeliculas_Series([m2]);
       await p8.addPeliculas_Series([m2]);
       await p9.addPeliculas_Series([m4]);
       await p10.addPeliculas_Series([m4]);
       await p11.addPeliculas_Series([m5]);
       await p12.addPeliculas_Series([m5]);
       await p13.addPeliculas_Series([m5, m6, m7]);
       await p14.addPeliculas_Series([m10, m11, m12]);
       await p15.addPeliculas_Series([m10, m11, m12, m13]);
       await p16.addPeliculas_Series([m10, m11, m12, m13]);
       await p17.addPeliculas_Series([m10]);
       await p18.addPeliculas_Series([m10]);
       await p19.addPeliculas_Series([m17, m18, m19, m20, m23]);
       await p20.addPeliculas_Series([m17, m18, m19, m20, m21, m22]);
       await p21.addPeliculas_Series([m17, m18, m19, m20, m21, m22]);
       await p22.addPeliculas_Series([m14, m15, m16]);
       await p23.addPeliculas_Series([m16, m17, m18, m19]);
       await p24.addPeliculas_Series([m14, m15, m16, m17, m18, m19]);
       await p25.addPeliculas_Series([m20, m21, m22]);
       await p26.addPeliculas_Series([m14, m15, m16,m24, m25]);
       await p27.addPeliculas_Series([m26, m27, m28]);
       await p28.addPeliculas_Series([m28, m29]);
       await p29.addPeliculas_Series([m26, m27]);
       await p30.addPeliculas_Series([m26]);
       await p1.save();
       await p2.save();
        await p3.save(); 
        await p4.save();
        await p5.save();
        await p6.save();
        await p7.save();
        await p8.save();
        await p9.save();
        await p10.save();
        await p11.save();
       await p12.save();
        await p13.save(); 
        await p14.save();
        await p15.save();
        await p16.save();
        await p17.save();
        await p18.save();
        await p19.save();
        await p20.save();
        await p21.save();
       await p22.save();
        await p23.save(); 
        await p24.save();
        await p25.save();
        await p26.save();
        await p27.save();
        await p28.save();
        await p29.save();
        await p30.save();

        await m1.addGeneros([g5, g7]);
        await m2.addGeneros([g2, g7]);
        await m3.addGeneros([g2, g7]);
        await m4.addGeneros([g6, g7]);
        await m5.addGeneros([g2, g3]);
        await m6.addGeneros([g2, g3]);
        await m7.addGeneros([g2]);
        await m8.addGeneros([g5, g6]);
        await m9.addGeneros([g3, g5]);
        await m10.addGeneros([g6, g7]);
        await m11.addGeneros([g6, g7]);
        await m12.addGeneros([g6, g7]);
        await m13.addGeneros([g2, g7]);
        await m14.addGeneros([g1, g4]);
        await m15.addGeneros([g1, g4]);
        await m16.addGeneros([g1, g4]);
        await m17.addGeneros([g1, g4]);
        await m18.addGeneros([g1, g4]);
        await m19.addGeneros([g1, g4]);
        await m20.addGeneros([g1, g4]);
        await m21.addGeneros([g1, g4]);
        await m22.addGeneros([g1, g4]);
        await m23.addGeneros([g1, g4]);
        await m24.addGeneros([g1, g4]);
        await m25.addGeneros([g1, g4]);
        await m26.addGeneros([g1, g2]);
        await m27.addGeneros([g1, g2]);
        await m28.addGeneros([g1, g2]);
        await m29.addGeneros([g1, g2]);
        await m1.save();
        await m2.save();
        await m3.save();
        await m4.save();
        await m5.save();
        await m6.save();
        await m7.save();
        await m8.save();
        await m9.save();
        await m10.save();
        await m11.save();
        await m12.save();
        await m13.save();
        await m14.save();
        await m15.save();
        await m16.save();
        await m17.save();
        await m18.save();
        await m19.save();
        await m20.save();
        await m21.save();
        await m22.save();
        await m23.save();
        await m24.save();
        await m25.save();
        await m26.save();
        await m27.save();
        await m28.save();
        await m29.save();
        
}

    
module.exports = preloadInfo
