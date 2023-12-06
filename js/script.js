if(document.body.clientWidth > 400){

const observerImages = document.querySelectorAll('.ob')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.target.classList.contains('images-0') && entry.isIntersecting){
            let load = 0;

            let int = setInterval(blurring, 10);

            function blurring() {
                load++;

                if (load > 99) {
                    clearInterval(int);
                }

                entry.target.style.opacity = scale(load, 100, 0, 1, 0);
            }
            const scale = (num, in_min, in_max, out_min, out_max) => {
                return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
            };

            observer.unobserve(entry.target)
        }
        if(entry.target.classList.contains('images-1') && entry.isIntersecting){
            entry.target.classList.add('translate-x-44', '-translate-y-9')

        }else if(entry.target.classList.contains('images-2') && entry.isIntersecting){
            entry.target.classList.add('translate-x-44', 'translate-y-[6.5rem]')

        }else if (entry.target.classList.contains('images-3') && entry.isIntersecting){
            entry.target.classList.add('-translate-x-28', 'translate-y-24')

        }else if (entry.target.classList.contains('images-4') && entry.isIntersecting){
            entry.target.classList.add('-translate-x-44', '-translate-y-16')
        }
        
    })
},{
    threshold:1
})

observerImages.forEach(obImg =>{
    observer.observe(obImg)
})
}else if(document.body.clientWidth <= 400){
    const observerImages = document.querySelectorAll('.ob')

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry =>{
            if(entry.target.classList.contains('images-0') && entry.isIntersecting){
                let load = 0;

                let int = setInterval(blurring, 10);

                function blurring() {
                    load++;

                    if (load > 99) {
                        clearInterval(int);
                    }

                    entry.target.style.opacity = scale(load, 100, 0, 1, 0);
                }

                const scale = (num, in_min, in_max, out_min, out_max) => {
                    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
                };

                observer.unobserve(entry.target)
            }
            if(entry.target.classList.contains('images-1') && entry.isIntersecting){
                entry.target.classList.add('translate-x-20', '-translate-y-14')

            }else if(entry.target.classList.contains('images-2') && entry.isIntersecting){
                entry.target.classList.add('translate-x-24', 'translate-y-8')
                
            }else if (entry.target.classList.contains('images-3') && entry.isIntersecting){
                entry.target.classList.add('-translate-x-16', 'translate-y-5')

            }else if (entry.target.classList.contains('images-4') && entry.isIntersecting){
                entry.target.classList.add('-translate-x-24', '-translate-y-5')
            }
        
        })
    },{
        threshold:1
    })

    observerImages.forEach(obImg =>{
        observer.observe(obImg)
    })
}

console.log(document.body.clientWidth);