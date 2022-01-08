const admin = require('firebase-admin');
const fs = require('fs');
const { listenerCount } = require('process');
const serviceAccount = require('./iucee-bms-website-contact-form-firebase.json');
 admin.initializeApp({
     credential: admin.credential.cert(serviceAccount)
 });
 async function get_something(){
    var list = [];
    const db = admin.firestore();
    const coll = db.collection('members')
    const snapshot = await coll.get();
    snapshot.forEach(doc => {
        //console.log(doc.id)
        list.push(doc.id)
    });
    //console.log(list);
    return list;
 }

function get_it(element){
    const db = admin.firestore();
    db.collection('members').doc(element).get()
        .then(doc => {
            if(!doc.exists){
                console.log("Document doesn't exist\n")
            }
            else{
                str = [doc.data().name.trim(), doc.data().email.trim(), doc.data().phone.trim(), doc.data().department.trim(), doc.data().interest.trim(), doc.data().year.trim()].join(',') + '\n';
                console.log(str);
                fs.appendFileSync("Members_data.csv", str);
            }

        })
        .catch(err =>{
            console.log("Error: ", err);
            process.exit();
        })
}

async function do_it(callback, secondcb){
    var list = [];
    list = await callback();
    list.forEach(element =>{
        //console.log(element)
        secondcb(element);
        
})
}

do_it(get_something, get_it)