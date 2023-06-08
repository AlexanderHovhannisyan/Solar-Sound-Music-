// .... ПЕРЕМЕННЫЕ ..... ///////////////////////////////////////////////////////////////////////////////////////

// Elements
let bodyElements = document.querySelectorAll('section')
let preHeader = document.querySelector('.preHeader')
let header = document.querySelector('.header')
let linksHeader = document.querySelectorAll('.navLinks')
let burgerItems = document.querySelectorAll('.burgerMenu-content')
let homeContent = document.querySelector('.home')
let footer = document.querySelector('.footer')
let sliderContainer = document.querySelector('.homeContent-slider')
let sliderItems = document.querySelectorAll('.homeContent-sliderItem')
let radioCheckboxes = document.querySelectorAll('.homeContent-checkboxes > input')
let about = document.querySelector('.about')
let aboutItems = document.querySelectorAll('.aboutItems')
let action = document.querySelector('.action')
let actionItems = document.querySelectorAll('.action-item')
let services = document.querySelector('.services')
let serviceUpperItems = document.querySelectorAll('.upperContainer')
let servicesItems = document.querySelectorAll('.servicesItems')
let videoContainer = document.querySelector('.video')
let labelItems = document.querySelectorAll('.labelItems')
let playlistItems = document.querySelectorAll('.playlist-items')
let playlistDropdown = document.querySelector('.playlist-dropdown')
let playlistContainer = document.querySelector('.playlist-tracks')
let trackPlaylistItems = document.querySelectorAll('.trackPlaylist-items')
let trackAudios = document.querySelectorAll('.trackPlaylist-audio')
// Left Position Count For Slide
let leftOffset = 0
// Counts
let count = 0
let intCount = 0
// Count and Created Text for Gallery
let serviceGalleryText = document.createElement('p')
serviceGalleryText.className = 'textGallery'
// Slider Length
let sliderLength = (sliderContainer.children.length - 1) * 100
let playlistTracks = {
    trap: [
        {
            songName: 'YEAT X PLAYBOI CARTI RAGE TYPE BEAT',
            songAudio: 'playlist/untitled208.mp3',
            isPlay: false
        },
        {
            songName: "NARDO WICK X LIL BABY DARK TYPE BEAT",
            songAudio: 'playlist/untitled174.mp3',
            isPlay: false
        },
        {
            songName: "BIG BABY TAPE X TYGA TYPE BEAT",
            songAudio: 'playlist/untitled160.mp3',
            isPlay: false
        },
        {
            songName: "CHIEF KEEF X GLO GANG TYPE BEAT",
            songAudio: 'playlist/untitled218.mp3',
            isPlay: false
        },
        {
            songName: "GUNNA X YOUNG THUG TYPE BEAT",
            songAudio: 'playlist/sxmXgxn.mp3',
            isPlay: false
        }

    ],
    drill: [
        {
            songName: "AARNE X PLATINA TYPE BEAT",
            songAudio: 'playlist/untitled195.mp3',
            isPlay: false
        },
        {
            songName: "POP SMOKE X OBLADAET TYPE BEAT",
            songAudio: 'playlist/untitled147_2.mp3',
            isPlay: false
        },
        { 
            songName: "OG BUDA X CENTRAL CEE TYPE BEAT",
            songAudio: 'playlist/untitled175maybe2.mp3',
            isPlay: false,
        },
        { 
            songName: "G-HERBO X EST GEE X YN JAY TYPE BEAT",
            songAudio: 'playlist/untitled172.mp3',
            isPlay: false,
        },
        { 
            songName: 'DRILL/TRAP CUSTOM BEAT "NARUTO"',
            songAudio: 'playlist/untitled178.mp3',
            isPlay: false,
        }
    ],
    memphis: [
        {
            songName: "BUSHIDO ZHO X ALBLAK 52 TYPE BEAT",
            songAudio: 'playlist/untitled135.mp3',
            isPlay: false
        },
        {
            songName: "YOUNG DOLPH X KEY GLOCK TYPE BEAT",
            songAudio: 'playlist/untitled187.mp3',
            isPlay: false
        },
        {
            songName: "BIG BABY TAPE X KIZARU TYPE BEAT",
            songAudio: 'playlist/untitled231.mp3',
            isPlay: false  
        },
        {
            songName: "FREDDIE DREDD X BOSSA NOVA BRAZIL TYPE BEAT",
            songAudio: 'playlist/untitled110.mp3',
            isPlay: false  
        },
        {
            songName: "DUKE DEUCE X BIGXTHAPLUG TYPE BEAT",
            songAudio: 'playlist/untitled161.mp3',
            isPlay: false  
        }
    ],
    other: [
        {
            songName: 'FEDUK X MAYOT PSYCHEDELIC TYPE BEAT',
            songAudio: 'playlist/untitled211.mp3',
            isPlay: false
        },
        {
            songName: 'MOVING CASTLE X BONES TYPE BEAT',
            songAudio: 'playlist/untitled21.mp3',
            isPlay: false
        },
        {
            songName: 'ATTACK ON TITAN X $UICIDEBOY$ TYPE BEAT',
            songAudio: 'playlist/untitled30.mp3',
            isPlay: false
        },
        {
            songName: 'ETHNIC ARMENIAN TRAP',
            songAudio: 'playlist/untitled143.mp3',
            isPlay: false
        },
        {
            songName: "BONES X THE WEEKND TYPE BEAT",
            songAudio: 'playlist/untitled185_2.mp3',
            isPlay: false
        },
        
    ]
}

