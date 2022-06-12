const SearchCont = (function() {
    const cBtn = document.getElementById('c-btn')
    const fBtn = document.getElementById('f-btn')
    const displayBtns = document.querySelectorAll('.change-metrics-btn')
    const searchInput = document.getElementById('search-city')
    let cityValue = ''
    const cityGridBtnsCont = document.getElementById('most-common-btn-cont')

    // Search cont

    const enterSearchCity = () => {
        searchInput.addEventListener('keypress', e => {
            if (e.key == 'Enter') {
                cityValue = searchInput.value
                console.log(cityValue)
                searchInput.value = ''
            }
        })
    }

    // Buttons grid

    const addNewCityBtn = () => {
        let newBtn = createNewCityBtn()
        cityGridBtnsCont.prepend(newBtn)
    }

    const createNewCityBtn = () => {
        let newBtn = document.createElement('button')
        newBtn.classList.add('city-btn')
        newBtn.innerText = cityValue
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

    const update = () => {
        clickDisplayBtn()
        defaultMetric()
        enterSearchCity()
    }

    return {update, getMetrics}
})();

export {SearchCont}