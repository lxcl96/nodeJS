let tds=document.querySelectorAll('td');
        tds.forEach(td => {
            td.onclick=function(){
                this.style.background = '#222';
            }
        });