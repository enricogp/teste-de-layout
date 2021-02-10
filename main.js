window.onload = () => {
    //pegando os elementos do html
    const transicao_el = document.querySelector('.transicao'); 
    const ancoras = document.querySelectorAll('a');

    setTimeout(() =>{
        transicao_el.classList.remove('ativa');

    //500 milesegundos
    }, 500);

    for (let i = 0; i < ancoras.length; i++){
        const ancora = ancoras[i];

        ancora.addEventListener('click', e => {
            //clicar em um link não vai fazer trocar de página (ainda)
            e.preventDefault;

            //pega o destino para o qual a página ia mudar ao clicar no link
            let target = e.target.href; 

            transicao_el.classList.add('ativa');

            setTimeout(() => {
                window.location.href = target;
            }, 500

            )
        })
    }
}