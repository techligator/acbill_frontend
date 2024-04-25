// import React, { useRef, useEffect, useState } from 'react';
// import { Card, CardContent, CardMedia, Typography } from '@mui/material';
// import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
// import './ProductSuggestionCard.css'; // Import CSS file for animations


// const products = [
//     {
//         id: 1,
//         image: "https://m.media-amazon.com/images/I/41GNv+Wn6TL._SX679_.jpg",
//         brand: "Daikin",
//         description: "Daikin 1.5 Ton 5 Star Inverter Split AC (Copper, PM 1.0 Filter, 2022 Model, JTKJ50U, White)",
//         stars: 5,
//         annualConsumption: "500 kWh",
//         link: "https://www.amazon.in/Daikin-Inverter-Copper-Filter-JTKJ50U/dp/B09R4RZR83/ref=sr_1_4?adgrpid=1319415562630374&dib=eyJ2IjoiMSJ9.dHfRM11CaYRVIvLumGraJVxP_Ly5c-eKETzk163AKWRuqpCSbGqDBLxHnvCXRVDXAT09_QCjCyLbm6ZUKQ7Nn0kbIAausAzRxe5sTG0TMFLHFZMNbdEUoKXtMYV7J3JZR5wIV5dZJxBjk-bG5Pdjccvsk5lel5N45csebpatJyRMF4pGgnJVwRvyIJ1GLuaVl4gaBgc0I3d-7U88V_bp4tVoA6stsbvHCtBh2L0O1XA.d6TJd9zwawYvzqgclarhxBhqC0NLJf6Nh1_cfuamqBM&dib_tag=se&hvadid=82463743070536&hvbmt=be&hvdev=c&hvlocphy=1669&hvnetw=o&hvqmt=e&hvtargid=kwd-82464354852003%3Aloc-90&hydadcr=4694_2250437&keywords=best+15+ton+ac+for+home&qid=1713852938&sr=8-4"
//     },
//     {
//         id: 2,
//         image: "https://m.media-amazon.com/images/I/31oqaSy8AFL._SX679_.jpg",
//         brand: "Blue Star",
//         description: "Blue Star 1.5 Ton 3 Star 5 in 1 Convertible Inverter Split AC (Copper, Multi Sensors, Stabalizer Free Operation, Self Diagnosis, 2023 Model, IA318FNU, White)",
//         stars: 3,
//         annualConsumption: "600 kWh",
//         link: "https://www.amazon.in/Blue-Star-Inverter-Convertible-IA318FNU/dp/B09RG2SZVX/ref=sr_1_16?adgrpid=1319415562630374&dib=eyJ2IjoiMSJ9.dHfRM11CaYRVIvLumGraJVxP_Ly5c-eKETzk163AKWRuqpCSbGqDBLxHnvCXRVDXAT09_QCjCyLbm6ZUKQ7Nn0kbIAausAzRxe5sTG0TMFLHFZMNbdEUoKXtMYV7J3JZR5wIV5dZJxBjk-bG5Pdjccvsk5lel5N45csebpatJyRMF4pGgnJVwRvyIJ1GLuaVl4gaBgc0I3d-7U88V_bp4tVoA6stsbvHCtBh2L0O1XA.d6TJd9zwawYvzqgclarhxBhqC0NLJf6Nh1_cfuamqBM&dib_tag=se&hvadid=82463743070536&hvbmt=be&hvdev=c&hvlocphy=1669&hvnetw=o&hvqmt=e&hvtargid=kwd-82464354852003%3Aloc-90&hydadcr=4694_2250437&keywords=best%2B15%2Bton%2Bac%2Bfor%2Bhome&qid=1713852938&sr=8-16&th=1"
//     },
//     {
//         id: 3,
//         image: "https://m.media-amazon.com/images/I/51aDPQpzC2L._SX679_.jpg",
//         brand: "LG",
//         description: "LG 1.5 Ton 3 Star DUAL Inverter Window AC (Copper, Convertible 4-in-1 cooling, HD Filter, 2022 Model, PW-Q18WUXA, White)",
//         stars: 3,
//         annualConsumption: "570 kWh",
//         link: "https://www.amazon.in/LG-Inverter-Convertible-cooling-PW-Q18WUXA/dp/B0BJBP7F1Z/ref=sr_1_20?adgrpid=1319415562630374&dib=eyJ2IjoiMSJ9.dHfRM11CaYRVIvLumGraJVxP_Ly5c-eKETzk163AKWRuqpCSbGqDBLxHnvCXRVDXAT09_QCjCyLbm6ZUKQ7Nn0kbIAausAzRxe5sTG0TMFLHFZMNbdEUoKXtMYV7J3JZR5wIV5dZJxBjk-bG5Pdjccvsk5lel5N45csebpatJyRMF4pGgnJVwRvyIJ1GLuaVl4gaBgc0I3d-7U88V_bp4tVoA6stsbvHCtBh2L0O1XA.d6TJd9zwawYvzqgclarhxBhqC0NLJf6Nh1_cfuamqBM&dib_tag=se&hvadid=82463743070536&hvbmt=be&hvdev=c&hvlocphy=1669&hvnetw=o&hvqmt=e&hvtargid=kwd-82464354852003%3Aloc-90&hydadcr=4694_2250437&keywords=best+15+ton+ac+for+home&qid=1713852938&sr=8-20"
//     }
// ];






