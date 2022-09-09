exports.login = async (req, res) => {
    try{
        const userPassword = req.body.password;
        if(userPassword !== process.env.PASSWORD){
            return res.status(200).json({
                success: false,
                message: "Salasana on väärin"
            })
        }
        res.status(200).json({
            success: true,
            message: "Kirjauduit onnistuneesti"
        })

    }catch(err){
        res.status(401).json({
            success: false,
            message: err
        })
    }
}