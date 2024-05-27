export interface Appointment{
    appointmentID : number
    userId : number
    user : User
    createdDate: Date
    updatedDate: Date
    appointmentDate: Date
    rescheduledDate: Date
    timeSlot: string
    length: string
    hairstyleType: string
    status: number
    price: number
}

export interface User{
    
    id: number
    name : string
    email : string
    cellphone: string
    password: string
  
}