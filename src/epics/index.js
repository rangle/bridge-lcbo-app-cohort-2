import { combineEpics } from "redux-observable";
// import { $ } from '../../node_modules/jQuery/lib/node-jquery';
// import $ from 'jquery';
import { GET_API_RESULTS, sendAPIResults } from "../redux/actions";
import axios from 'axios'
var fetchProducts





// require("jsdom").env("", function(err, window) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//
//     var $ = require("../../node_modules/jQuery/lib/node-jquery")(window);


const LCBO_access_key =
  "Token MDoyODdhM2Q2OC02ZGI2LTExZTctOGUxNy0yZjI2ZmZkNWQwYTQ6Q3hxODRJdVpTdlA5cEUzTmgwRmhUWWpJalRnWXpOOEFQbEZ";

const myHeaders = new Headers();
// myHeaders.append("Access-Control-Allow-Origin", '*')
// myHeaders.append("Authorization", LCBO_access_key);

// myHeaders.Access-Control-Allow-Origin='*'

 fetchProducts = searchString =>
  // fetch(`http://pokeapi.co/api/v2/pokemon/${6}`)

  fetch('https://lcboapi.com/products',
    // `http://lcboapi.com/products`,
     {
    method: "GET",
    // mode: 'no-cors',
    mode: 'cors',
    Authorization: LCBO_access_key,
    // 'content-type': 'application/json',
  })
    //   $.ajax({
    //   url: 'http://lcboapi.com/products/346197',
    //   headers: {
    //     Authorization: 'Token MDoyODdhM2Q2OC02ZGI2LTExZTctOGUxNy0yZjI2ZmZkNWQwYTQ6Q3hxODRJdVpTdlA5cEUzTmgwRmhUWWpJalRnWXpOOEFQbEZ'
    //   }
    // })

    // axios.get('http://lcboapi.com/products/346197', { 'headers': { 'Authorization': LCBO_access_key } })
    .then(res => res.json())
    .then(res => console.log(8, "epics", res))
    .catch(e => {console.log('request failed', e);
    return sampleData});


// });
//epics go here
const apiFetchEpic = action$ =>
  action$
    .ofType(GET_API_RESULTS)
    // .mergeMap(action => fetchProducts()) //TODO: use search string later.
    .map(action => {
      // console.log(60, sampleData);
      return sendAPIResults(sampleData)});

export default combineEpics(apiFetchEpic);


