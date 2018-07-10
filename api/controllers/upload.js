var mongoose = require('mongoose');

module.exports = {
  uploadFile: (req,res) => {
    console.log(req.file + "File value is");
    res.redirect('/courses');
  }

}
/*
conn.once('open', function (req,res) {
    console.log('open');

    // streaming to gridfs
    //filename to store in mongodb
    var writestream = gfs.createWriteStream({
        filename: 'mongo_file.txt'
    });
    fs.createReadStream('/home/etech/sourcefile.txt').pipe(writestream);

    writestream.on('close', function (file) {
        // do something with `file`
        console.log(file.filename + 'Written To DB');
    });
}); */
