import {Page} from './index'

const SearchCont = (function() {
    const cBtn = document.getElementById('c-btn')
    const fBtn = document.getElementById('f-btn')
    const displayBtns = document.querySelectorAll('.change-metrics-btn')
    const searchInput = document.getElementById('search-city')
    let cityValue = ''
    const cityGridBtnsCont = document.getElementById('most-common-btn-cont')
    let cityBtns = document.querySelectorAll('.city-btn')

    // Search cont

    const enterSearchCity = (populate) => {
        searchInput.addEventListener('keypress', e => {
            if (e.key == 'Enter') {
                cityValue = searchInput.value
                addNewCityBtn()
                maxNumberBtns()
                populate(cityValue)
                searchInput.value = ''
            }
        })
    }

    const getInputValue = () => {
        return cityValue
    }

    // Buttons grid

    const addNewCityBtn = () => {
        let newBtn = createNewCityBtn()
        cityGridBtnsCont.prepend(newBtn)
        cityBtns = document.querySelectorAll('.city-btn')
        clickCityBtn(Page.populateFields, cityValue)
    }

    const createNewCityBtn = () => {
        let newBtn = document.createElement('button')
        newBtn.classList.add('city-btn')
        newBtn.innerText = cityValue.charAt(0).toUpperCase() + cityValue.slice(1)
        return newBtn
    }

    const maxNumberBtns = () => {
        let gridBtns = document.querySelectorAll('.city-btn')
        console.log(gridBtns.length)
        if (gridBtns.length > 8) {
            cityGridBtnsCont.removeChild(cityGridBtnsCont.lastElementChild)
        }
    }

    // Display metrics

    const defaultMetric = () => {
        cBtn.classList.add('btn-active')
    }
    
    const clickDisplayBtn = () => {
        displayBtns.forEach(btn=> {
            btn.addEventListener('click', e => {
                if (btn.id == 'f-btn') {
                    cBtn.classList.remove('btn-active')
                }
                else {
                    fBtn.classList.remove('btn-active')
                }
                btn.classList.add('btn-active')
            })
        })
    }

    const getMetrics = () => {
        for (let btn of displayBtns) {
            if (btn.classList.contains('btn-active')) {
                return btn.innerHTML
                }
            }
        };

    // Buttons action 

    const clickCityBtn = (populate, city) => {
        cityBtns.forEach(btn => {
            btn.addEventListener('click', e=> {
                populate(btn.innerHTML)
            })
        })
    }

    const update = () => {
        clickDisplayBtn()
        defaultMetric()
        enterSearchCity(Page.populateFields)
    }

    return {update, getMetrics, getInputValue}
})();

export {SearchCont}