const countdown = document.querySelector(".countdown");

countdown.innerText = "10";
countdown.style.color = "blue";

setTimeout(() => {
    countdown.innerText = "9";
    countdown.style.color = "green";
        setTimeout(() => {
            countdown.innerText = "8";
            countdown.style.color = "red";
            setTimeout(() => {
                countdown.innerText = "7";
                countdown.style.color = "pink";
                setTimeout(() => {
                    countdown.innerText = "6";
                    countdown.style.color = "violet";
                    setTimeout(() => {
                        countdown.innerText = "5";
                        countdown.style.color = "maroon";
                        setTimeout(() => {
                            countdown.innerText = "4";
                            countdown.style.color = "skyblue";
                            setTimeout(() => {
                                countdown.innerText = "3";
                                countdown.style.color = "lightgreen";
                                setTimeout(() => {
                                    countdown.innerText = "2";
                                    countdown.style.color = "orange";
                                    setTimeout(() => {
                                        countdown.innerText = "1";
                                        countdown.style.color = "green";
                                        setTimeout(() => {
                                            countdown.innerText = "Happy Independence Day";
                                            countdown.style.color = "blue";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
},1000)