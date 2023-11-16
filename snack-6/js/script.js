const buttonElement = document.querySelector('button');


buttonElement.addEventListener('click' , function(){
    const invitati = ['marco', 'luca', 'andrea', 'elisa']

    const nemaInvitato = document.getElementById('name').value;

    let nomeInvitatoPresente = false

    for (let i = 0 ; i < invitati.length; i ++){
    
        if(nemaInvitato == invitati[i]){
            nomeInvitatoPresente = true
        }
    }

    if(nomeInvitatoPresente){
        document.getElementById('verifica').innerHTML = 'il tuo nome esiste';
    } else {
        document.getElementById ('verifica').innerHTML = 'il tuo nome non  esiste'
    }

})

