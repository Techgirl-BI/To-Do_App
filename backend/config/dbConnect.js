export const dbConnect = () => {
    const conn = mongoose.connect("mongodb+srv://rachealonimisi:ohunene123@racheals-cluster.c4ckoip.mongodb.net/to_do_App")
return conn
}
