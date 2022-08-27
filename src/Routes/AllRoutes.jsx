import { Routes,Route } from "react-router-dom"
import { Hotjar } from './Hotjar';
import { Product } from './Product';
import { WhyHotjar } from './WhyHotjar';
import { Pricing } from './Pricing';
import { Learn } from './Learn';
import { Company } from './Company';
import { Sign } from './Sign';
import { GetStarted } from './GetStarted';
export const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Hotjar  />} />
            <Route path="/product" element={<Product />} />
            <Route path="/why" element={<WhyHotjar  />} />
            <Route path="/pricing" element={<Pricing  />} />
            <Route path="/learn" element={<Learn  />} />
            <Route path="/company" element={<Company />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/started" element={<GetStarted  />} />
        </Routes>
    )
}