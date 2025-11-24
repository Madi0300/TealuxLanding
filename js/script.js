window.onload = () => {
    const buttonOpen = document.getElementById('button-open');
    const navigation = document.getElementById('navigation');
    const buttonClose = document.getElementById('button-close');
    const buttonShadow = document.getElementById('button-shadow');

    buttonOpen.addEventListener('click' , ()=>{
        navigation.classList.add('active')
        buttonShadow.classList.add('active');
    });
    buttonClose.addEventListener('click' , () => {
        navigation.classList.remove('active');
        buttonShadow.classList.remove('active');
    });
    buttonShadow.addEventListener('click' , () => {
        navigation.classList.remove('active');
        buttonShadow.classList.remove('active');
    });
    window.addEventListener('resize' , () => {
        navigation.classList.remove('active');
        buttonShadow.classList.remove('active');
    })
}