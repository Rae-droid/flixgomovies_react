import movieSchema from "../models/movieSchema";


export const movieSchema = async (req, res) => {
 try {
     const userId = req.userId;
     const user = await userModel.findById(userId);
     if (!user) {
       return res.json({ success: false, message: "Movie Not Found" });
     }
     res.json({
       success: true,
       movieData: {
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