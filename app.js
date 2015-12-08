var n = 0;
var f = 0;
var timeH = ['', 'Total', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var custpH = 0;
var storefronts = [];

function Storefront(sname, minCust, maxCust, avpC, rslt) {
  this.sname = sname;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avpC = avpC;
  storefronts.push(this);
  this.rslt = [];
  this.total = 0;
  this.calcCust();
}

Storefront.prototype.getCust = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

Storefront.prototype.calcCust = function() {
   for (n = 0; n < timeH.length - 2; n++) {
    this.custpH = this.getCust(this.minCust, this.maxCust);
    console.log(this.custpH + " is customers per hour");
    this.rslt.push(Math.round(this.custpH * this.avpC));
    this.total += this.rslt[n];
    console.log(this.rslt[n] + " is rslt at n");
    console.log(this.total + " is the total");
  }
  this.rslt.unshift(this.total);
};

var pikePlace = new Storefront('Pike Place Market', 17, 88, 5.2);
var seaTac = new Storefront('SeaTac Airport', 6, 44, 1.2);
var southcenterMall = new Storefront('Southcenter Mall', 11, 38, 1.9);
var bellSquare = new Storefront('Bellevue Square', 20, 48, 3.3);
var alki = new Storefront('Alki', 3, 24, 2.6);

function outWr() {
  var tmMk = document.getElementById('tm');
// Create a new TR element <tr></tr>
var tableEl = document.createElement('table');
var trEl = document.createElement('tr');
var tdEl = document.createElement('td');

// Loop through the months array, one index at a time
for (var i = 0; i <= timeH.length; i++) {
  // For each iteration of the loop; Create a TD element <td></td>
  var thEl = document.createElement('th');
  // For each LI element; Assign the contents of the array[i] to the TD's text content
  thEl.textContent = timeH[i];
  // Append the populated LI element back to the UL as a Child
  trEl.appendChild(thEl);
}
// Append the completely populated UL to the monthsEl element in index.html
tableEl.appendChild(trEl);

for (var g = 0; g < storefronts.length; g++) {
  var taEl = document.createElement('tr');
  var tsEl = document.createElement('th');
  tsEl.textContent = storefronts[g].sname;
  taEl.appendChild(tsEl);
  console.log(storefronts[1].rslt.length);
    for (var r = 0; r < storefronts[g].rslt.length; r++) {

      var tcEl = document.createElement('td');
      tcEl.textContent = storefronts[g].rslt[r];
      taEl.appendChild(tcEl);
    }
    tableEl.appendChild(taEl);
  }
tmMk.appendChild(tableEl);
};

function watchmego() {
  for (i = 0; i < storefronts.length, i++;) {
    storefronts[i].getCust();
    storefronts[i].calcCust();
    storefronts[i].outWr();
  }
}
outWr();
watchmego();
