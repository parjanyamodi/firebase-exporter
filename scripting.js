
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
var admin = require("firebase-admin");

var serviceAccount = require("./iucee-bms-website-contact-form-firebase-adminsdk-mjgk4-70f0408560.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://firebase-adminsdk-mjgk4@iucee-bms-website-contact-form.iam.gserviceaccount.com",
    authDomain: "iucee-bms-website-contact-form.firebaseapp.com",
    projectId: "iucee-bms-website-contact-form",
    storageBucket: "iucee-bms-website-contact-form.appspot.com",
    messagingSenderId: "343139575123",
    appId: "1:343139575123:web:61f9a5cb6df71a9c4d2da6"
});

const firebaseConfig = {
    apiKey: "AIzaSyCEc9mAVurAaOasP1gs7yWSKftzEBA50qo",
    authDomain: "iucee-bms-website-contact-form.firebaseapp.com",
    projectId: "iucee-bms-website-contact-form",
    storageBucket: "iucee-bms-website-contact-form.appspot.com",
    messagingSenderId: "343139575123",
    appId: "1:343139575123:web:61f9a5cb6df71a9c4d2da6"
  };

// // function get_each(snapshot){
// //     snapshot.forEach((doc) => {
// //             console.log(doc.data());
// //       });

// // }

// initializeApp(firebaseConfig);
async function getMarkers() {
    const markers = [];
    (await  getFirestore().collection('events').get())
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            console.log(doc.data());
        markers.push(doc.data());
      });
    }, reason =>{
        console.log(reason);
    }
    );

    console.log(markers);
  }

getMarkers();
