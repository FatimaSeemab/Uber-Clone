"use strict";
exports.id = 822;
exports.ids = [822,36];
exports.modules = {

/***/ 7142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "carList": () => (/* binding */ carList)
/* harmony export */ });
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


/***/ }),

/***/ 1822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Data_carList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7142);




function RideSelector({ pickupCoordinates , dropoffCoordinates  }) {
    const { 0: rideDuration , 1: setRideDuration  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        //get ride duration from mapbox on basis of pickup and dropoff coordinates 
        rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiZmF0aW1hLXNlZW1hYjIwMDEiLCJhIjoiY2t3dDltamRyMWViNDJ1cmxnM3EzeTlieSJ9.BmUtmLcYV2h_GJeZDxjWpQ`).then((res)=>res.json()
        ).then((data)=>setRideDuration(data.routes[0].duration / 100)
        );
    }, [
        pickupCoordinates,
        dropoffCoordinates
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                children: "Choose a ride, or swap up for more"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CarList, {
                children: _Data_carList_js__WEBPACK_IMPORTED_MODULE_3__.carList.map((car, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Car, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CarImage, {
                                src: car.imgUrl
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CarDetails, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Service, {
                                        children: car.service
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Time, {
                                        children: "20 min"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Price, {
                                children: "$" + (rideDuration * car.multiplier).toFixed(2)
                            })
                        ]
                    }, (car, index))
                )
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RideSelector);
const Wrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)` flex flex-col flex-1 overflow-y-scroll`;
const CarList = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)` overflow-y-scroll `;
const Car = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`flex  `;
const CarDetails = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`items-center p-4  flex-1`;
const Service = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`font-medium`;
const Time = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`text-xs text-blue-500 `;
const Price = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`text-sm `;
const CarImage = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`h-14 mr-2`;
const Title = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)` text-gray-500 text-cdenter text-xs py-2 border-b `;


/***/ })

};
;