// const productsForOneTon = [
//     {
//         id: 1,
//         image: "https://m.media-amazon.com/images/I/51bTCAnwZIL._SX679_.jpg",
//         brand: "Panasonic",
//         description: "Panasonic 1 Ton 3 Star Wi-Fi Inverter Smart Split AC (Copper Condenser, 7 in 1 Convertible with True AI Mode, PM 0.1 Air Purification Filter, CS/CU-SU12ZKYWA, 2024 Model, White)",
//         stars: 3,
//         annualConsumption: "500 kWh",
//         link: "https://www.amazon.in/Panasonic-Convertible-Purification-CS-CU-SU12ZKYWA/dp/B0CSCTCMX9/ref=sr_1_2_sspa?crid=EHMI7TMSPLBX&dib=eyJ2IjoiMSJ9.7Z9M_aW8Xlwz4ZLAxHBuo8dUSWR7gk7PDWlCfJUOxo-MS5heEfIy5dgTYf0pStWKcPcaAgX25HuiJc2RCJQ8XYVdLS6W36tgFPH24dBTOFgyHEL2LIcKCxNlHZr-mMvh9A0g7uBGkeSAs6lEQmDLtbh1F0k9N3bnYdp54nsDk2PV2MPEkifC0GLRmEwsbn0atL7kLtnk24iYPTv6deMoZ8l_miVVP9UJtwkfveeRrHI.VOYaHitTBULfla9Yo0ehJJCNlCC2ZINCicAFZ7wv0OU&dib_tag=se&keywords=best%2B1%2Bton%2Bac%2Bfor%2Bhome&qid=1713854489&sprefix=best%2B15%2Bton%2Bac%2Bfor%2Bhome%2Caps%2C852&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
//     },
//     {
//         id: 2,
//         image: "https://m.media-amazon.com/images/I/51ayyOq4zeL._SX679_.jpg",
//         brand: "Voltas",
//         description: "Voltas 1 Ton 3 Star, Inverter Split AC(Copper, 4-in-1 Adjustable Mode, Anti-dust Filter, 2023 Model, 123V Vectra Elegant, White)",
//         stars: 3,
//         annualConsumption: "600 kWh",
//         link: "https://www.amazon.in/Voltas-Adjustable-123V-Vectra-Elegant/dp/B0BQR2491B/ref=sr_1_3?crid=EHMI7TMSPLBX&dib=eyJ2IjoiMSJ9.7Z9M_aW8Xlwz4ZLAxHBuo8dUSWR7gk7PDWlCfJUOxo-MS5heEfIy5dgTYf0pStWKcPcaAgX25HuiJc2RCJQ8XYVdLS6W36tgFPH24dBTOFgyHEL2LIcKCxNlHZr-mMvh9A0g7uBGkeSAs6lEQmDLtbh1F0k9N3bnYdp54nsDk2PV2MPEkifC0GLRmEwsbn0atL7kLtnk24iYPTv6deMoZ8l_miVVP9UJtwkfveeRrHI.VOYaHitTBULfla9Yo0ehJJCNlCC2ZINCicAFZ7wv0OU&dib_tag=se&keywords=best%2B1%2Bton%2Bac%2Bfor%2Bhome&qid=1713854489&sprefix=best%2B15%2Bton%2Bac%2Bfor%2Bhome%2Caps%2C852&sr=8-3&th=1"
//     },
//     {
//         id: 3,
//         image: "https://m.media-amazon.com/images/I/41ImBPm1ZxL._SX679_.jpg",
//         brand: "Godrej",
//         description: "Godrej 1 Ton 3 Star, 5-In-1 Convertible Cooling, Inverter Split AC (Copper, I-Sense Technology, 2023 Model, AC 1T EI 12TINV3R32-GWA Split, White)",
//         stars: 3,
//         annualConsumption: "570 kWh",
//         link: "https://www.amazon.in/Godrej-Convertible-Split-AC-12TINV3R32-GWA/dp/B0BN37ZCF7/ref=sr_1_5?crid=EHMI7TMSPLBX&dib=eyJ2IjoiMSJ9.7Z9M_aW8Xlwz4ZLAxHBuo8dUSWR7gk7PDWlCfJUOxo-MS5heEfIy5dgTYf0pStWKcPcaAgX25HuiJc2RCJQ8XYVdLS6W36tgFPH24dBTOFgyHEL2LIcKCxNlHZr-mMvh9A0g7uBGkeSAs6lEQmDLtbh1F0k9N3bnYdp54nsDk2PV2MPEkifC0GLRmEwsbn0atL7kLtnk24iYPTv6deMoZ8l_miVVP9UJtwkfveeRrHI.VOYaHitTBULfla9Yo0ehJJCNlCC2ZINCicAFZ7wv0OU&dib_tag=se&keywords=best%2B1%2Bton%2Bac%2Bfor%2Bhome&qid=1713854489&sprefix=best%2B15%2Bton%2Bac%2Bfor%2Bhome%2Caps%2C852&sr=8-5&th=1"
//     }
// ];





