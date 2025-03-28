//second idea 

document.querySelector('button').addEventListener('click', checkBefore)
function checkBefore() {
let meds = document.querySelector('input').value
    fetch(`https://api.fda.gov/drug/ndc.json?search=${meds}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
            console.log(data.results[0]);
            console.log(data.results[0].brand_name)
            console.log(data.results[0].generic_name)
            //console.log(data.results[0].openfda.manufacturer_name)
            document.querySelector('h2').innerText = data.results[0].brand_name
            document.querySelector('h3').innerText = data.results[0].generic_name
           document.querySelector('h4').innerText = data.results[0].openfda.pharm_class_moa

        })
        .catch(err => {
            console.log(`error ${err}`);

        })
    

}

/*note to self: the goal of this app is to find the generic name of a medicine and see if cms will cover the generic name vs the brand name

//second idea copy for reference 

document.querySelector('button').addEventListener('click', checkBefore)
function checkBefore() {
let meds = document.querySelector('input').value
    fetch(`https://api.fda.gov/drug/ndc.json?search=${meds}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
            console.log(data.results[0]);
            console.log(data.results[0].brand_name)
            console.log(data.results[0].generic_name)
            console.log(data.results[0].openfda.manufacturer_name)
            document.querySelector('h2').innerText = data.results[0].brand_name
            document.querySelector('h3').innerText = data.results[0].generic_name
           // document.querySelector('h4').innerText = data.results[0].openfda.manufacturer_name
           fetch(`https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=${data.results[0].brand_name}`)
           .then(res => res.json())
           .then(data => {
               console.log(data[3][1])
   
   
   
   
   
           })
           .catch(err => {
               console.log(`error ${err}`);
   
           })
})
        .catch(err => {
            console.log(`error ${err}`);

        })
    
}
/*"https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=${data.results[0].brand_name}"
//document.querySelector('button').addEventListener('click', checkBefore)
//function checkBefore() {
    //let meds = document.querySelector('input').value

    fetch("https://api.fda.gov/device/covid19serology.json?")
    .then(res => res.json())
    .then(data => {
        console.log(data[3][1])





    })
    .catch(err => {
        console.log(`error ${err}`);

    })
//https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&terms=tuberc

//Note to self: first idea, not working 
/*document.querySelector('button').addEventListener('click', letsCheck)

function letsCheck (){
let date = document.querySelector('input').value
fetch (`https://disease.sh/v3/covid-19/historical/all?${date}`)
.then(res => res.json ())
.then(data => {
    console.log(data);
    //document.querySelector('h2').innerText = data.cases
    //document.querySelector('h3').innerText = data

    
})
.catch(err => {
    console.log(`error ${err}`);
    
})
}
//COVID CASES AND THOSE WHO RECOVERED BY DATE : "https://disease.sh/v3/covid-19/historical/all?lastdays=all"*/

/*fetch ("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
.then(res => res.json ())
.then(data => {
    console.log(data);
    //console.log(Object.keys(data.cases).length);
    //console.log(Object.keys(data.recovered).length);;
    
    
    
    //document.querySelector('h2').innerText = data.cases
    //document.querySelector('h3').innerText = data.recovered

    
})
.catch(err => {
    console.log(`error ${err}`);
    
})*/