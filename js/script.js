/*HW06*/

let headersList = document.querySelectorAll('.lectures__wrapper_basics .lectures__heading');

headersList.forEach(function (header) {
    header.innerHTML = header.innerHTML.toUpperCase();
})

let descList = document.querySelectorAll('.lectures__wrapper_basics .lectures__desc');

descList.forEach(function (desc) {
    if (desc.innerHTML.length >= 20) {
        desc.innerHTML = desc.innerHTML.substring(0, 20) + '...';
    } else {
        return;
    }
})


/*HW07*/


document.querySelector('.menu__list').onclick = function (event) {
    const target = event.target;
    console.log(target, target.parentElement);
    if (target.tagName == 'A') {
        var submenu = target.nextElementSibling;
        var icon = target.querySelector('.fa-angle-down');
    } else if (target.tagName == 'I') {
        var submenu = target.parentElement.nextElementSibling;
        var icon = target;
    } else if (target.tagName == 'UL' || target.tagName == 'LI') return;

    submenu.classList.toggle('active');

    if (submenu.classList.contains('active')) {
        icon.classList.remove('icon__toggle_closed');
        icon.classList.add('icon__toggle_open');
    } else if (!submenu.classList.contains('active')) {
        icon.classList.remove('icon__toggle_open');
        icon.classList.add('icon__toggle_closed');
    }
}


/*HW08*/

let allLectures = document.querySelectorAll('.lectures__tile');
document.querySelector('.lectures__button_all').innerHTML = `${allLectures.length} лекций`;

window.onload = function () {
    for (let i = 0; i < allLectures.length; i++) {
        let allLecturesClone = allLectures[i].cloneNode(true);
        document.querySelector('.lectures__tile-wrapper_all').appendChild(allLecturesClone);
    }

    (() => {
        let lecturesWrapper = document.querySelector('.lectures__tile-wrapper_all');
        let allLectures = lecturesWrapper.querySelectorAll('.lectures__tile');

        document.querySelector('.lectures__managing-buttons').addEventListener('click', (event) => {
            if (event.target.tagName == 'I' || event.target.className == 'lectures__button lectures__button_arrow' || event.target.className == 'lectures__managing-buttons') return;
            let filterClass = event.target.dataset['filter'];

            allLectures.forEach(elem => {
                elem.classList.remove('hide');

                if (!elem.classList.contains(filterClass) && filterClass != 'all') {
                    elem.classList.add('hide');
                }
            })
        })
    })();
}


/*HW09*/

let object = (() => {
    let lectureObj = {};
    for (let i = 0; i < allLectures.length; i++) {
        let lectureClass = allLectures[i].className;
        allLectures[i].setAttribute('data-group', lectureClass.split('lectures__tile_')[1]);

        let lectureGroup = allLectures[i].getAttribute('data-group');

        const lectureElem = {
            title: allLectures[i].querySelector('.lectures__heading').textContent,
            description: allLectures[i].querySelector('.lectures__desc').textContent,
            date: allLectures[i].querySelector('.lectures__date').textContent,
            image: allLectures[i].querySelector('.lectures__img').getAttribute('src'),
            label: allLectures[i].querySelector('.lectures__label').textContent,
        };

        if (lectureObj[lectureGroup]) {
            lectureObj[lectureGroup].push(lectureElem);
        } else {
            lectureObj[lectureGroup] = [lectureElem];
        }
    }
    console.log(lectureObj);
})();