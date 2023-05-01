import Header from "../components/Header"
import Banner from "../components/Banner"
import Category from "../components/Category"
import Bestseller from "../components/Bestseller"
import Brands from "../components/Brands"
import Item from "../components/Item"
import "../assets/Global.scss"


export default function Home() {
  return (
    <div >
      <Header />
      <Banner />
      <Category />
      <Bestseller />
      <Brands />
      <Item />
    </div>
  )
}