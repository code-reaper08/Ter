const me = document.querySelector('#me');
const meContent = document.querySelector('#me-content');

const Mywork = document.querySelector('#Mywork');
const MyworkContent = document.querySelector('#Mywork-content');

const contact = document.querySelector('#contact');
const contactContent = document.querySelector('#contact-content');

// me.addEventListener('click', () => {
//     const meBox = new WinBox({
//         class: "crt",
//         title: 'Me.exe',
//         background: '#01ba06',
//         width: '400px',
//         top: 10,
//         bottom: 10,
//         left: 100,
//         right: 100,
//         height: '400px',
//         mount: meContent
//     })
// })

// Mywork.addEventListener('click', () => {
//     const WorkBox = new WinBox({
//         class: "crt",
//         title: 'Mywork.exe',
//         background: '#01ba06',
//         width: '400px',
//         top: 10,
//         bottom: 10,
//         left: 100,
//         right: 100,
//         height: '400px',
//         mount: MyworkContent
//     })
// })

// contact.addEventListener('click', () => {
//     const contactBox = new WinBox({
//         class: "crt",
//         title: 'Contact.exe',
//         background: '#01ba06',
//         width: '400px',
//         top: 10,
//         bottom: 10,
//         left: 100,
//         right: 100,
//         height: '400px',
//         mount: contactContent
//     })
// })


// mobile optimizations.

function Mobresizer(x) {
    if (x.matches) {
        me.addEventListener('click', () => {
            const meBox = new WinBox({
                class: "crt",
                title: 'Me.exe',
                background: '#01ba06',
                width: '100px',
                top: 10,
                bottom: 10,
                left: 5,
                right: 5,
                height: '400px',
                mount: meContent
            })
        })
        
        Mywork.addEventListener('click', () => {
            const WorkBox = new WinBox({
                class: "crt",
                title: 'Mywork.exe',
                background: '#01ba06',
                width: '400px',
                top: 10,
                bottom: 10,
                left: 5,
                right: 5,
                height: '400px',
                mount: MyworkContent
            })
        })
        
        contact.addEventListener('click', () => {
            const contactBox = new WinBox({
                class: "crt",
                title: 'Contact.exe',
                background: '#01ba06',
                width: '400px',
                top: 10,
                bottom: 10,
                left: 5,
                right: 5,
                height: '400px',
                mount: contactContent
            })
        })
    } else {
        me.addEventListener('click', () => {
            const meBox = new WinBox({
                class: "crt",
                title: 'Me.exe',
                background: '#01ba06',
                width: '400px',
                top: 10,
                bottom: 10,
                left: 100,
                right: 100,
                height: '400px',
                mount: meContent
            })
        })
        
        Mywork.addEventListener('click', () => {
            const WorkBox = new WinBox({
                class: "crt",
                title: 'Mywork.exe',
                background: '#01ba06',
                width: '400px',
                top: 10,
                bottom: 10,
                left: 100,
                right: 100,
                height: '400px',
                mount: MyworkContent
            })
        })
        
        contact.addEventListener('click', () => {
            const contactBox = new WinBox({
                class: "crt",
                title: 'Contact.exe',
                background: '#01ba06',
                width: '400px',
                top: 10,
                bottom: 10,
                left: 100,
                right: 100,
                height: '400px',
                mount: contactContent
            })
        })
    }
  }
  
  let mediaquery = window.matchMedia("(max-width: 390px)")
  Mobresizer(mediaquery) 
  mediaquery.addListener(Mobresizer)