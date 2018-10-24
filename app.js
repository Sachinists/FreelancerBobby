var fs = require("fs")
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var rawData1 = fs.readFileSync("jsonData/export_prisoner.json")
var rawData2 = fs.readFileSync("jsonData/export_prisoner_address.json")
var rawData3 = fs.readFileSync("jsonData/export_sentence.json")
var rawData4 = fs.readFileSync("jsonData/export_xref.json")

var data1 = JSON.parse(rawData1)
var data2 = JSON.parse(rawData2)
var data3 = JSON.parse(rawData3)
var data4 = JSON.parse(rawData4)


var prisoner = function(id,fn,sn,cd){
    this._id = id
    this.surname = sn
    this.firstname = fn
    this.createDate = cd
}

var prisoner_address = function(id,pid,add,city,cd){
    this._id = id
    this.prisoner_id = pid
    this.address1 = add
    this.city = city
    this.createdate = cd
}

var sentence = function(pid,id,sno,sc,cd,vbid,obid){
    this.prisoner_id = pid 
    this._id = id 
    this.sentence_number = sno
    this.sentence_comments = sc
    this.createdate = cd
    this.vicitim_blob_id = vbid
    this.official_blob_id = obid
}

var xref = function(id,code,desc){
    this._id = id
    this.xref_code = code
    this.xref_desc = desc
}

var prisonerList = []
var prisonerAddressList = []
var sentencesList = []
var xrefList = []

data1.items.forEach(element => {
    prisonerList.push(new prisoner(element.prisoner_id,element.firstname,element.surname,element.createdate))
});
data2.items.forEach(element => {
    prisonerAddressList.push(new prisoner_address(element.prisoner_addres_id,element.prisoner_id,element.address1,element.city,element.createdate))
});
data3.items.forEach(element => {
    sentencesList.push(new sentence(element.prisoner_id,element.sentence_id,element.sentence_number,element.sentence_comments,element.createdate,element.vicitim_blob_id,element.official_blob_id))
});
data4.items.forEach(element => {
    xrefList.push(new xref(element.xref_id,element.xref_code,element.xref_desc))
});


MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.dropDatabase();
  dbo.collection("prisoner").insertMany(prisonerList, function(err, res) {
    if (err) throw err;
    console.log("Prisoners documents inserted successfully");
    db.close();
  });
  dbo.collection("prisoner_address").insertMany(prisonerAddressList, function(err, res) {
    if (err) throw err;
    console.log("Prisoner address documents inserted successfully");
    db.close();
  });
  dbo.collection("sentence").insertMany(sentencesList, function(err, res) {
    if (err) throw err;
    console.log("Sentence documents inserted successfully");
    db.close();
  });
  dbo.collection("xref").insertMany(xrefList, function(err, res) {
    if (err) throw err;
    console.log("Xref documents inserted successfully");
    db.close();
  });
});
