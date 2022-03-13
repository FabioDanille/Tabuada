function tabuada(){
    const num = document.querySelector('#numtxt');
    const tab = document.querySelector('#seltab');
  
    if (num.value.length == 0){
        window.alert('Favor inserir algum número para gerar a operação.')
    }else {
            let n = Number(num.value);
            tab.innerHTML = '';
            for (let c = 1;c <= 10; c++){
                let item = document.createElement('option');
                item.text = `${n} x ${c} = ${n*c}`;
                item.value = `tab${c}`;
                tab.appendChild(item);
            };
        };
};