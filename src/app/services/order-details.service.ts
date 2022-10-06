import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

 foodDetails = [
  {
    id:1,
    foodName:"Paneer Grilled Sandwich",
    foodDetails:"Pan-fried masala paneer.",
    foodPrice:200,
    foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
  },
  {
    id:2,
    foodName:"Veggie Supreme",
    foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
    foodPrice:369,
    foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
  }, 
  {
    id:3,
    foodName:"Paneer Burger",
    foodDetails:"panner",
    foodPrice:149,
    foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
  },
  {
    id:4,
    foodName:"Veg Masala Roll In Naan",
    foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
    foodPrice:140,
    foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
  },
  {
    id:5,
    foodName:"Indulgence Brownie",
    foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
    foodPrice:105,
    foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
  },
  {
    id:6,
    foodName:"Oreo Cheesecake Ice Cream",
    foodDetails:"Oreo ice cream",
    foodPrice:219,
    foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
  },
  {
    id:7,
    foodName:"bacninhboy",
    foodDetails:"satboiz,.",
    foodPrice:0,
    foodImg:"https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/279802661_167975722263391_321219827864845321_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=34-0Kcp6DQAAX82U1QM&_nc_ht=scontent.fhan5-8.fna&oh=00_AT-OqUy0kjxu_R8iK7_q2b-oKntMG6908cxVxoCVGyMepg&oe=633B88C4"
  },
  {
    id:8,
    foodName:"ngọc anh chưa lớn",
    foodDetails:"nhóc",
    foodPrice:0,
    foodImg:"https://www.facebook.com/photo/?fbid=1508758209566895&set=a.115078152268248&__cft__[0]=AZX3P5aRsI2l7cqx4m6w-08v3TOSOY0z6LEGAsCdItOqGpBhBP4QfqaS41ge8OIjLAdHg5TNAvNoNjV_sVF8w1Q3vO8xxabqtbBB3djTthfUf9du03d33xe3kVMgVGDNaVyuvCtqj-vNaVwQmWTG8ixgTTiZPH3bxMHnDGyhKgc8gQ&__tn__=~H-R"
  },

 ]
}
