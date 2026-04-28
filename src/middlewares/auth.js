const validarToken = (req, res, next) => {
    console.log('Validando token');
    const token = req.headers.authorization;

    if(!token){
        res.status(401).json({msg: 'No se paso el JWT'});
    }
    console.log({token});

    next();
}

export default validarToken;