"use strict";
exports.id = 972;
exports.ids = [972];
exports.modules = {

/***/ 972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_RideSelector)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "tailwind-styled-components"
var external_tailwind_styled_components_ = __webpack_require__(4191);
var external_tailwind_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_tailwind_styled_components_);
;// CONCATENATED MODULE: ./Data/carList.js
const carList = [
    {
        imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
        service: 'UberX',
        multiplier: 1
    },
    {
        imgUrl: 'https://i.ibb.co/YDYMKny/uberxl.png',
        service: 'UberXL',
        multiplier: 1.5
    },
    {
        imgUrl: 'https://i.ibb.co/Xx4G91m/uberblack.png',
        service: 'Black',
        multiplier: 2
    },
    {
        imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
        service: 'Comfort',
        multiplier: 1.2
    },
    {
        imgUrl: ' https://i.ibb.co/1nStPWT/uberblacksuv.png',
        service: 'Black SUV',
        multiplier: 2.8
    }
];

;// CONCATENATED MODULE: ./pages/components/RideSelector.js




function RideSelector({ pickupCoordinates , dropoffCoordinates  }) {
    const { 0: rideDuration , 1: setRideDuration  } = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        //get ride duration from mapbox on basis of pickup and dropoff coordinates 
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiZmF0aW1hLXNlZW1hYjIwMDEiLCJhIjoiY2t3dDltamRyMWViNDJ1cmxnM3EzeTlieSJ9.BmUtmLcYV2h_GJeZDxjWpQ`).then((res)=>res.json()
        ).then((data)=>setRideDuration(data.routes[0].duration / 100)
        );
    }, [
        pickupCoordinates,
        dropoffCoordinates
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                children: "Choose a ride, or swap up for more"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CarList, {
                children: carList.map((car, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Car, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(CarImage, {
                                src: car.imgUrl
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CarDetails, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Service, {
                                        children: car.service
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Time, {
                                        children: "20 min"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Price, {
                                children: "$" + (rideDuration * car.multiplier).toFixed(2)
                            })
                        ]
                    }, (car, index))
                )
            })
        ]
    }));
}
/* harmony default export */ const components_RideSelector = (RideSelector);
const Wrapper = (external_tailwind_styled_components_default()).div` flex flex-col flex-1 overflow-y-scroll`;
const CarList = (external_tailwind_styled_components_default()).div` overflow-y-scroll `;
const Car = (external_tailwind_styled_components_default()).div`flex  `;
const CarDetails = (external_tailwind_styled_components_default()).div`items-center p-4  flex-1`;
const Service = (external_tailwind_styled_components_default()).div`font-medium`;
const Time = (external_tailwind_styled_components_default()).div`text-xs text-blue-500 `;
const Price = (external_tailwind_styled_components_default()).div`text-sm `;
const CarImage = (external_tailwind_styled_components_default()).img`h-14 mr-2`;
const Title = (external_tailwind_styled_components_default()).div` text-gray-500 text-cdenter text-xs py-2 border-b `;


/***/ })

};
;