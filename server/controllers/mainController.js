exports.homepage = async (req, res) => {
    const locals ={
        title: 'Nodejs notes',
        description: 'Free Nodejs note app'
    }
    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    })
}
exports.about = async (req, res) => {
    const locals ={
        title: 'About Nodejs notes',
        description: 'Free Nodejs note app'
    }
    res.render('about', locals)
}