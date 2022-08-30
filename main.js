// fetch("https://northwind.vercel.app/api/products")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Product length ", data.length);
//     console.log(
//       "ProductCategoryId",
//       data.filter(
//         (product) => product.categoryId == 3 && product.unitPrice < 30
//       ).length
//     );
//     console.log(
//       "Product A",
//       data.filter((pr) => pr.name?.toLowerCase().startsWith("a"))
//     );

//     console.log(
//       "Products X",
//       data.filter((pr) => pr.name?.toLowerCase().includes("x"))
//     );
//   });

// fetch("https://northwind.vercel.app/api/products")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(
//       "discontinued",
//       data.filter((p) => p.discontinued == true)
//     );

//     let prods = data.filter((p) => p.discontinued == true);

//     console.log(
//       "sorted",
//       prods.sort((a, b) => a.unitPrice - b.unitPrice)
//     );
//   });

fetch("https://northwind.vercel.app/api/orders")
  .then((response) => response.json())
  .then((data) => {
    // console.log(
    //   "details",
    //   data.filter((p) => p.details?.length > 1)
    // );

    // let max = 0;
    // let maxObj = {};
    // data.forEach((element) => {
    //   var sum = 0;
    //   element.details.forEach((dtl) => {
    //     sum +=
    //       dtl.unitPrice * dtl.quantity -
    //       dtl.unitPrice * dtl.quantity * dtl.discount;
    //   });
    //   if (sum > max) {
    //     max = sum;
    //     maxObj = element;
    //   }
    // });
    // console.log(max);
    // console.log(maxObj);

    //1
    let ordersEmployeeId = data.filter((p) => p.employeeId == 5);
    let sum = 0;
    ordersEmployeeId.forEach((element) => {
      element.details.forEach((dtl) => {
        sum +=
          dtl.unitPrice * dtl.quantity -
          dtl.unitPrice * dtl.quantity * dtl.discount;
      });
    });
    console.log(sum);

    //2
    let newArr = [];
    data.forEach((element) => {
      var sum = 0;
      element.details.forEach((dtl) => {
        sum +=
          dtl.unitPrice * dtl.quantity -
          dtl.unitPrice * dtl.quantity * dtl.discount;
      });
      let duplicate = newArr.find((x) => x.customerId == element.customerId);
      if (duplicate) {
        duplicate.total += sum;
      } else {
        element.total = sum;
        newArr.push(element);
      }
    });
    console.log("fav customer", newArr.sort((a, b) => b.total - a.total)[0]);
    //3
    console.log(
      "least fav customer",
      newArr.sort((a, b) => a.total - b.total)[0]
    );

    //4
    let ordersByYear = data.filter((elem) =>
      elem.orderDate?.startsWith("1996")
    );
    console.log("1996 orders", ordersByYear);

    //5

    let late = data.filter(
      (elem) => new Date(elem.requiredDate) < new Date(elem.shippedDate)
    );

    console.log("late orders", late);

    //6

    let ordersOfFoloko = data.filter((elem) => elem.customerId == "FOLKO");
    console.log(ordersOfFoloko);
    let sumF = 0;
    ordersOfFoloko.forEach((element) => {
      element.details.forEach((dtl) => {
        sumF +=
          dtl.unitPrice * dtl.quantity -
          dtl.unitPrice * dtl.quantity * dtl.discount;
      });
    });
    console.log("FOLKO", sumF/ordersOfFoloko.length)
    


    //low-1

    let ordersSweden = data.filter((p) => p.shipAddress?.country == 'Sweden');
    let sumSweden = 0;
    let max = 0;
    let maxObj ={};
    let min = 0;
    let minObj = {};
    ordersSweden.forEach((element) => {
      var sumS = 0
      element.details.forEach((dtl) => {
        sumS +=
          dtl.unitPrice * dtl.quantity -
          dtl.unitPrice * dtl.quantity * dtl.discount;
        });
      sumSweden+=sumS
      if(max < sumS){
        max = sumS
        maxObj = element
      }
      if(min > sumS || min == 0){
        console.log("if", sumS);
        min = sumS;
        minObj = element
      }
    }); 
    console.log("Sweden",sumSweden);

    //low-2
    console.log("Sweden average", sumSweden/ordersSweden.length)

    //low -3

    console.log("Min Sweden", minObj)

    console.log(min)

    //low-4

    console.log("Max Sweden",maxObj)


  });


  Array.prototype.customEvery = function(cb){
    for(let i = 0; i<this.length; i++){
      if(!cb(this[i], i, this)){
        return false;
      }
    }
    return true;
  }

  let arr = [2,4,6]
  let res = arr.customEvery((x) => x % 2 == 0);
  console.log(res)