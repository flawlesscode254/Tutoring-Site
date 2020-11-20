 function openCity(evt, cityName) {
    var i, main, tablinks;
    main = document.getElementsByClassName("main");
    for (i = 0; i < main.length; i++) {
      main[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  // document.getElementById("defaultOpen").click();

  // document.addEventListener("DOMContentLoaded", event => {

  //   const app = firebase.app();

  //   const db = firebase.firestore();

  //   const myPost = db.collection('Posts').doc('FirstPost');

  //   myPost.get()
  //         .then(doc => {
  //           const data = doc.data();
  //           document.write( data.title + '<br>' )
  //           document.write( data.createdAt )
  //         })

  // });