function search_events() {
    let input = document.getElementById('form1').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('events');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}