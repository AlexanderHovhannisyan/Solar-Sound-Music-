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
let resultLeftContainer = document.querySelector('.blueLoc')
let resultRightContainer = document.querySelector('.yellowLoc')
let resultCount = document.querySelectorAll('.resultCount')
let services = document.querySelector('.services')
let serviceUpperItems = document.querySelectorAll('.upperContainer')
let serviceLowerItems = document.querySelectorAll('.lowerContainer')
let servicesItems = document.querySelectorAll('.servicesItems')
let videoContainer = document.querySelector('.video')
let teamItems = document.querySelectorAll('.teamItem')
// Left Position Count For Slide
let leftOffset = 0
// Counts
let count = 0
let intCount = 0
// Count and Created Text for Gallery
let serviceGalleryText = document.createElement('span')
serviceGalleryText.className = 'textGallery'
// Slider Length
let sliderLength = (sliderContainer.children.length - 1) * 100

// .... ФУНКЦИИ ..... ///////////////////////////////////////////////////////////////////////////////////////

function changeLink(parent) {
    if (document.body.clientWidth > 991) {
        bodyElements.forEach(el => {
            if (parent.className.includes(el.className)) {
                linksHeader.forEach(link => {
                    if (el.className == link.dataset.scroll) {
                        link.style.color = 'orange'
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
                for(let i = 0; i < item.children[1].children.length; i++){
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
    }, 5000)

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

function resultInterval(el, step) {
    setInterval(() => {
        if (el.innerHTML === el.dataset.toggle) {
            return false
        }
        else {
            el.innerHTML = +el.innerHTML + step;
        }
    }, 55 / (el.dataset.toggle / 109))
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

// .... ИВЕНТЫ ..... ///////////////////////////////////////////////////////////////////////////////////////
burgerParent.onclick = () => {
    burgerItems.forEach(it => {
        it.classList.toggle('burgerMenu-active')
        navbarHeader.classList.toggle('navbar-media')
    })
}

videoContainer.children[0].onclick = () => {
    videoContent.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
    document.body.style.overflowY = 'hidden'
    videoBlock.play()
    videoBlock.onclick = () => videoBlock.paused ? videoBlock.pause() : videoBlock.play()
}

effVid.onclick = () => {
    videoContent.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)'
    document.body.style.overflowY = 'visible'
    videoBlock.pause()
    videoBlock.currentTime = 0
}

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
            imgCount <= 0 ? galleryItemStyle.background = `url(img/service-${imgCount = 5}.jpg)` : galleryItemStyle.background = `url(img/service-${imgCount -= 1}.jpg)`
            serviceGalleryText.innerHTML = `Image ${imgCount + 1} of ${arr.length}`
        }
        galleryRight.onclick = () => {
            imgCount >= 5 ? galleryItemStyle.background = `url(img/service-${imgCount = 0}.jpg)` : galleryItemStyle.background = `url(img/service-${imgCount += 1}.jpg)`
            serviceGalleryText.innerHTML = `Image ${imgCount + 1} of ${arr.length}`
        }
    }
})

effGal.onclick = () => {
    servicesGallery.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)'
    document.body.style.overflowY = 'visible'
}

window.addEventListener('scroll', () => {
    const y = window.scrollY
    y > preHeader.clientHeight ? header.setAttribute('style', 'width:100%; box-shadow: 0 5px 5px rgba(0,0,0,0.3);') : header.setAttribute('style', `width: ${document.body.clientWidth < 991 ? '100%' : '90%'}; box-shadow: none;`)
    y > about.offsetTop - about.clientHeight - header.clientHeight ? onTop.classList.add('hideShow') : onTop.classList.remove('hideShow')
    addScrollAnim(homeContent, -1, 'home')
    aboutItems.forEach(item => addScrollAnim(item, about.offsetTop - about.clientHeight, 'animation1'))
    serviceUpperItems.forEach(item => addScrollAnim(item, services.offsetTop - item.clientHeight, 'animation1'))
    serviceLowerItems.forEach(item => addScrollAnim(item, services.offsetTop + header.clientHeight, 'animation1'))
    teamItems.forEach(item => addScrollAnim(item, item.parentElement.offsetTop - item.parentElement.clientHeight - (header.clientHeight * 2), 'animation1'))
    actionItems.forEach(item => addScrollAnim(item, about.offsetTop - about.clientHeight - action.clientHeight, 'animation1'))
    addScrollAnim(videoContainer, videoContainer.offsetTop - videoContainer.clientHeight - (header.clientHeight * 2), 'hideShow')
    addScrollAnim(footer, footer.offsetTop - footer.clientHeight - (header.clientHeight * 2), 'hideShow')

    if (y > about.offsetTop - header.clientHeight) {
        intCount++
        resultLeftContainer.classList.add('resultLeftContainer')
        resultRightContainer.classList.add('resultRightContainer')
        if (intCount < 2) {
            resultCount.forEach(item => resultInterval(item, 1))
        }
    }
})

window.addEventListener('load', () => {
    sliderTime()
})