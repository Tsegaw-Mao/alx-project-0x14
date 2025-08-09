const MovieCard: React.FC<{ movie: { title: string, posterUrl: string, description: string } }> = ({ movie }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={movie.posterUrl} alt={movie.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
        <p className="text-gray-700 mb-4">{movie.description}</p>
      </div>
    </div>
  )
}
export default MovieCard;