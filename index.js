//background-color: #034042;


function MudarComentario()
{
    let Radio = document.getElementsByClassName('carrousel_radio');

    //reseta pra ficar com o backgroundOriginal
    Array.from(document.getElementsByClassName('label_radioCarrousel')).forEach(label => {
            label.style.backgroundColor = "#012629"
    })

    //quando um radio for mudado, ele identifica qual é o radio e direciona o comentario relacionado àquele radio
    Array.from(Radio).forEach(radio => {

        //muda a posição de todos os comentarios
        if(radio.checked)
        {
                switch(radio.id)
                {
                    case "comment1":
                        Array.from(document.getElementsByClassName("commentClient")).forEach(comment => {
                            comment.style.transform = "translate(120%, 0)"
                        })
                    break

                    case "comment2":
                        Array.from(document.getElementsByClassName("commentClient")).forEach(comment => {
                            comment.style.transform = "translate(0%, 0)"
                        })
                    break

                    case "comment3":
                        Array.from(document.getElementsByClassName("commentClient")).forEach(comment => {
                            comment.style.transform = "translate(-120%, 0)"
                        })
                    break
                }
            
           

            Array.from(document.getElementsByClassName('label_radioCarrousel')).forEach(label => {
                if(radio.id == label.htmlFor)
                {
                    label.style.backgroundColor = "#057f88"
                }
            });
        }
    });
}

function MudarComentarioSeta(avançar)
{
    let Radio = Array.from(document.getElementsByClassName('carrousel_radio'));
    
    radio1 = document.getElementById("comment1")
    radio2 = document.getElementById("comment2")
    radio3 = document.getElementById("comment3")

    if(avançar)
    {
        if(radio1.checked)
        {
            Radio[1].checked = true
        }
        else if(radio2.checked)
        {
            Radio[2].checked = true
        }
        else if(radio3.checked)
        {
            Radio[0].checked = true
        }
    }
    else
    {
        if(radio1.checked)
            {
                Radio[2].checked = true
            }
            else if(radio2.checked)
            {
                Radio[0].checked = true
            }
            else if(radio3.checked)
            {
                Radio[1].checked = true
            }
    }

    MudarComentario()
}

function AbrirMenu(abrir)
{
    let menu = document.getElementById("menu_mobile")

    if(abrir)
    {
        menu.style.display = 'flex';
        menu.style.left = '20%';
        menu.style.animationName = 'MenuOpenAnimation'
        menu.style.animationDuration = '1s'
        
    }
    else {
        menu.style.animationName = 'MenuExitAnimation'
        menu.style.animationDuration = '1s'
        menu.style.left = '100%';
    }
}

document.getElementById('body2').addEventListener('scroll', (event)=>{
    

    if(document.getElementById('body2').scrollTop > 0)
    {
        document.querySelector('header').style.backgroundColor = "#034042"
    }
    else {
          document.querySelector('header').style.backgroundColor = "transparent"
    }
})


MudarComentario()

