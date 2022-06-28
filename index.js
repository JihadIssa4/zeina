fetch('https://practice2862022.herokuapp.com/data')
 .then(x => x.json())
 .then(json => {
     students = document.getElementById('1')
     json.Sheet1.forEach(element => {
         var option = document.createElement('option')
         option.innerHTML = element.A + ' - ' + element.B;
         students.appendChild(option)
     })
 })