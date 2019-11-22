const car = (name, model, owner, year, phone, image) => ({
    name,
    model,
    owner,
    year,
    phone,
    image
})
const cars = [
    car('Ford', 'Focus', 'Max', 2016, '+7 929 123 45 67', 'images/ford.png'),
    car('Ford', 'Mondeo', 'Vladimir', 2016, '+7 900 193 48 62', 'images/mondeo.png'),
    car('Porshe', 'Panamera', 'Irina', 2016, '+7 901 123 45 00', 'images/panamera2.png')
]
const log = (text, type, date = new Date) => ({text, type, date})

new Vue({
    el: '#vue',
    data: {
        cars,
        car: cars[0],
        logs: [],
        phoneVisibility: false,
        selectedCarIndex: 0,
        search: '',
        modalVisibility: false,
        firstName: '',
        email: '',
        phone: '',
        guests: []
    },
   computed: {
     phoneBtnText() {
         return this.phoneVisibility ? 'Hide phone' : 'Show phone'
     },
     filteredCars() {
         const self = this
         return filtered = this.cars.filter((car) => car.name.indexOf(self.search) > -1 || car.model.indexOf(self.search) > -1)         
     }
   },
    methods: {
        selectCar(index) {
            this.car = cars[index]
            this.selectedCarIndex = index
        },  
        buyCar() {
          this.modalVisibility = false
          this.logs.push(log(`Success order: ${this.car.name} - ${this.car.model}` , `ok`))
        },
        cancel() {
            this.modalVisibility = false
            this.logs.push(log(`Cancelled order: ${this.car.name} - ${this.car.model}` , `cnl`))
        }   
    },
    filters: {
      date(value) {
        return value.toLocaleString()
      }
    }
})