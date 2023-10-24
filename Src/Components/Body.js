
import { RestaurantCard } from "./RestaurantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom';
import {useOnline} from "../utils/useOnline";
import RestaurantMenu from "./RestaurantMenu";

const restaurantlist = [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "27447",
        "name": "Pista House Restaurant & Bakery\t",
        "uuid": "9c988bb5-a93a-44de-a47f-b4ccab64cc8b",
        "city": "3",
        "area": "Hitec City",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "v7btfi5brrsijry8j02n",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Chinese",
          "Kebabs",
          "Mughlai",
          "Tandoor",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 1.7000000476837158,
        "slugs": {
          "restaurant": "pista-house-multicuisine-restaurant-kondapur-kondapur",
          "city": "hyderabad"
        },
        "cityState": "3",
        "address": "Plot: 7 Survey Number 6, Tirumala House, Beside Bata showroom, opposite Botanical Garden, Kondapur to Gachibowli road",
        "locality": "Kondapur",
        "parentId": 319765,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "Flat ₹125 off",
          "shortDescriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹125 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2800,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2800,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2800",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6323543~p=1~eid=00000187-5bfd-9bdd-1500-021900160140",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "27447",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "lastMileTravel": 1.7000000476837158,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "218068",
        "name": "Mehfil",
        "uuid": "c9213116-1e89-4cb3-81a9-b11f2d838fd3",
        "city": "3",
        "area": "Gachibowli",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "rfngxpkeablm4ses3d0j",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Tandoor",
          "Chinese",
          "Kebabs"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 1,
        "slugs": {
          "restaurant": "mehfil-gachibowli-gachibowli",
          "city": "hyderabad"
        },
        "cityState": "3",
        "address": "3rd Floor, 2-37/VN/140/A/ Sri Mallikarjuna Towers, Gachibowli Road, Vinayak Nagar, Indira Nagar,  Gachibowli",
        "locality": "Vinayak Nagar",
        "parentId": 637,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "10% off",
          "shortDescriptionList": [
            {
              "meta": "10% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "10% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2800,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2800,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2800",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "218068",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 1,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "160087",
        "name": "Varalakshmi Tiffins",
        "uuid": "78ac007b-56f1-477a-987d-38d7dc6f123a",
        "city": "3",
        "area": "Gachibowli",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "8523266de1213e8ea57e5df4eedf747e",
        "cuisines": [
          "South Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 1.2999999523162842,
        "slugs": {
          "restaurant": "varalakshmi-tiffins-gachibowli",
          "city": "hyderabad"
        },
        "cityState": "3",
        "address": "DLF Cybercity Opposite Gate no:-2, Gachibowli, Hyderabad, Telangana 500032, India",
        "locality": "Opposite Gate No 2",
        "parentId": 6482,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2800,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2800,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2800",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6325025~p=4~eid=00000187-5bfd-9bdd-1500-021a0016046d",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "160087",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 1.2999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.5",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "436805",
        "name": "Lucky Multicuisine Restaurant",
        "uuid": "ff39450a-e0b0-440b-8ff4-d5dfe4359dbb",
        "city": "3",
        "area": "Madhapur",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "n2kt3noplim3agty9ox8",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Tandoor",
          "South Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "slaString": "35 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "lucky-multicuisine-restaurant-madhapur-madhapur",
          "city": "hyderabad"
        },
        "cityState": "3",
        "address": "1-74/2, Guttalabegumpet, Madhapur, Hyderabad - 500019",
        "locality": "Guttalabegumpet",
        "parentId": 18963,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "Flat ₹125 off",
          "shortDescriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹125 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "436805",
          "deliveryTime": 35,
          "minDeliveryTime": 35,
          "maxDeliveryTime": 35,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.5",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "33040",
        "name": "Shah Ghouse Hotel & Restaurant",
        "uuid": "202db6b9-d595-449c-bd97-0610ca334157",
        "city": "3",
        "area": "Hitec City",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "hnx9nazpxdpqpypjo8ld",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Chinese",
          "Mughlai",
          "Tandoor"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 3.799999952316284,
        "slugs": {
          "restaurant": "shah-ghouse-hotel-restaurant-gachibowli-gachibowli",
          "city": "hyderabad"
        },
        "cityState": "3",
        "address": "Near Rai Durgam Police Station, Gachibowli Main Road, Gachibowli, Hyderabad",
        "locality": "Bio-Diversity Park",
        "parentId": 19271,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "20% off",
          "shortDescriptionList": [
            {
              "meta": "20% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3600,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3600,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3600",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "33040",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "lastMileTravel": 3.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "30945",
        "name": "Big Bowl",
        "uuid": "1ef36a05-823c-4da3-980a-f796acedadf2",
        "city": "3",
        "area": "Hanuman Nagar, Kothaguda",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "jzsfkkqbmaiit7tjcoif",
        "cuisines": [
          "Chinese",
          "Asian"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 3.700000047683716,
        "slugs": {
          "restaurant": "big-bowl-kondapur-kondapur",
          "city": "hyderabad"
        },
        "cityState": "3",
        "address": "Ravi Enclave 1st floor, Farm Fries 1-111/4/B, Gachibowli - Miyapur Rd, Hanuman Nagar, Shilpa Hills, Kondapur, Telangana 500084",
        "locality": "Hanuman Nagar",
        "parentId": 3829,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "Flat ₹125 off",
          "shortDescriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹125 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3600,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3600,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3600",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6323590~p=7~eid=00000187-5bfd-9bdd-1500-021b0016075c",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "30945",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "lastMileTravel": 3.700000047683716,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    }
  ]

  function filterdata(searchText, allrestaurants)
  {
    const filtereddata=allrestaurants.filter((allrestaurants)=>
    allrestaurants.data.name.includes(searchText)
    );
   //console.log(searchText);
   console.log(filtereddata);
    return filtereddata;
  }

export const Body =()=>{

    const searchTxt="KFC";
  const[searchText,setSearchText]=useState("");

  const[restaurants,setRestaurant]=useState([]);
  const[allrestaurants,setAllRestaurants]=useState([]);


  //UseEffect Hook
  useEffect(() => {
    getRestaurants();
  },[]);
  const isonline=useOnline();
  if(!isonline)
  {
    return<h1>You are offline please check you connection</h1>
  }
  
  async function getRestaurants(){
    const data= await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4455331&lng=78.3606113&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    

    console.log(json)
    //We use optional chainging instead of this
    setRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants)
    
    console.log(restaurants)
    setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants)
  }

  
    return (allrestaurants.length == 0 )?
      <Shimmer/>
     : (
        <>
       <div className='search-container'>
        <input type="text" className='search-input' placeholder="Search" value={searchText}
        onChange={(e)=>{
            setSearchText(e.target.value)
        }}
        ></input>

        <button className="searh-btn" onClick={()=>{

            const data=filterdata(searchText,allrestaurants)
            setRestaurant(data);

        }}>Search</button>

       </div>

      <div className="restaurant-list">
        {
        (restaurants.length==0)?
        (<h1>No retaurants matches</h1>
        ):
      restaurants.map((restaurant)=>{
      return  <Link to={"/restaurant/"+restaurant.info.id}key={restaurant.info.id}><RestaurantCard {...restaurant.info} /></Link>;
  })}
      </div>
      </>
    );
  }
  