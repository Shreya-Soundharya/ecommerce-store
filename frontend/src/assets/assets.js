// Importing product 
import bc1 from './bc1.png';
import bc2 from './bc2.png';
import bc3 from './bc3.png';
import bc4 from './bc4.jpg';
import aot1 from './aot1.png';
import aot2 from './aot2.png';
import aot3 from './aot3.png';
import aot4 from './aot4.png';
import op1 from './op1.png';
import op2 from './op2.jpg';
import op3 from './op3.jpg';
import op4 from './op4.jpg';
import jjk1 from './jjk1.png';
import jjk2 from './jjk2.png';
import jjk3 from './jjk3.png';
import jjk4 from './jjk4.png';


import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    { _id: "1", name: 'Black Clover Keychain', description: "Asta's Anti-Magic Sword", price: 10.00, image: [bc1], category: 'BC', subCategory: 'Keychain', bestseller: true },
    { _id: "2", name: 'Black Clover Mug', description: "Black Bull's Team Mug", price: 20.00, image: [bc2], category: 'BC', subCategory: 'Mug', bestseller: false },
    { _id: "3", name: 'Black Clover Necklace', description: 'Five Clover Necklace', price: 15.00, image: [bc3], category: 'BC', subCategory: 'Necklace', bestseller: false },
    { _id: "4", name: 'Black Clover Poster', description: "Asta's Demon Form Poster", price: 15.00, image: [bc4], category: 'BC', subCategory: 'Poster', bestseller: true },
    { _id: "5", name: 'Attack on Titan Cape', description: 'Survey Corps Robe', price: 45.00, image: [aot1], category: 'AOT', subCategory: 'Hoodies', bestseller: false },
    { _id: "6", name: 'Attack on Titan Keychain', description: 'Key to Basement Keychain', price: 25.00, image: [aot2], category: 'AOT', subCategory: 'Keychain', bestseller: true },
    { _id: "7", name: 'Attack on Titan Necklace', description: 'Survey Corps Symbol', price: 18.00, image: [aot3], category: 'AOT', subCategory: 'Necklace', bestseller: false },
    { _id: "8", name: 'Attack on Titan Poster', description: 'Happy Childhood Poster', price: 22.00, image: [aot4], category: 'AOT', subCategory: 'Poster', bestseller: false },
    { _id: "9", name: 'One Piece Keycaps', description: 'Keycaps of Ace, Law & Luffy', price: 60.00, image: [op1], category: 'OP', subCategory: 'Keycaps', bestseller: false },
    { _id: "10", name: 'One Piece Keychain', description: 'Keychain of Law', price: 15.00, image: [op2], category: 'OP', subCategory: 'Keychain', bestseller: true },
    { _id: "11", name: 'One Piece Necklace', description: "Pendant of Ace's Cap", price: 20.00, image: [op3], category: 'OP', subCategory: 'Necklace', bestseller: false },
    { _id: "12", name: 'One Piece Poster', description: 'Poster of Zoro', price: 25.00, image: [op4], category: 'OP', subCategory: 'Poster', bestseller: true },
    { _id: "13", name: 'Jujutsu Kaisen Keycaps', description: 'Keycaps of Gojo & Geto', price: 35.00, image: [jjk1], category: 'JJK', subCategory: 'Keycaps', bestseller: false },
    { _id: "14", name: 'Jujutsu Kaisen Keychain', description: 'Keychain of Gojo Satoru', price: 12.00, image: [jjk2], category: 'JJK', subCategory: 'Keychain', bestseller: false },
    { _id: "15", name: 'Jujutsu Kaisen Keychain', description: 'Keychain of Toji', price: 20.00, image: [jjk3], category: 'JJK', subCategory: 'Keychain', bestseller: false },
    { _id: "16", name: 'Jujutsu Kaisen Poster', description: 'JJK Poster', price: 45.00, image: [jjk4], category: 'JJK', subCategory: 'Poster', bestseller: true },
];
