exports.auth = async (req, res, next) => {
  try {
    const token =
      req.headers.authorization || req.query.token || req.body.token;

    // Check if token exists
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Verify token
    jwt.verify(token, process.env.jwt, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Unauthorized" });
      } else {
        // Attach decoded user object to request for further processing
        req.user = decoded;
        next();
      }
    });
  } catch (err) {}
};


exports.isCreator = async(req,res,next)=>{
    try{
        if(req.user.role !== 'creator'){
            return res.status(400).json({
                success: false,
                message: 'This route is only for creator!!'
            })
        }
        next();
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}