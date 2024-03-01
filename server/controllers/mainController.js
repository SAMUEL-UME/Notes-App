exports.homepage = async (req, res) => {
    const locals ={
        title: 'Nodejs notes',
        description: 'Free Nodejs note app'
    }
    res.render('index', locals)
}