// .... ФУНКЦИИ ..... ///////////////////////////////////////////////////////////////////////////////////////

function changeLink(parent) {
    if (document.body.clientWidth > 991) {
        bodyElements.forEach(el => {
            if (parent.className.includes(el.className)) {
                linksHeader.forEach(link => {
                    if (el.className == link.dataset.scroll) {
                        link.style.color = 'aqua'
                    }
                    else {
                        link.style.color = 'white'
                    }
                })
            }
        })
    }
    else {
        return false
    }
}

function radioChecked(c) {
    radioCheckboxes.forEach((item, index) => {
        c == index ? item.checked = true : item.checked = false
    })
}

function sliderContentAnim(c) {
    sliderItems.forEach((item, index) => {
        if (index === c) {
            item.children[1].children[0].classList.add('rightTextAnim')
            item.children[1].children[1].classList.add('leftTextAnim')
            item.children[1].children[2].classList.add('buttonAnim')
            setTimeout(() => {
                for (let i = 0; i < item.children[1].children.length; i++) {
                    item.children[1].children[i].className = ''
                }
            }, 1000)
        }
    })
}

function sliderTime() {
    sliderContentAnim(count)
    let sliderCount = setTimeout(() => {
        leftOffset += 100;
        count++;
        if (count > sliderLength / 100) {
            count = 0
            leftOffset = 0
        }
        if (count < 0) {
            count = sliderLength / 100
            leftOffset = sliderLength
        }
        sliderContainer.style.left = `${-leftOffset}vw`;
        radioChecked(count)
        sliderContentAnim(count)
        sliderTime()
    }, 8000)

    function buttonSlider(term, change, action, stateCount, stateOffset) {
        clearTimeout(sliderCount)
        action;
        change;
        if (term) {
            count = stateCount
            leftOffset = stateOffset
        }
        sliderContainer.style.left = `${-leftOffset}vw`;
        radioChecked(count)
        sliderContentAnim(count)
        setTimeout(() => {
            sliderTime()
        }, 100)
    }


    leftButton.onclick = () => {
        buttonSlider(count <= 0, count--, leftOffset -= 100, sliderLength / 100, sliderLength)
    }

    rightButton.onclick = () => {
        buttonSlider(count >= sliderLength / 100, count++, leftOffset += 100, 0, 0)
    }

}

function addScrollAnim(elem, term, anim) {
    const y = window.scrollY
    if (y > term) {
        elem.classList.add(anim)
        changeLink(elem)
    }
    else {
        return false
    }
}

function createTracks(genre) {
    trackPlaylistItems.forEach((item, index) => {
        item.children[0].innerHTML = genre[index].songName
        item.children[1].src = genre[index].songAudio
    })
}

// .... ИВЕНТЫ ..... ///////////////////////////////////////////////////////////////////////////////////////
burgerParent.onclick = () => {
    burgerItems.forEach(it => {
        it.classList.toggle('burgerMenu-active')
        navbarHeader.classList.toggle('navbar-media')
    })
}

document.addEventListener('play', (e) => {  
    trackAudios.forEach((it, index) => {
        if(it != e.target){  
            it.pause();  
            it.currentTime = 0;
        }  
        
        // for (var key in playlistTracks) {
        //     var element = playlistTracks[key];
        //     for(var keyy in element){
        //         if(element[keyy].songName == it.parentElement.children[0].innerHTML && it == e.target){
        //             element[keyy].isPlay = true
        //             console.log(element[keyy])
        //             console.log(playlistTracks)
                    
        //         }
                
                
        //     }
        //   };
    })
  
        
}, true);



videoContainer.children[0].onclick = () => {
    videoContent.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
    document.body.style.overflowY = 'visible'
    videoBlock.play()
    videoBlock.onclick = () => videoBlock.paused ? videoBlock.pause() : videoBlock.play()
}