// const productsForTwoTon = [
//     {
//         id: 1,
//         image: "https://m.media-amazon.com/images/I/41M7ocgxanL._SX679_.jpg",
//         brand: "Voltas",
//         description: "Voltas 2 Ton 5 Star, Inverter Split AC(Copper,4-in-1 Adjustable Mode, Anti-dust Filter, 2023 Model, 245V Vectra Plus, White)",
//         stars: 5,
//         annualConsumption: "500 kWh",
//         link: "https://www.amazon.in/Voltas-Adjustable-Inverter-Copper-VECTRA/dp/B0BBFWM5F9/ref=sr_1_3?crid=1TTTS79MS42YM&dib=eyJ2IjoiMSJ9.NxuvxENoHM1kl2bNstMYqMYdz8DYZ3EyX1jsM77_aJd4MU2kxIe75Oa7h9BxlaIAGJihxaF_ISzQakWRyIfB8d-Benb5nZ4tCFGR5IeJ7E_G1e5W7lJknPe5ZsN80TZbrMpjpHHOK2UmyVUFywRTEO5kCC5Jkf_x2hhh0faaCyF__jRaksr4twhrXSR01qrlF0EFlCL_SjeDUryma-I5-rsCV8ozxalaglddKNkpX9w.HNECFVHHctTJ5koQqskGfXOz8F_fiyWOIiyGzoxH2Ts&dib_tag=se&keywords=best%2B2%2Bton%2Bac%2Bfor%2Bhome&qid=1713854805&sprefix=best%2B2%2Bton%2Bac%2Bfor%2Bhome%2Caps%2C299&sr=8-3&th=1"
//     },
//     {
//         id: 2,
//         image: "https://m.media-amazon.com/images/I/61oFhg35iWL._SX679_.jpg",
//         brand: "Samsung",
//         description: "Samsung 2 Ton 3 Star Wi-fi Enabled Inverter Split AC (Copper, Convertible 5-in-1 Cooling Mode, Anti-bacterial Filter, 2023 Model AR24CYLZABE White)",
//         stars: 3,
//         annualConsumption: "600 kWh",
//         link: "https://www.amazon.in/Samsung-Inverter-Convertible-Anti-bacterial-AR24CYLZABE/dp/B0BRQD4L93/ref=sr_1_4?crid=1TTTS79MS42YM&dib=eyJ2IjoiMSJ9.NxuvxENoHM1kl2bNstMYqMYdz8DYZ3EyX1jsM77_aJd4MU2kxIe75Oa7h9BxlaIAGJihxaF_ISzQakWRyIfB8d-Benb5nZ4tCFGR5IeJ7E_G1e5W7lJknPe5ZsN80TZbrMpjpHHOK2UmyVUFywRTEO5kCC5Jkf_x2hhh0faaCyF__jRaksr4twhrXSR01qrlF0EFlCL_SjeDUryma-I5-rsCV8ozxalaglddKNkpX9w.HNECFVHHctTJ5koQqskGfXOz8F_fiyWOIiyGzoxH2Ts&dib_tag=se&keywords=best%2B2%2Bton%2Bac%2Bfor%2Bhome&qid=1713854805&sprefix=best%2B2%2Bton%2Bac%2Bfor%2Bhome%2Caps%2C299&sr=8-4&th=1"
//     },
//     {
//         id: 3,
//         image: "https://m.media-amazon.com/images/I/61EGlfoZULL._SX679_.jpg",
//         brand: "LG",
//         description: "LG 2.0 Ton 3 Star DUAL Inverter Split AC (Copper, AI Convertible 6-in-1 Cooling, 4 Way Swing, HD Filter with Anti-Virus Protection, 2024 Model, TS-Q24ENXE, White)",
//         stars: 3,
//         annualConsumption: "570 kWh",
//         link: "https://www.amazon.in/LG-Convertible-Anti-Virus-Protection-TS-Q24ENXE/dp/B0CQM5JSDJ/ref=sr_1_5?crid=1TTTS79MS42YM&dib=eyJ2IjoiMSJ9.NxuvxENoHM1kl2bNstMYqMYdz8DYZ3EyX1jsM77_aJd4MU2kxIe75Oa7h9BxlaIAGJihxaF_ISzQakWRyIfB8d-Benb5nZ4tCFGR5IeJ7E_G1e5W7lJknPe5ZsN80TZbrMpjpHHOK2UmyVUFywRTEO5kCC5Jkf_x2hhh0faaCyF__jRaksr4twhrXSR01qrlF0EFlCL_SjeDUryma-I5-rsCV8ozxalaglddKNkpX9w.HNECFVHHctTJ5koQqskGfXOz8F_fiyWOIiyGzoxH2Ts&dib_tag=se&keywords=best%2B2%2Bton%2Bac%2Bfor%2Bhome&qid=1713854805&sprefix=best%2B2%2Bton%2Bac%2Bfor%2Bhome%2Caps%2C299&sr=8-5&th=1"
//     }
// ];

