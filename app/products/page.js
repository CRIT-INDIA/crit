import SAPProductPage from "./components/product_hero";
import  SAPProductsInfo from './components/p_info';

    


export default function Page() {
  
  return (
    <div>
     
      <div className="relative bg-gradient-to-br from-white to-red-50 pt-10">   
        <SAPProductPage />
        < SAPProductsInfo />

      </div>
      
    </div>
  );
}