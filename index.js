let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
    }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 1, 1)
    let total = endDate - this.startDate
    return parseInt(total / (365 * 24 * 60 * 60 * 1000))
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {

    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }


    aveAsNumber(ave) {
      return eastWest.indexOf(ave)
    }

  blocksTravelled() {

    let avenues = this.aveAsNumber(this.endingLocation.horizontal) - this.aveAsNumber(this.beginningLocation.horizontal)

    let streets = (this.endingLocation.vertical) -(this.beginningLocation.vertical)

    return avenues + streets
  }

  estimatedTime(peak=false) {
    return peak ? this.blocksTravelled()/2 : this.blocksTravelled()/3
  }

  }