// const ProductSuggestionCard = () => {
//     const cardRefs = useRef([]);
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const options = {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.5 // Trigger when 50% of the card is visible
//         };

//         const observer = new IntersectionObserver(entries => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                 }
//             });
//         }, options);

//         cardRefs.current.forEach(ref => {
//             observer.observe(ref);
//         });

//         return () => {
//             observer.disconnect();
//         };
//     }, []);

//     return (
//         <>
//             <div className="typewriter-container">
//                 <div className="typewriter">Recommended 1.5 Ton AC</div>
//             </div>
//             <div className="product-suggestion-container">
//                 {products.map((product, index) => (
//                     <Card
//                         key={product.id}
//                         ref={el => (cardRefs.current[index] = el)}
//                         className={`product-card ${isVisible ? 'bubble-in' : ''}`}
//                         onClick={() => window.open(product.link, '_blank')}
//                     >
//                         <CardMedia style={{ height: 200 }} image={product.image} title={product.brand} />
//                         <CardContent>
//                             <Typography variant="h5" component="h2">
//                                 <span style={{color: 'rgb(52, 141, 204)'}}>Brand : </span><i>{product.brand}</i>
//                                 <br />
//                                 {[...Array(product.stars)].map((_, index) => (
//                                     <StarRateRoundedIcon key={index} style={{ color: 'gold' }} />
//                                 ))}
//                             </Typography>
//                             <Typography variant="body2" color="textSecondary" component="p">
//                                 <span style={{color: 'rgb(52, 141, 204)'}}>Annual Consumption : </span> {product.annualConsumption}
//                                 <br />
//                                 <span style={{color: 'rgb(52, 141, 204)'}}>Description : </span><i>{product.description}</i>
//                             </Typography>
//                             <br />
//                             <a href={product.link} target="_blank" rel="noreferrer" >
//                                 <Typography variant="body2" color="primary" component="p">
//                                     View Product
//                                 </Typography>
//                             </a>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </div>




//             <div className="typewriter-container">
//                 <div className="typewriter">Recommended 1 Ton AC</div>
//             </div>
//             <div className="product-suggestion-container">
//                 {productsForOneTon.map((product, index) => (
//                     <Card
//                         key={product.id}
//                         ref={el => (cardRefs.current[index] = el)}
//                         className={`product-card ${isVisible ? 'bubble-in' : ''}`}
//                         onClick={() => window.open(product.link, '_blank')}
//                     >
//                         <CardMedia style={{ height: 200 }} image={product.image} title={product.brand} />
//                         <CardContent>
//                             <Typography variant="h5" component="h2">
//                                 <span style={{color: 'rgb(52, 141, 204)'}}>Brand : </span><i>{product.brand}</i>
//                                 <br />
//                                 {[...Array(product.stars)].map((_, index) => (
//                                     <StarRateRoundedIcon key={index} style={{ color: 'gold' }} />
//                                 ))}
//                             </Typography>
//                             <Typography variant="body2" color="textSecondary" component="p">
//                                 <span style={{color: 'rgb(52, 141, 204)'}}>Annual Consumption : </span> {product.annualConsumption}
//                                 <br />
//                                 <span style={{color: 'rgb(52, 141, 204)'}}>Description : </span><i>{product.description}</i>
//                             </Typography>
//                             <br />
//                             <a href={product.link} target="_blank" rel="noreferrer" >
//                                 <Typography variant="body2" color="primary" component="p">
//                                     View Product
//                                 </Typography>
//                             </a>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </div>





//             <div className="typewriter-container">
//                 <div className="typewriter">Recommended 2 Ton AC</div>
//             </div>
//             <div className="product-suggestion-container">
//                 {productsForTwoTon.map((product, index) => (
//                     <Card
//                         key={product.id}
//                         ref={el => (cardRefs.current[index] = el)}
//                         className={`product-card ${isVisible ? 'bubble-in' : ''}`}
//                         onClick={() => window.open(product.link, '_blank')}
//                     >
//                         <CardMedia style={{ height: 200 }} image={product.image} title={product.brand} />
//                         <CardContent>
//                             <Typography variant="h5" component="h2">
//                                 <span style={{color: 'rgb(52, 141, 204)'}}>Brand : </span><i>{product.brand}</i>
//                                 <br />
//                                 {[...Array(product.stars)].map((_, index) => (
//                                     <StarRateRoundedIcon key={index} style={{ color: 'gold' }} />
//                                 ))}
//                             </Typography>
//                             <Typography variant="body2" color="textSecondary" component="p">
//                                 <span style={{color: 'rgb(52, 141, 204)'}}>Annual Consumption : </span> {product.annualConsumption}
//                                 <br />
//                                 <span style={{color: 'rgb(52, 141, 204)'}}>Description : </span><i>{product.description}</i>
//                             </Typography>
//                             <br />
//                             <a href={product.link} target="_blank" rel="noreferrer" >
//                                 <Typography variant="body2" color="primary" component="p">
//                                     View Product
//                                 </Typography>
//                             </a>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default ProductSuggestionCard;









import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import './ProductSuggestionCard.css'; // Import CSS file for animations


const products = [
    {
        id: 1,
        image: "https://m.media-amazon.com/images/I/41GNv+Wn6TL._SX679_.jpg",
        brand: "Daikin",
        description: "Daikin 1.5 Ton 5 Star Inverter Split AC (Copper, PM 1.0 Filter, 2022 Model, JTKJ50U, White)",
        stars: 5,
        annualConsumption: "500 kWh",
        link: "https://www.amazon.in/Daikin-Inverter-Copper-Filter-JTKJ50U/dp/B09R4RZR83/ref=sr_1_4?adgrpid=1319415562630374&dib=eyJ2IjoiMSJ9.dHfRM11CaYRVIvLumGraJVxP_Ly5c-eKETzk163AKWRuqpCSbGqDBLxHnvCXRVDXAT09_QCjCyLbm6ZUKQ7Nn0kbIAausAzRxe5sTG0TMFLHFZMNbdEUoKXtMYV7J3JZR5wIV5dZJxBjk-bG5Pdjccvsk5lel5N45csebpatJyRMF4pGgnJVwRvyIJ1GLuaVl4gaBgc0I3d-7U88V_bp4tVoA6stsbvHCtBh2L0O1XA.d6TJd9zwawYvzqgclarhxBhqC0NLJf6Nh1_cfuamqBM&dib_tag=se&hvadid=82463743070536&hvbmt=be&hvdev=c&hvlocphy=1669&hvnetw=o&hvqmt=e&hvtargid=kwd-82464354852003%3Aloc-90&hydadcr=4694_2250437&keywords=best+15+ton+ac+for+home&qid=1713852938&sr=8-4"
    },
    {
        id: 2,
        image: "https://m.media-amazon.com/images/I/31oqaSy8AFL._SX679_.jpg",
        brand: "Blue Star",
        description: "Blue Star 1.5 Ton 3 Star 5 in 1 Convertible Inverter Split AC (Copper, Multi Sensors, Stabalizer Free Operation, Self Diagnosis, 2023 Model, IA318FNU, White)",
        stars: 3,
        annualConsumption: "600 kWh",
        link: "https://www.amazon.in/Blue-Star-Inverter-Convertible-IA318FNU/dp/B09RG2SZVX/ref=sr_1_16?adgrpid=1319415562630374&dib=eyJ2IjoiMSJ9.dHfRM11CaYRVIvLumGraJVxP_Ly5c-eKETzk163AKWRuqpCSbGqDBLxHnvCXRVDXAT09_QCjCyLbm6ZUKQ7Nn0kbIAausAzRxe5sTG0TMFLHFZMNbdEUoKXtMYV7J3JZR5wIV5dZJxBjk-bG5Pdjccvsk5lel5N45csebpatJyRMF4pGgnJVwRvyIJ1GLuaVl4gaBgc0I3d-7U88V_bp4tVoA6stsbvHCtBh2L0O1XA.d6TJd9zwawYvzqgclarhxBhqC0NLJf6Nh1_cfuamqBM&dib_tag=se&hvadid=82463743070536&hvbmt=be&hvdev=c&hvlocphy=1669&hvnetw=o&hvqmt=e&hvtargid=kwd-82464354852003%3Aloc-90&hydadcr=4694_2250437&keywords=best%2B15%2Bton%2Bac%2Bfor%2Bhome&qid=1713852938&sr=8-16&th=1"
    },
    {
        id: 3,
        image: "https://m.media-amazon.com/images/I/51aDPQpzC2L._SX679_.jpg",
        brand: "LG",
        description: "LG 1.5 Ton 3 Star DUAL Inverter Window AC (Copper, Convertible 4-in-1 cooling, HD Filter, 2022 Model, PW-Q18WUXA, White)",
        stars: 3,
        annualConsumption: "570 kWh",
        link: "https://www.amazon.in/LG-Inverter-Convertible-cooling-PW-Q18WUXA/dp/B0BJBP7F1Z/ref=sr_1_20?adgrpid=1319415562630374&dib=eyJ2IjoiMSJ9.dHfRM11CaYRVIvLumGraJVxP_Ly5c-eKETzk163AKWRuqpCSbGqDBLxHnvCXRVDXAT09_QCjCyLbm6ZUKQ7Nn0kbIAausAzRxe5sTG0TMFLHFZMNbdEUoKXtMYV7J3JZR5wIV5dZJxBjk-bG5Pdjccvsk5lel5N45csebpatJyRMF4pGgnJVwRvyIJ1GLuaVl4gaBgc0I3d-7U88V_bp4tVoA6stsbvHCtBh2L0O1XA.d6TJd9zwawYvzqgclarhxBhqC0NLJf6Nh1_cfuamqBM&dib_tag=se&hvadid=82463743070536&hvbmt=be&hvdev=c&hvlocphy=1669&hvnetw=o&hvqmt=e&hvtargid=kwd-82464354852003%3Aloc-90&hydadcr=4694_2250437&keywords=best+15+ton+ac+for+home&qid=1713852938&sr=8-20"
    }
];






const productsForOneTon = [
    {
        id: 1,
        image: "https://m.media-amazon.com/images/I/51bTCAnwZIL._SX679_.jpg",
        brand: "Panasonic",
        description: "Panasonic 1 Ton 3 Star Wi-Fi Inverter Smart Split AC (Copper Condenser, 7 in 1 Convertible with True AI Mode, PM 0.1 Air Purification Filter, CS/CU-SU12ZKYWA, 2024 Model, White)",
        stars: 3,
        annualConsumption: "500 kWh",
        link: "https://www.amazon.in/Panasonic-Convertible-Purification-CS-CU-SU12ZKYWA/dp/B0CSCTCMX9/ref=sr_1_2_sspa?crid=EHMI7TMSPLBX&dib=eyJ2IjoiMSJ9.7Z9M_aW8Xlwz4ZLAxHBuo8dUSWR7gk7PDWlCfJUOxo-MS5heEfIy5dgTYf0pStWKcPcaAgX25HuiJc2RCJQ8XYVdLS6W36tgFPH24dBTOFgyHEL2LIcKCxNlHZr-mMvh9A0g7uBGkeSAs6lEQmDLtbh1F0k9N3bnYdp54nsDk2PV2MPEkifC0GLRmEwsbn0atL7kLtnk24iYPTv6deMoZ8l_miVVP9UJtwkfveeRrHI.VOYaHitTBULfla9Yo0ehJJCNlCC2ZINCicAFZ7wv0OU&dib_tag=se&keywords=best%2B1%2Bton%2Bac%2Bfor%2Bhome&qid=1713854489&sprefix=best%2B15%2Bton%2Bac%2Bfor%2Bhome%2Caps%2C852&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
    },
    {
        id: 2,
        image: "https://m.media-amazon.com/images/I/51ayyOq4zeL._SX679_.jpg",
        brand: "Voltas",
        description: "Voltas 1 Ton 3 Star, Inverter Split AC(Copper, 4-in-1 Adjustable Mode, Anti-dust Filter, 2023 Model, 123V Vectra Elegant, White)",
        stars: 3,
        annualConsumption: "600 kWh",
        link: "https://www.amazon.in/Voltas-Adjustable-123V-Vectra-Elegant/dp/B0BQR2491B/ref=sr_1_3?crid=EHMI7TMSPLBX&dib=eyJ2IjoiMSJ9.7Z9M_aW8Xlwz4ZLAxHBuo8dUSWR7gk7PDWlCfJUOxo-MS5heEfIy5dgTYf0pStWKcPcaAgX25HuiJc2RCJQ8XYVdLS6W36tgFPH24dBTOFgyHEL2LIcKCxNlHZr-mMvh9A0g7uBGkeSAs6lEQmDLtbh1F0k9N3bnYdp54nsDk2PV2MPEkifC0GLRmEwsbn0atL7kLtnk24iYPTv6deMoZ8l_miVVP9UJtwkfveeRrHI.VOYaHitTBULfla9Yo0ehJJCNlCC2ZINCicAFZ7wv0OU&dib_tag=se&keywords=best%2B1%2Bton%2Bac%2Bfor%2Bhome&qid=1713854489&sprefix=best%2B15%2Bton%2Bac%2Bfor%2Bhome%2Caps%2C852&sr=8-3&th=1"
    },
    {
        id: 3,
        image: "https://m.media-amazon.com/images/I/41ImBPm1ZxL._SX679_.jpg",
        brand: "Godrej",
        description: "Godrej 1 Ton 3 Star, 5-In-1 Convertible Cooling, Inverter Split AC (Copper, I-Sense Technology, 2023 Model, AC 1T EI 12TINV3R32-GWA Split, White)",
        stars: 3,
        annualConsumption: "570 kWh",
        link: "https://www.amazon.in/Godrej-Convertible-Split-AC-12TINV3R32-GWA/dp/B0BN37ZCF7/ref=sr_1_5?crid=EHMI7TMSPLBX&dib=eyJ2IjoiMSJ9.7Z9M_aW8Xlwz4ZLAxHBuo8dUSWR7gk7PDWlCfJUOxo-MS5heEfIy5dgTYf0pStWKcPcaAgX25HuiJc2RCJQ8XYVdLS6W36tgFPH24dBTOFgyHEL2LIcKCxNlHZr-mMvh9A0g7uBGkeSAs6lEQmDLtbh1F0k9N3bnYdp54nsDk2PV2MPEkifC0GLRmEwsbn0atL7kLtnk24iYPTv6deMoZ8l_miVVP9UJtwkfveeRrHI.VOYaHitTBULfla9Yo0ehJJCNlCC2ZINCicAFZ7wv0OU&dib_tag=se&keywords=best%2B1%2Bton%2Bac%2Bfor%2Bhome&qid=1713854489&sprefix=best%2B15%2Bton%2Bac%2Bfor%2Bhome%2Caps%2C852&sr=8-5&th=1"
    }
];





const productsForTwoTon = [
    {
        id: 1,
        image: "https://m.media-amazon.com/images/I/41M7ocgxanL._SX679_.jpg",
        brand: "Voltas",
        description: "Voltas 2 Ton 5 Star, Inverter Split AC(Copper,4-in-1 Adjustable Mode, Anti-dust Filter, 2023 Model, 245V Vectra Plus, White)",
        stars: 5,
        annualConsumption: "500 kWh",
        link: "https://www.amazon.in/Voltas-Adjustable-Inverter-Copper-VECTRA/dp/B0BBFWM5F9/ref=sr_1_3?crid=1TTTS79MS42YM&dib=eyJ2IjoiMSJ9.NxuvxENoHM1kl2bNstMYqMYdz8DYZ3EyX1jsM77_aJd4MU2kxIe75Oa7h9BxlaIAGJihxaF_ISzQakWRyIfB8d-Benb5nZ4tCFGR5IeJ7E_G1e5W7lJknPe5ZsN80TZbrMpjpHHOK2UmyVUFywRTEO5kCC5Jkf_x2hhh0faaCyF__jRaksr4twhrXSR01qrlF0EFlCL_SjeDUryma-I5-rsCV8ozxalaglddKNkpX9w.HNECFVHHctTJ5koQqskGfXOz8F_fiyWOIiyGzoxH2Ts&dib_tag=se&keywords=best%2B2%2Bton%2Bac%2Bfor%2Bhome&qid=1713854805&sprefix=best%2B2%2Bton%2Bac%2Bfor%2Bhome%2Caps%2C299&sr=8-3&th=1"
    },
    {
        id: 2,
        image: "https://m.media-amazon.com/images/I/61oFhg35iWL._SX679_.jpg",
        brand: "Samsung",
        description: "Samsung 2 Ton 3 Star Wi-fi Enabled Inverter Split AC (Copper, Convertible 5-in-1 Cooling Mode, Anti-bacterial Filter, 2023 Model AR24CYLZABE White)",
        stars: 3,
        annualConsumption: "600 kWh",
        link: "https://www.amazon.in/Samsung-Inverter-Convertible-Anti-bacterial-AR24CYLZABE/dp/B0BRQD4L93/ref=sr_1_4?crid=1TTTS79MS42YM&dib=eyJ2IjoiMSJ9.NxuvxENoHM1kl2bNstMYqMYdz8DYZ3EyX1jsM77_aJd4MU2kxIe75Oa7h9BxlaIAGJihxaF_ISzQakWRyIfB8d-Benb5nZ4tCFGR5IeJ7E_G1e5W7lJknPe5ZsN80TZbrMpjpHHOK2UmyVUFywRTEO5kCC5Jkf_x2hhh0faaCyF__jRaksr4twhrXSR01qrlF0EFlCL_SjeDUryma-I5-rsCV8ozxalaglddKNkpX9w.HNECFVHHctTJ5koQqskGfXOz8F_fiyWOIiyGzoxH2Ts&dib_tag=se&keywords=best%2B2%2Bton%2Bac%2Bfor%2Bhome&qid=1713854805&sprefix=best%2B2%2Bton%2Bac%2Bfor%2Bhome%2Caps%2C299&sr=8-4&th=1"
    },
    {
        id: 3,
        image: "https://m.media-amazon.com/images/I/61EGlfoZULL._SX679_.jpg",
        brand: "LG",
        description: "LG 2.0 Ton 3 Star DUAL Inverter Split AC (Copper, AI Convertible 6-in-1 Cooling, 4 Way Swing, HD Filter with Anti-Virus Protection, 2024 Model, TS-Q24ENXE, White)",
        stars: 3,
        annualConsumption: "570 kWh",
        link: "https://www.amazon.in/LG-Convertible-Anti-Virus-Protection-TS-Q24ENXE/dp/B0CQM5JSDJ/ref=sr_1_5?crid=1TTTS79MS42YM&dib=eyJ2IjoiMSJ9.NxuvxENoHM1kl2bNstMYqMYdz8DYZ3EyX1jsM77_aJd4MU2kxIe75Oa7h9BxlaIAGJihxaF_ISzQakWRyIfB8d-Benb5nZ4tCFGR5IeJ7E_G1e5W7lJknPe5ZsN80TZbrMpjpHHOK2UmyVUFywRTEO5kCC5Jkf_x2hhh0faaCyF__jRaksr4twhrXSR01qrlF0EFlCL_SjeDUryma-I5-rsCV8ozxalaglddKNkpX9w.HNECFVHHctTJ5koQqskGfXOz8F_fiyWOIiyGzoxH2Ts&dib_tag=se&keywords=best%2B2%2Bton%2Bac%2Bfor%2Bhome&qid=1713854805&sprefix=best%2B2%2Bton%2Bac%2Bfor%2Bhome%2Caps%2C299&sr=8-5&th=1"
    }
];

const ProductSuggestionCard = () => {
    const cardRefs = useRef([]);
    const cardRefsSecond = useRef([]);
    const cardRefsThird = useRef([]);
    const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(false);
    const [isSecondSectionVisible, setIsSecondSectionVisible] = useState(false);
    const [isThirdSectionVisible, setIsThirdSectionVisible] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Trigger when 50% of the card is visible
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsFirstSectionVisible(true);
                }
            });
        }, options);

        cardRefs.current.forEach(ref => {
            observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, []);



    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Trigger when 50% of the card is visible
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsSecondSectionVisible(true);
                }
            });
        }, options);

        cardRefsSecond.current.forEach(ref => {
            observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, []);



    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Trigger when 50% of the card is visible
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsThirdSectionVisible(true);
                }
            });
        }, options);

        cardRefsThird.current.forEach(ref => {
            observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, []);


    

    return (
        <>
            <div className="typewriter-container">
                <div className="typewriter">Recommended 1.5 Ton AC</div>
            </div>
            <div className="product-suggestion-container" id="first-section">
            {products.map((product, index) => (
                    <Card
                        key={product.id}
                        ref={el => (cardRefs.current[index] = el)}
                        className={`product-card ${isFirstSectionVisible ? 'bubble-in' : ''}`}
                        onClick={() => window.open(product.link, '_blank')}
                    >
                        <CardMedia style={{ height: 200 }} image={product.image} title={product.brand} />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                <span style={{color: 'rgb(52, 141, 204)'}}>Brand : </span><i>{product.brand}</i>
                                <br />
                                {[...Array(product.stars)].map((_, index) => (
                                    <StarRateRoundedIcon key={index} style={{ color: 'gold' }} />
                                ))}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <span style={{color: 'rgb(52, 141, 204)'}}>Annual Consumption : </span> {product.annualConsumption}
                                <br />
                                <span style={{color: 'rgb(52, 141, 204)'}}>Description : </span><i>{product.description}</i>
                            </Typography>
                            <br />
                            <a href={product.link} target="_blank" rel="noreferrer" >
                                <Typography variant="body2" color="primary" component="p">
                                    View Product
                                </Typography>
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="typewriter-container">
                <div className="typewriter">Recommended 1 Ton AC</div>
            </div>
            <div className="product-suggestion-container" id="second-section">
            {productsForOneTon.map((product, index) => (
                    <Card
                        key={product.id}
                        ref={el => (cardRefsSecond.current[index] = el)}
                        className={`product-card ${isSecondSectionVisible ? 'bubble-in' : ''}`}
                        onClick={() => window.open(product.link, '_blank')}
                    >
                        <CardMedia style={{ height: 200 }} image={product.image} title={product.brand} />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                <span style={{color: 'rgb(52, 141, 204)'}}>Brand : </span><i>{product.brand}</i>
                                <br />
                                {[...Array(product.stars)].map((_, index) => (
                                    <StarRateRoundedIcon key={index} style={{ color: 'gold' }} />
                                ))}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <span style={{color: 'rgb(52, 141, 204)'}}>Annual Consumption : </span> {product.annualConsumption}
                                <br />
                                <span style={{color: 'rgb(52, 141, 204)'}}>Description : </span><i>{product.description}</i>
                            </Typography>
                            <br />
                            <a href={product.link} target="_blank" rel="noreferrer" >
                                <Typography variant="body2" color="primary" component="p">
                                    View Product
                                </Typography>
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="typewriter-container">
                <div className="typewriter">Recommended 2 Ton AC</div>
            </div>
            <div className="product-suggestion-container" id="third-section">
            {productsForTwoTon.map((product, index) => (
                    <Card
                        key={product.id}
                        ref={el => (cardRefsThird.current[index] = el)}
                        className={`product-card ${isThirdSectionVisible ? 'bubble-in' : ''}`}
                        onClick={() => window.open(product.link, '_blank')}
                    >
                        <CardMedia style={{ height: 200 }} image={product.image} title={product.brand} />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                <span style={{color: 'rgb(52, 141, 204)'}}>Brand : </span><i>{product.brand}</i>
                                <br />
                                {[...Array(product.stars)].map((_, index) => (
                                    <StarRateRoundedIcon key={index} style={{ color: 'gold' }} />
                                ))}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <span style={{color: 'rgb(52, 141, 204)'}}>Annual Consumption : </span> {product.annualConsumption}
                                <br />
                                <span style={{color: 'rgb(52, 141, 204)'}}>Description : </span><i>{product.description}</i>
                            </Typography>
                            <br />
                            <a href={product.link} target="_blank" rel="noreferrer" >
                                <Typography variant="body2" color="primary" component="p">
                                    View Product
                                </Typography>
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default ProductSuggestionCard;
