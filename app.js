class Works {
    constructor(img) {
      this.image = img;
    }
  }

class WorkItems {
    constructor (designs) {
        this.design = designs
    }

    render () {
        const list = document.createElement('li')
        list.className = 'all-work__listItem'
        list.innerHTML = `
        <img src="img/${this.design.image}" alt="photo" class="all-work__image">
        <a href="img/${this.design.image}" class="all-work__link">VIEW</a>
        `
        return list
    }
}
class WorkLists {
    works = [
        new Works('brownExquisiteCenterTable.jpg'),
        new Works('brownMultipurposeCenterTable.jpg'),
        new Works('classicGlassWoodCenterTable.jpg'),
        new Works('classicGlassWooddenCenterTable.jpg'),
        new Works('classicSilverTable.jpg'),
        new Works('effectiveConfortatbleCenterTable.jpg'),
        new Works('modernGlassWoodenCenterTable.jpg'),
        new Works('morderLuxiriousCenterTable.jpg'),
        new Works('multiPurposeCenterTable.jpg'),
        new Works('multipurposeModernCenterTable.jpg'),
    ];
    
    render () {
        const allWork = document.querySelector('div')
        for (const items of this.works) {
            const workItems = new WorkItems(items)
            const worklist = workItems.render()
            allWork.append(worklist)
        }   
    }
}

const images = new WorkLists()
images.render()