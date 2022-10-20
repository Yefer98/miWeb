const links = document.querySelector('.links');

links.addEventListener('onfocus',()=>{
    const flecha = document.querySelector('.flecha');
    
    TransitionEvent.initTransitionEvent('transitioncancel');
});