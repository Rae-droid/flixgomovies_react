// import movieSchema from "../models/movieSchema";

import movieSchema from "../models/movieSchema";


export const movie = async (req, res) => {
 try {
     const movieId = req.params.id;
     const movie = await movieSchema.findById(movieId);
     if (!movie) {
       return res.json({ success: false, message: "Movie Not Found" });
     }
     res.json({
       success: true,
       movieSchema: {
         title: movie.title,
         releaseDate: movie.releaseDate,
         rating: movie.rating,
         duration: movie.duration,
         posterUrl: movie.posterUrl,
         description: movie.description,
         genre: movie.genre,
         director: movie.director,
       },
     });
   } catch (error) {
     return res.json({ success: false, message: error.message });
   }
 };

 export default movieSchema;