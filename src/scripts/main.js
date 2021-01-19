//tabs
if (document.querySelector('.map-tab__tab-wrap')) {
    for (const tabs of document.querySelectorAll("[data-tab]")) {
        const buttons = tabs.querySelectorAll("[data-nav-tab]");
        const items = tabs.querySelectorAll("[data-item-tab]");
      
        for (const button of buttons) {
          button.addEventListener("click", (event) => {
            for (const item of items) {
                item.classList.remove('active');
            }
                tabs.querySelector(`[data-item-tab='${event.target.dataset.navTab}']`).classList.add('active');
            });
        }
    }
}

//anchor
if(document.querySelector('.banner__btn')) {
    var anchors = document.querySelectorAll('.banner__btn');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
        e.preventDefault()
        let blockID = anchor.getAttribute('href').substr(1),
            offset = document.getElementById(blockID).getBoundingClientRect().top;
        window.scrollTo({
            behavior: 'smooth',
            top: offset - 0
        })
        })
    }
}

//maps
var myMap1 = document.getElementById('map1');
if(myMap1) {
    ymaps.ready(init);

    function init() {
        myMap1 = new ymaps.Map("map1", {
            center: [55.629204, 37.638095],
            behaviors: ['default', 'scrollZoom'],
            zoom: 15,
            controls: ['smallMapDefaultSet']
        }),
    
        // myMap1.behaviors.disable(['scrollZoom', 'multiTouch']);
    
        sobirator = new ymaps.Placemark([55.629204, 37.638095], {
            balloonContentHeader: "Проект Собиратор",
            balloonContentFooter: "Кавказский бул., 56, стр. 12, Москва"
        }, {
            preset: "islands#circleDotIcon",
            iconColor: "#FFFF02",
            // iconLayout: 'default#image',
            // iconImageHref: '',
            // iconImageSize: [,],
            // iconImageOffset: [,]
        });
    
        myMap1.geoObjects.add(sobirator);
    }
}

var myMap2 = document.getElementById('map2');
if (myMap2) {
    ymaps.ready(init);

    function init() {
        myMap2 = new ymaps.Map("map2", {
            center: [55.910166, 37.400534],
            behaviors: ['default', 'scrollZoom'],
            zoom: 15,
            controls: ['smallMapDefaultSet']
        }),
    
        // myMap2.behaviors.disable(['scrollZoom', 'multiTouch']);
    
        ikeahimki = new ymaps.Placemark([55.910166, 37.400534], {
            balloonContentHeader: "Пункт приёма в Мега Икея Химки",
            balloonContentFooter: "к2, район Новокуркино, 8-й микрорайон, Химки"
        }, {
            preset: "islands#yellowStretchyIcon",
            iconColor: "#FFFF02",
            // iconLayout: 'default#image',
            // iconImageHref: '',
            // iconImageSize: [,],
            // iconImageOffset: [,]
        });
    
        myMap2.geoObjects.add(ikeahimki);
    }
}

var myMap3 = document.getElementById('map3');
if (myMap3) {
    ymaps.ready(init);

    function init() {
        myMap3 = new ymaps.Map("map3", {
            center: [55.850045, 37.594468],
            behaviors: ['default', 'scrollZoom'],
            zoom: 15,
            controls: ['smallMapDefaultSet']
        }),
    
        // myMap3.behaviors.disable(['scrollZoom', 'multiTouch']);
    
        ecoline = new ymaps.Placemark([55.850045, 37.594468], {
            balloonContentHeader: "Контейнеры компании Эколайн в САО и ЦАО г. Москвы",
            balloonContentFooter: "Сигнальный пр., 37Б, стр. 2, Москва"
        }, {
            preset: "islands#yellowStretchyIcon",
            iconColor: "#FFFF02",
            // iconLayout: 'default#image',
            // iconImageHref: '',
            // iconImageSize: [,],
            // iconImageOffset: [,]
        });
    
        myMap3.geoObjects.add(ecoline);
    }
}

var myMap4 = document.getElementById('map4');
if (myMap4) {
    ymaps.ready(init);

    function init() {
        myMap4 = new ymaps.Map("map4", {
            center: [55.766131, 37.531954],
            behaviors: ['default', 'scrollZoom'],
            zoom: 15,
            controls: ['smallMapDefaultSet']
        }),
    
        // myMap4.behaviors.disable(['scrollZoom', 'multiTouch']);
    
        mkm = new ymaps.Placemark([55.766131, 37.531954], {
            balloonContentHeader: "Контейнеры компании МКМ-Логистика",
            balloonContentFooter: "1-й Магистральный тупик, 5А, Москва"
        }, {
            preset: "islands#yellowStretchyIcon",
            iconColor: "#FFFF02",
            // iconLayout: 'default#image',
            // iconImageHref: '',
            // iconImageSize: [,],
            // iconImageOffset: [,]
        });
    
        myMap4.geoObjects.add(mkm);
    }
}

