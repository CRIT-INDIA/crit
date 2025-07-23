import SAPProductPage from "./components/product_hero";
import  SAPProductsInfo from './components/p_info';

    


export default function Page() {
  
  return (
    <div>
     
      <div className="relative bg-[#fff5f5] pt-10">   
        <SAPProductPage />
        < SAPProductsInfo />

      </div>
      
    </div>
  );
}