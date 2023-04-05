
    const content = document.getElementById('message'); // mengambil element berdasarkan id
    
    let firstChild = content.firstChild.nodeName; //mengambil element anak pertama dari element tertentu 
    console.log(content); 
    console.log(firstChild); //menampilkan element tersebut

    let btn = document.getElementById('btnRate'); // mengambil element berdasarkan id
    let output = document.getElementById('output'); // mengambil element berdasarkan id

    btn.addEventListener('click', () => {
        let rates = document.getElementsByName('rate');
        rates.forEach((rate) => {
            if (rate.checked) {
                output.innerText = `Kamu pilih tugas: ${rate.value}`; //menggunakan javascript inner text
                output.style.color = "red"; 
            }
        });

    });


    // section 4-6
        // let text = document.getElementById('text'); 
        // text.id = 'text';
        // text.innerHTML = '<p>Ini tugas Section 4-6</p>'; //mengambil property dari element yang dapat membuat dan mengatur konten dari suatu element
        // document.body.appendChild(text); //menambahkan node ke daftar node anak dari node induk tertentu

        if (btn) {
            btn.setAttribute('name', 'send');
            btn.setAttribute('enable', ''); // mengatur nilai attribute tertentu pada element
        }

        if (text) {
            let title = text.getAttribute('title'); // mendapatkan nilai attribut dari element tertentu
            console.log(title);
            
        }
        
        let menu = document.querySelector('#menu');
        console.log(menu.className);

    // section 7-8
    let logo = document.querySelector('#logo');

    logo.addEventListener('load', (event) => { // memandu melalui langkah-langkah penanganan peristiwa pemuatan
        console.log('Logo telah dimuat!');
    });

    logo.src = "project-1.png";

    const check = document.querySelector('#accept');
    console.log(check.checked);