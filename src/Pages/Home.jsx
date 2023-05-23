import Header from "../components/Header"
import Banner from "../components/Banner"
import Category from "../components/Category"
import Bestseller from "../components/Bestseller"
import Brands from "../components/Brands"
import Item from "../components/Item"
import "../assets/Global.scss"
import Navigation from "../components/Navigation"
import NavigationCategory from "../components/NavigationCategory"
import Advances from "../components/Advances"
import OurProducts from "../components/OurProducts"
import Company from "../components/Company"
import UserBar from "../components/UserBar"
import Footer from "../components/Footer"



export default function Home() {
  return (
    <div >
      <Header />
      <Navigation />
      <NavigationCategory />
      <Banner />
      <Category />
      <Bestseller />
      <Brands />
      <Item />
      <Advances />
      <OurProducts />
      <Company />
      <UserBar />
      <Footer/>
    </div>
  )
}
