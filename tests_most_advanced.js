// ==UserScript==
// @name         Amino_solution_simulation
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Used during audit to simulate our solution
// @author       William Pommies
// @match        *://*/*
// @noframes
// @grant        GM_addStyle
// ==/UserScript==


/*  =================================================================================================================
    Creating a modal window to choose between options
    ==================================================================================================================  */
    function createModale()
    {
        /*  Creating Modale
        ============================================ */
        let sim_modale = document.createElement('div');
        sim_modale.setAttribute('id', 'sim_modale');
        document.documentElement.appendChild(sim_modale);
        console.log('sim_modale created');

        /*  Modale Content
        ============================================ */
        function file_get_contents(filename) {
            fetch(filename).then((resp) => resp.text()).then(data => {
                console.log('Modale fetch ok')

                // Initialize the document parser
                const parser = new DOMParser();
                let doc = parser.parseFromString(data, 'text/html');

                // Get the <body> element content
                let body = doc.querySelector('body').textContent;
                document.getElementById("sim_modale").innerHTML = data;
            });
        }
        file_get_contents('https://raw.githubusercontent.com/WilliamPommies/amino_simulation/main/amino_sim_modale.html');
   }
   createModale();


/*  =================================================================================================================
    Display the modal while pressing "ctrl + insert"
    ==================================================================================================================  */
    function KeyPress(e) {
        var evtobj = window.event? event : e
        if (evtobj.keyCode == 45 && evtobj.ctrlKey)
        {
            document.getElementById('sim_modale').style.display = 'flex';
        };
    }
    document.onkeydown = KeyPress;

/*  =================================================================================================================
    Get style linked to selected option
    ==================================================================================================================  */

    let getOptionButton = document.getElementsByClassName('process')
    getOptionButton.addEventListener('click', event => {
        let selectElement = document.querySelector('#sim_combines');
        let output = selectElement.value;
        document.querySelector('.output').textContent = output;
        console.log(output);
    });
/*
    function getOption() {
        let selectElement = document.querySelector('#sim_combines');
        let output = selectElement.value;
        document.querySelector('.output').textContent = output;
        console.log(output);
     }
*/


   /* function applyStyle()
    {
        if (setSize)
        {
            let styleElement = document.createElement('style');
            styleElement.setAttribute('class','simulation');
            styleElement.setAttribute('id','size_set_sim');
            document.documentElement.appendChild(styleElement);
            function file_get_contents(filename) {
                fetch(filename).then((resp) => resp.text()).then(data => {
                    console.log('fetch ok')

                    // Initialize the document parser
                    const parser = new DOMParser();
                    let doc = parser.parseFromString(data, 'text/html');

                    // Get the <body> element content
                    let body = doc.querySelector('body').textContent;
                    document.getElementById("size_set_sim").innerHTML = data;
                });
            }
            file_get_contents('https://raw.githubusercontent.com/WilliamPommies/amino_simulation/main/amino_sim_' + setSize + '.scss');
        } else {
            console.log('please enter a value')
        }

    }
    applyStyle();*/

/*
- Get value onchange or onclick
- Manage close button
- link value & css
*/