effVid.onclick = () => {
    videoContent.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)'
    document.body.style.overflowY = 'visible'
    videoBlock.pause()
    videoBlock.currentTime = 0
}

playlistItems.forEach((item, index) => {
    item.onclick = () => {
        playlistDropdown.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
        document.body.style.overflowY = 'hidden'
        if (item.dataset.playlist == 'trap') {
            playlistName.innerHTML = 'TRAP TYPE BEATS'
            createTracks(playlistTracks.trap)
        }
        if (item.dataset.playlist == 'drill') {
            playlistName.innerHTML = 'DRILL TYPE BEATS'
            createTracks(playlistTracks.drill)
        }
        if (item.dataset.playlist == 'memphis') {
            playlistName.innerHTML = 'MEMPHIS TYPE BEATS'
            createTracks(playlistTracks.memphis)
        }
        if (item.dataset.playlist == 'other') {
            playlistName.innerHTML = 'OTHER GENRE'
            createTracks(playlistTracks.other)
        }
    }
    playlistShut.onclick = () => {
        playlistDropdown.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)'
        document.body.style.overflowY = 'auto'
        trackAudios.forEach(item => {item.pause()})
    }
    effAud.onclick = () =>{
        playlistDropdown.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)'
        document.body.style.overflowY = 'auto'
        trackAudios.forEach(item => {item.pause()})
    }
})



servicesItems.forEach((item, index, arr) => {
    let imgCount = 0
    servicesGallery.children[0].appendChild(serviceGalleryText)
    item.onclick = () => {
        servicesGallery.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
        document.body.style.overflowY = 'hidden'
        imgCount = index
        let galleryItemStyle = servicesGallery.children[0].style
        galleryItemStyle.background = `url(img/service-${imgCount}.jpg)`
        serviceGalleryText.innerHTML = `Image ${index + 1} of ${arr.length}`

        galleryLeft.onclick = () => {
            imgCount <= 0 ? galleryItemStyle.background = `url(img/service-${imgCount = 3}.jpg)` : galleryItemStyle.background = `url(img/service-${imgCount -= 1}.jpg)`
            serviceGalleryText.innerHTML = `Image ${imgCount + 1} of ${arr.length}`
        }
        galleryRight.onclick = () => {
            imgCount >= 3 ? galleryItemStyle.background = `url(img/service-${imgCount = 0}.jpg)` : galleryItemStyle.background = `url(img/service-${imgCount += 1}.jpg)`
            serviceGalleryText.innerHTML = `Image ${imgCount + 1} of ${arr.length}`
        }
    }
})

effGal.onclick = () => {
    servicesGallery.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)'
    document.body.style.overflowY = 'auto'
}

window.addEventListener('scroll', () => {
    const y = window.scrollY
    y > preHeader.clientHeight ? header.setAttribute('style', 'width:100%; box-shadow: 0 5px 5px rgba(0,0,0,0.3);') : header.setAttribute('style', `width: ${document.body.clientWidth < 991 ? '100%' : '90%'}; box-shadow: none;`)
   
    addScrollAnim(homeContent, -1, 'home')
    aboutItems.forEach(item => addScrollAnim(item, about.offsetTop - about.clientHeight, 'animation1'))
    serviceUpperItems.forEach(item => addScrollAnim(item, services.offsetTop - item.clientHeight, 'animation1'))
    labelItems.forEach(item => addScrollAnim(item, item.parentElement.offsetTop - item.parentElement.clientHeight - (header.clientHeight * 2), 'animation1'))
    actionItems.forEach(item => addScrollAnim(item, about.offsetTop - about.clientHeight - action.clientHeight, 'animation1'))
    addScrollAnim(videoContainer, videoContainer.offsetTop - videoContainer.clientHeight - (header.clientHeight * 2), 'hideShow')
    addScrollAnim(footer, footer.offsetTop - footer.clientHeight - (header.clientHeight * 2), 'hideShow')
    y > about.offsetTop - about.clientHeight - header.clientHeight ? onTop.classList.add('hideShow') : onTop.classList.add('showHide')
    if(y > about.offsetTop - about.clientHeight - header.clientHeight){
        onTop.classList.add('hideShow')
        onTop.classList.remove('showHide')
    }
    else{
        onTop.classList.remove('hideShow')
        onTop.classList.add('showHide')
    }
})


// document.addEventListener('DOMContentLoaded', ()=>{
//     setTimeout(() => {
//         window.location.href = '#preHeader'
//     }, 100);
// })

    window.addEventListener('load', () => {
        window.scrollTo(0,0)
        setTimeout(() => {
            window.location.href = '#'
        }, 100);
        setTimeout(()=>{
            window.scrollTo(0,0)
        },5001)
        sliderTime()

    },true)

