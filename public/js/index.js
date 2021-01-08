(function(){

    function fetchWeatherData(searchKey){
        fetch(`http://localhost:3000/weather?location=${searchKey}`)
        .then(res => res.json())
        .then((res) =>{
                console.log(res)
                const main = document.querySelector('.main');
                const ul = document.createElement('ul');
                ul.classList.add('weather-info')
                
                if(res.location){
                    Object.keys(res.location).map((key) =>{
                        let li = document.createElement('li');
                        li.innerText = `${key} -> ${res.location[key]}`;
                        ul.appendChild(li);
                    })
                }

                if(res.current){
                    Object.keys(res.current).map((key) =>{
                        let li2 = document.createElement('li');
                        li2.innerText = `${key} -> ${res.current[key]}`;
                        ul.appendChild(li2);
                    })
                }
                
                main.appendChild(ul)

            }).catch((err) =>{
                debugger
                const weatherInfo = document.querySelector('.weather-info');

                const errorH2 = document.createElement('h2');
                errorH2.innerText = 'Unable to find weather info of given address.'
                
                weatherInfo.appendChild(errorH2)
            })
    }



    const debounce = (func, delay) => {
        let clearTimer;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(clearTimer);
            clearTimer = setTimeout(() => func.apply(context, args), delay);
        }
    }

    document.querySelector('#search-input').addEventListener('input', (e)=>{
       fetchWeatherData(e.target.value)
    });
})()
