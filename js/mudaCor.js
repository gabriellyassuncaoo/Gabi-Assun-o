function mudaCor(){
    let header = document.getElementsByTagName('header');
    let footer = document.getElementsByTagName('footer');
    let boxCenter = document.getElementsByClassName('box-center');

    for(let cont = 0; cont < boxCenter.length; cont++){
        boxCenter[cont].classList.add('cor-box-center');
    }
    header[0].classList.add('cor-header-footer');
    footer[0].classList.add('cor-header-footer');
}