var sampleData = [
{
id: 300699,
is_dead: false,
name: "Molson Canadian",
tags: "molson canadian beer lager canada ontario molson's molsons brewery of limited can",
is_discontinued: false,
price_in_cents: 1450,
regular_price_in_cents: 1450,
limited_time_offer_savings_in_cents: 0,
limited_time_offer_ends_on: null,
bonus_reward_miles: 5,
bonus_reward_miles_ends_on: "2017-08-12",
stock_type: "LCBO",
primary_category: "Beer",
secondary_category: "Lager",
origin: "Canada, Ontario",
package: "6x473 mL can",
package_unit_type: "can",
package_unit_volume_in_milliliters: 473,
total_package_units: 6,
volume_in_milliliters: 2838,
alcohol_content: 500,
price_per_liter_of_alcohol_in_cents: 1021,
price_per_liter_in_cents: 510,
inventory_count: 57842,
inventory_volume_in_milliliters: 164155596,
inventory_price_in_cents: 83870900,
sugar_content: null,
producer_name: "Molson's Brewery of Canada Limited",
released_on: null,
has_value_added_promotion: false,
has_limited_time_offer: false,
has_bonus_reward_miles: true,
is_seasonal: false,
is_vqa: false,
is_ocb: false,
is_kosher: false,
value_added_promotion_description: null,
description: null,
serving_suggestion: null,
tasting_note: null,
updated_at: "2017-07-23T14:34:27.659Z",
image_thumb_url: "https://dx5vpyka4lqst.cloudfront.net/products/300699/images/thumb.png",
image_url: "https://dx5vpyka4lqst.cloudfront.net/products/300699/images/full.jpeg",
varietal: "North American Lager",
style: "Light & Malty",
tertiary_category: "Pale Lager",
sugar_in_grams_per_liter: null,
clearance_sale_savings_in_cents: 0,
has_clearance_sale: false,
product_no: 300699
},
{
id: 311787,
is_dead: false,
name: "Budweiser",
tags: "budweiser beer lager canada ontario labatt breweries can",
is_discontinued: false,
price_in_cents: 1450,
regular_price_in_cents: 1450,
limited_time_offer_savings_in_cents: 0,
limited_time_offer_ends_on: null,
bonus_reward_miles: 0,
bonus_reward_miles_ends_on: null,
stock_type: "LCBO",
primary_category: "Beer",
secondary_category: "Lager",
origin: "Canada, Ontario",
package: "6x473 mL can",
package_unit_type: "can",
package_unit_volume_in_milliliters: 473,
total_package_units: 6,
volume_in_milliliters: 2838,
alcohol_content: 500,
price_per_liter_of_alcohol_in_cents: 1021,
price_per_liter_in_cents: 510,
inventory_count: 53523,
inventory_volume_in_milliliters: 151898274,
inventory_price_in_cents: 77608350,
sugar_content: null,
producer_name: "Labatt Breweries Ontario",
released_on: null,
has_value_added_promotion: false,
has_limited_time_offer: false,
has_bonus_reward_miles: false,
is_seasonal: false,
is_vqa: false,
is_ocb: false,
is_kosher: false,
value_added_promotion_description: null,
description: null,
serving_suggestion: null,
tasting_note: null,
updated_at: "2017-07-23T14:19:38.955Z",
image_thumb_url: "https://dx5vpyka4lqst.cloudfront.net/products/311787/images/thumb.png",
image_url: "https://dx5vpyka4lqst.cloudfront.net/products/311787/images/full.jpeg",
varietal: "North American Lager",
style: "Light & Malty",
tertiary_category: "Pale Lager",
sugar_in_grams_per_liter: null,
clearance_sale_savings_in_cents: 0,
has_clearance_sale: false,
product_no: 311787
},
{
id: 300681,
is_dead: false,
name: "Coors Light",
tags: "coors light beer lager canada ontario molson's molsons brewery of limited can",
is_discontinued: false,
price_in_cents: 1450,
regular_price_in_cents: 1450,
limited_time_offer_savings_in_cents: 0,
limited_time_offer_ends_on: null,
bonus_reward_miles: 0,
bonus_reward_miles_ends_on: null,
stock_type: "LCBO",
primary_category: "Beer",
secondary_category: "Lager",
origin: "Canada, Ontario",
package: "6x473 mL can",
package_unit_type: "can",
package_unit_volume_in_milliliters: 473,
total_package_units: 6,
volume_in_milliliters: 2838,
alcohol_content: 400,
price_per_liter_of_alcohol_in_cents: 1277,
price_per_liter_in_cents: 510,
inventory_count: 53392,
inventory_volume_in_milliliters: 151526496,
inventory_price_in_cents: 77418400,
sugar_content: null,
producer_name: "Molson's Brewery of Canada Limited",
released_on: null,
has_value_added_promotion: false,
has_limited_time_offer: false,
has_bonus_reward_miles: false,
is_seasonal: false,
is_vqa: false,
is_ocb: false,
is_kosher: false,
value_added_promotion_description: null,
description: null,
serving_suggestion: null,
tasting_note: null,
updated_at: "2017-07-23T14:23:10.365Z",
image_thumb_url: "https://dx5vpyka4lqst.cloudfront.net/products/300681/images/thumb.png",
image_url: "https://dx5vpyka4lqst.cloudfront.net/products/300681/images/full.jpeg",
varietal: "Light Lager",
style: "Light & Malty",
tertiary_category: "Light Lager",
sugar_in_grams_per_liter: null,
clearance_sale_savings_in_cents: 0,
has_clearance_sale: false,
product_no: 300681
},
{
id: 696161,
is_dead: false,
name: "Busch",
tags: "busch beer lager canada ontario labatt breweries can",
is_discontinued: false,
price_in_cents: 1230,
regular_price_in_cents: 1230,
limited_time_offer_savings_in_cents: 0,
limited_time_offer_ends_on: null,
bonus_reward_miles: 0,
bonus_reward_miles_ends_on: null,
stock_type: "LCBO",
primary_category: "Beer",
secondary_category: "Lager",
origin: "Canada, Ontario",
package: "6x473 mL can",
package_unit_type: "can",
package_unit_volume_in_milliliters: 473,
total_package_units: 6,
volume_in_milliliters: 2838,
alcohol_content: 470,
price_per_liter_of_alcohol_in_cents: 922,
price_per_liter_in_cents: 433,
inventory_count: 45630,
inventory_volume_in_milliliters: 129497940,
inventory_price_in_cents: 56124900,
sugar_content: null,
producer_name: "Labatt Breweries Ontario",
released_on: null,
has_value_added_promotion: false,
has_limited_time_offer: false,
has_bonus_reward_miles: false,
is_seasonal: false,
is_vqa: false,
is_ocb: false,
is_kosher: false,
value_added_promotion_description: null,
description: null,
serving_suggestion: null,
tasting_note: null,
updated_at: "2017-07-23T14:19:47.652Z",
image_thumb_url: "https://dx5vpyka4lqst.cloudfront.net/products/696161/images/thumb.png",
image_url: "https://dx5vpyka4lqst.cloudfront.net/products/696161/images/full.jpeg",
varietal: "North American Lager",
style: "Light & Malty",
tertiary_category: "Pale Lager",
sugar_in_grams_per_liter: null,
clearance_sale_savings_in_cents: 0,
has_clearance_sale: false,
product_no: 696161
}]
