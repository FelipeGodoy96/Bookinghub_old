export function loginAuth (email,password) {
const user = data.find(f=>f.email === email)

if (!!user &&(user.password === password)){
  return {
    loged:true,
    user:user
  }
} else {
  return {
    loged:false,
    user:null
  }
}
}
const data = [
  {
    email:"user@gmail.com",
    password:"user123",
    role:"user"
  },
  {
    email:"admin@gmail.com",
    password:"admin123",
    role:"admin"
  }
]