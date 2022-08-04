var _valor = document.getElementById('v');
var slct = document.getElementById('sel');


function adicionar(){
    let n = Number(_valor.value)
    
    if (_valor.value > 100 || _valor.value == 0){
        window.alert('Valor incorreto! Digite um número entre 1 e 100.')
    } else {
        var unidade = document.createElement('option')
            unidade.text = `Valor: ${n}` 
            slct.appendChild(unidade)
            _valor.value = ""
            apuracao.innerHTML = ""
            _valor.focus()       
    }
}


function apagar() { slct.innerHTML = ""; apuracao.innerHTML = ""}


var num = [slct];
var apuracao = document.getElementById('dados');


function fin() {
        
        var quantidade = document.createElement('p');
        quantidade.innerHTML = `O vetor tem ${slct.length} valores.`
        document.getElementById('dados').appendChild(quantidade);
        

        
        var max = num.reduce
        (function(a,b) {
            var valormax = Math.max(a,b);
            console.log(valormax)
            return valormax
        })
        quantidade.innerHTML += ` O maior número é ${max}`
        console.log(max);




        
        /*function maxValue (slct){
            let max = slct[0];

            for (let val of slct){
                if(val > max){
                    max = val;
                quantidade.innerHTML += `${max}`
                }
            }
        } 
        
        function getMaxOfArray(num) {
            return Math.max.apply(null,num);
        }
        
        Array.min = function(slct) {
            return Math.min.apply(Math, slct);
        };
        Array.max = function(slct) {
            return Math.max.apply(Math, slct);
        };
        quantidade.innerHTML += `<p>O menor valor é: ${Array.min([])}</p>`;
        quantidade.innerHTML += `<p>O maior valor é: ${Array.max([])}</P>`

        const max = Math.max.apply(null, num);
        const min = Math.min.apply(null, num);
        quantidade.innerHTML += `<p>O maior valor é: ${max}</p>`;
        quantidade.innerHTML += `<p>O menor valor é: ${min}</p>`;*/

        /*var max = Math.max(...num);
        quantidade.innerHTML += `O maior número é ${max}`*/

        
                
    }

    