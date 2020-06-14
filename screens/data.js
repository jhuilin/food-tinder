// url: https://www.ikea.com/us/en/cat/chairs-fu002/
// script
/*
let data = []; 
let elms = document.getElementsByClassName('product-compact')
for(var i=0; i < elms.length; i++) { 
    const curr = elms[i];
    const price = curr.getElementsByClassName('product-compact__price__value')[0].innerText;
    const name = curr.getElementsByClassName('product-compact__name')[0].innerText;
    const image = curr.getElementsByTagName('img')[0].src;
    data.push({
      id: curr.dataset.refId,
      price,
      name,
      image
    })
}
JSON.stringify(data, null, 2)
*/
export default [
  {
    id: "40454230",
    price: "$129.00",
    name: "BINGSTA",
    image:
      "https://www.ikea.com/us/en/images/products/bingsta-armchair__0793271_PE765307_S5.JPG?f=xs",
  },
  {
    id: "70078463",
    price: "$49.99",
    name: "PELLO",
    image:
      "https://www.ikea.com/us/en/images/products/pello-armchair__38296_PE130209_S5.JPG?f=xs",
  },
  {
    id: "99305926",
    price: "$99.00",
    name: "POÄNG",
    image:
      "https://www.ikea.com/us/en/images/products/poaeng-armchair__0497130_PE628957_S5.JPG?f=xs",
  },
  {
    id: "90359829",
    price: "$249.00",
    name: "STRANDMON",
    image:
      "https://www.ikea.com/us/en/images/products/strandmon-wing-chair__0325432_PE517964_S5.JPG?f=xs",
  },
  {
    id: "29221746",
    price: "$149.00",
    name: "KOARP",
    image:
      "https://www.ikea.com/us/en/images/products/koarp-armchair__0522337_PE643233_S5.JPG?f=xs",
  },
  {
    id: "89129085",
    price: "$249.00",
    name: "EKTORP",
    image:
      "https://www.ikea.com/us/en/images/products/ektorp-armchair__0386173_PE559138_S5.JPG?f=xs",
  },
];
